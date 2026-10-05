#!/usr/bin/env node
/**
 * Records a feature-tour video of the Pchum Ben web app with Playwright.
 *
 * Usage:
 *   npm run dev                 # in another terminal
 *   npm run record:tour         # or: BASE_URL=https://pchumben.vercel.app npm run record:tour
 *
 * Output (in ./recordings):
 *   pchum-ben-tour-desktop.mp4   1440x900
 *   pchum-ben-tour-mobile.mp4    390x844 (portrait, good for Reels/TikTok/Stories)
 *
 * Every run uses a fresh browser context, so it never touches your own
 * localStorage progress.
 */
import { chromium } from 'playwright';
import ffmpegPath from 'ffmpeg-static';
import { execFileSync } from 'node:child_process';
import { mkdirSync, renameSync, rmSync, existsSync } from 'node:fs';
import path from 'node:path';

const BASE_URL = (process.env.BASE_URL || 'http://localhost:5174').replace(/\/$/, '');
const OUT_DIR = path.resolve('recordings');
const RAW_DIR = path.join(OUT_DIR, '.raw');

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/** Smoothly scroll by `distance` px in small wheel steps. */
async function smoothScroll(page, distance, { step = 90, delay = 28 } = {}) {
  const steps = Math.max(1, Math.round(Math.abs(distance) / step));
  const dy = distance / steps;
  for (let i = 0; i < steps; i++) {
    await page.evaluate((y) => window.scrollBy(0, y), dy);
    await sleep(delay);
  }
}

/** Scroll through the whole page, pausing occasionally, then return to top. */
async function scrollPage(page, { maxPx = 6000, chunk = 650, pause = 650, backToTop = true } = {}) {
  const total = await page.evaluate(() => document.documentElement.scrollHeight - window.innerHeight);
  const target = Math.min(total, maxPx);
  let done = 0;
  while (done < target) {
    const d = Math.min(chunk, target - done);
    await smoothScroll(page, d);
    done += d;
    await sleep(pause);
  }
  if (backToTop) {
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'smooth' }));
    await sleep(900);
  }
}

async function go(page, route, settle = 1600) {
  await page.goto(`${BASE_URL}${route}`, { waitUntil: 'networkidle' });
  await sleep(settle);
}

/** Try an optional interaction; never fail the whole tour because of it. */
async function tryStep(label, fn) {
  try {
    await fn();
  } catch (err) {
    console.warn(`  ⚠︎ skipped "${label}": ${err.message.split('\n')[0]}`);
  }
}

async function clickAndShow(locator, wait = 1200) {
  await locator.scrollIntoViewIfNeeded({ timeout: 3000 });
  await sleep(350);
  await locator.click({ timeout: 3000 });
  await sleep(wait);
}

// ───────────────────────────── Desktop tour ─────────────────────────────
async function desktopTour(page) {
  console.log('▶ Home');
  await go(page, '/', 2500);
  await smoothScroll(page, 700);
  await sleep(1500); // countdown card (ព.ស. ២៥៧០)

  await tryStep('food pills', async () => {
    await clickAndShow(page.getByRole('button', { name: /នំគម/ }).first());
    await clickAndShow(page.getByRole('button', { name: /បាយបិណ្ឌ/ }).first());
  });
  await tryStep('pagoda basket', async () => {
    await clickAndShow(page.getByRole('button', { name: /រៀបចំទៅវត្ត/ }).first(), 1400);
  });
  await scrollPage(page, { pause: 500 });

  console.log('▶ Journey');
  await go(page, '/journey');
  await scrollPage(page, { maxPx: 2600 });
  await go(page, '/journey/9');
  await scrollPage(page, { maxPx: 2600 });

  console.log('▶ Activities');
  await go(page, '/activities');
  await scrollPage(page, { maxPx: 1800, backToTop: false });
  await tryStep('activity detail', async () => {
    await clickAndShow(page.locator('a[href^="/activities/"]').first(), 1600);
    await scrollPage(page, { maxPx: 1600 });
  });

  console.log('▶ Libation');
  await go(page, '/libation');
  await tryStep('pour water', async () => {
    const pour = page.getByRole('button', { name: /Pour Water/ });
    for (let i = 0; i < 3; i++) await clickAndShow(pour, 900);
  });
  await scrollPage(page, { maxPx: 2200 });

  console.log('▶ Stories');
  await go(page, '/stories');
  await smoothScroll(page, 400);
  await tryStep('read story', async () => {
    await clickAndShow(page.getByRole('button', { name: /អានរឿង|Read Story/ }).first(), 2200);
    await smoothScroll(page, 500);
    await sleep(800);
    await page.keyboard.press('Escape');
    await sleep(800);
  });
  await scrollPage(page, { maxPx: 1800 });

  console.log('▶ Memories');
  await go(page, '/memories');
  await scrollPage(page, { maxPx: 1400 });
  await go(page, '/memories/create');
  await scrollPage(page, { maxPx: 1400 });

  console.log('▶ Family');
  await go(page, '/family');
  await scrollPage(page, { maxPx: 3000 });

  console.log('▶ Pagodas');
  await go(page, '/pagodas');
  await scrollPage(page, { maxPx: 2000 });

  console.log('▶ About');
  await go(page, '/about');
  await scrollPage(page, { maxPx: 2000 });

  console.log('▶ Language switch');
  await go(page, '/', 1500);
  await tryStep('toggle language', async () => {
    const toggle = page.getByRole('button', { name: 'Toggle Language' });
    await toggle.click();
    await sleep(1800);
    await smoothScroll(page, 700);
    await sleep(1800); // B.E. 2570
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'smooth' }));
    await sleep(900);
    await toggle.click();
    await sleep(1800);
  });
}

