/**
 * Web Audio API synthesizer for the Bos Bay Ben ritual experience.
 * Generates resonant pagoda bell gongs, sacred chimes, and rice offering tones
 * without external audio assets.
 */
class BayBenAudioService {
  private ctx: AudioContext | null = null;
  private isMuted = false;

  private getContext(): AudioContext | null {
    if (typeof window === 'undefined' || this.isMuted) return null;
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

  setMuted(muted: boolean) {
    this.isMuted = muted;
  }

  getMuted(): boolean {
    return this.isMuted;
  }

  playTempleGong() {
    try {
      const ctx = this.getContext();
      if (!ctx) return;
      const fundamental = 146.83; // D3 resonant temple bell
      [fundamental, fundamental * 1.5, fundamental * 2.76, fundamental * 3.9].forEach(
        (freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = idx === 0 ? 'sine' : 'triangle';
          osc.frequency.setValueAtTime(freq, ctx.currentTime);
          const initialVolume = 0.22 / (idx + 1);
          gain.gain.setValueAtTime(initialVolume, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 3.2);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start();
          osc.stop(ctx.currentTime + 3.3);
        },
      );
    } catch {
      // Audio not permitted
    }
  }

  playRiceShaping() {
    try {
      const ctx = this.getContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(783.99, ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.26);
    } catch {
      // Audio not permitted
    }
  }

  playProcessionChime() {
    try {
      const ctx = this.getContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(659.25, ctx.currentTime);
      gain.gain.setValueAtTime(0.09, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 1.3);
    } catch {
      // Audio not permitted
    }
  }

  playMeritToss() {
    try {
      const ctx = this.getContext();
      if (!ctx) return;
      [440, 554.37, 659.25, 880].forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.08);
        gain.gain.setValueAtTime(0.1, ctx.currentTime + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.5 + idx * 0.08);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + idx * 0.08);
        osc.stop(ctx.currentTime + 1.6 + idx * 0.08);
      });
    } catch {
      // Audio not permitted
    }
  }
}

export const bayBenAudio = new BayBenAudioService();
