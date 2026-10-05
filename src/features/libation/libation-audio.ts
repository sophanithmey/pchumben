/**
 * Generates peaceful meditative chimes, singing bowl tones, and soft water droplet sounds
 * using native Web Audio API oscillators without external audio assets.
 */
class LibationAudioService {
  private ctx: AudioContext | null = null;

  private getContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  playWaterDrop() {
    try {
      const ctx = this.getContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(650, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.12);

      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.18);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.2);
    } catch {
      // Audio not permitted or supported
    }
  }

  playTempleChime() {
    try {
      const ctx = this.getContext();
      if (!ctx) return;
      [523.25, 659.25, 783.99].forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.1);

        gain.gain.setValueAtTime(0.15, ctx.currentTime + idx * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.8 + idx * 0.1);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime + idx * 0.1);
        osc.stop(ctx.currentTime + 2.0);
      });
    } catch {
      // Audio not permitted or supported
    }
  }

  playPaliChant(onStep?: (step: number) => void, onEnd?: () => void): () => void {
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    try {
      const ctx = this.getContext();
      if (!ctx) return () => {};
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const start = ctx.currentTime;

      // Resonant Singing Bowl harmonics (216Hz, 432Hz, 648Hz)
      [216, 432, 648].forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        // Shimmer LFO
        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();
        lfo.frequency.setValueAtTime(3.5, start);
        lfoGain.gain.setValueAtTime(1.5, start);
        lfo.connect(osc.frequency);
        lfo.start(start);
        lfo.stop(start + 5.0);

        osc.type = idx === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, start);

        gain.gain.setValueAtTime(0, start);
        gain.gain.linearRampToValueAtTime(0.18 / (idx + 1), start + 0.08);
        gain.gain.exponentialRampToValueAtTime(0.0001, start + 4.5);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(start);
        osc.stop(start + 5.0);
      });

      // 3 melodic prayer bells for the 3 verses
      const strikes = [
        { time: 0.1, freq: 523.25 }, // C5
        { time: 1.5, freq: 659.25 }, // E5
        { time: 3.0, freq: 783.99 }, // G5
      ];

      strikes.forEach(({ time, freq }) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const t = start + time;

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, t);

        gain.gain.setValueAtTime(0.16, t);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + 1.5);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(t);
        osc.stop(t + 1.6);
      });

      if (onStep) {
        onStep(1);
        timeouts.push(setTimeout(() => onStep(2), 1500));
        timeouts.push(setTimeout(() => onStep(3), 3000));
      }

      timeouts.push(
        setTimeout(() => {
          if (onStep) onStep(0);
          if (onEnd) onEnd();
        }, 4800),
      );
    } catch {
      // Audio not permitted
    }

    return () => {
      timeouts.forEach((id) => clearTimeout(id));
    };
  }
}

export const libationAudio = new LibationAudioService();