// ───────────────────────────── Mobile tour ──────────────────────────────
async function mobileTour(page) {
  console.log('▶ Mobile home');
  await go(page, '/', 2200);
  await scrollPage(page, { maxPx: 3500, chunk: 500 });

  await tryStep('mobile drawer', async () => {
    await page.getByRole('button', { name: 'Open navigation menu drawer' }).click();
    await sleep(2200);
    await page.getByRole('button', { name: 'Close menu' }).click();
    await sleep(900);
  });

  console.log('▶ Mobile journey / family / libation');
  await go(page, '/journey/9');
  await scrollPage(page, { maxPx: 2000, chunk: 500 });
  await go(page, '/family');
  await scrollPage(page, { maxPx: 2500, chunk: 500 });
  await go(page, '/libation');
  await tryStep('mobile pour', async () => {
    await clickAndShow(page.getByRole('button', { name: /Pour Water/ }), 1200);
  });
  await go(page, '/', 1800);
}

// ───────────────────────────── Runner ───────────────────────────────────
async function record(browser, name, contextOptions, tour) {
  rmSync(RAW_DIR, { recursive: true, force: true });
  mkdirSync(RAW_DIR, { recursive: true });

  const context = await browser.newContext({
    ...contextOptions,
    recordVideo: { dir: RAW_DIR, size: contextOptions.viewport },
  });
  const page = await context.newPage();
  page.on('pageerror', (e) => console.warn(`  ✖ page error: ${e.message}`));

  await tour(page);

  const video = page.video();
  await context.close(); // flushes the video file
  const webm = path.join(OUT_DIR, `${name}.webm`);
  renameSync(await video.path(), webm);

  const mp4 = path.join(OUT_DIR, `${name}.mp4`);
  execFileSync(
    ffmpegPath,
    ['-y', '-loglevel', 'error', '-i', webm, '-c:v', 'libx264', '-pix_fmt', 'yuv420p',
      '-preset', 'slow', '-crf', '20', '-movflags', '+faststart', mp4],
    { stdio: 'inherit' },
  );
  rmSync(webm);
  console.log(`✔ saved ${path.relative(process.cwd(), mp4)}`);
}

async function main() {
  mkdirSync(OUT_DIR, { recursive: true });
  try {
    const res = await fetch(BASE_URL);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
  } catch (e) {
    console.error(`Cannot reach ${BASE_URL} (${e.message}). Start the app with "npm run dev" first.`);
    process.exit(1);
  }

  const browser = await chromium.launch();
  const only = process.argv[2]; // optional: "desktop" | "mobile"
  try {
    if (!only || only === 'desktop') {
      await record(browser, 'pchum-ben-tour-desktop',
        { viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1, locale: 'km-KH' },
        desktopTour);
    }
    if (!only || only === 'mobile') {
      await record(browser, 'pchum-ben-tour-mobile',
        { viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true, locale: 'km-KH' },
        mobileTour);
    }
  } finally {
    await browser.close();
    if (existsSync(RAW_DIR)) rmSync(RAW_DIR, { recursive: true, force: true });
  }
}

main();
