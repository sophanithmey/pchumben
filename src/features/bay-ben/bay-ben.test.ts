import { describe, it, expect } from 'vitest';
import { BAY_BEN_PHASES, CULTURAL_NARRATIVE } from './bay-ben.constants';

describe('Bos Bay Ben Cultural Constants & Rules Validation', () => {
  it('defines all 3 authentic ritual phases', () => {
    const phases = Object.keys(BAY_BEN_PHASES);
    expect(phases).toEqual(['shaping', 'procession', 'tossing']);
    expect(BAY_BEN_PHASES.shaping.stepNumber).toBe(1);
    expect(BAY_BEN_PHASES.procession.stepNumber).toBe(2);
    expect(BAY_BEN_PHASES.tossing.stepNumber).toBe(3);
  });

  it('contains the sacred Pali merit dedication verse', () => {
    expect(CULTURAL_NARRATIVE.paliVerse).toContain('ឥទំ មេ ញាតីនំ ហោតុ');
    expect(CULTURAL_NARRATIVE.facts.length).toBeGreaterThanOrEqual(3);
  });

  it('strictly adheres to rule: No Khmer Khan punctuation mark (។)', () => {
    // Check all phase strings
    Object.values(BAY_BEN_PHASES).forEach((phase) => {
      expect(phase.titleKh).not.toContain('។');
      expect(phase.subtitleKh).not.toContain('។');
      expect(phase.timeKh).not.toContain('។');
      expect(phase.actionKh).not.toContain('។');
      expect(phase.goalKh).not.toContain('។');
      expect(phase.hintKh).not.toContain('។');
    });

    // Check narrative
    expect(CULTURAL_NARRATIVE.tagKh).not.toContain('។');
    expect(CULTURAL_NARRATIVE.titleKh).not.toContain('។');
    expect(CULTURAL_NARRATIVE.paliTranslationKh).not.toContain('។');

    CULTURAL_NARRATIVE.facts.forEach((fact) => {
      expect(fact.labelKh).not.toContain('។');
      expect(fact.descKh).not.toContain('។');
    });
  });
});
