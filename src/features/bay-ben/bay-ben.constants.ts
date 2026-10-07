export type BayBenPhase = 'shaping' | 'procession' | 'tossing';

export interface PhaseInfo {
  id: BayBenPhase;
  stepNumber: number;
  timeKh: string;
  timeEn: string;
  titleKh: string;
  titleEn: string;
  subtitleKh: string;
  subtitleEn: string;
  actionKh: string;
  actionEn: string;
  goalKh: string;
  goalEn: string;
  hintKh: string;
  hintEn: string;
}

export const BAY_BEN_PHASES: Record<BayBenPhase, PhaseInfo> = {
  shaping: {
    id: 'shaping',
    stepNumber: 1,
    timeKh: 'ម៉ោង ៤:០០ ទៀបភ្លឺ',
    timeEn: '4:00 AM Dawn',
    titleKh: 'ពួតបាយបិណ្ឌលើស្លឹកចេក',
    titleEn: 'Shaping Sacred Rice Balls',
    subtitleKh: 'ច្របល់អង្ករដំណើបជាមួយល្ងខ្មៅ និងដូងកោស រួចពួតជាដុំតូចៗដាក់លើជើងពាន',
    subtitleEn: 'Knead sticky rice with toasted black sesame and coconut, rolling palm-sized offerings on banana leaf trays',
    actionKh: 'ពួតដុំបាយបិណ្ឌ',
    actionEn: 'Roll Rice Ball',
    goalKh: 'ពួតឲ្យបាន ៧ ដុំពេញជើងពាន',
    goalEn: 'Shape 7 sacred rice balls onto the platter',
    hintKh: 'ចុចលើជើងពាន ឬចុចប៊ូតុងខាងក្រោម ដើម្បីពួតដុំបាយបិណ្ឌ',
    hintEn: 'Tap the tray or click the button below to shape a rice ball',
  },
  procession: {
    id: 'procession',
    stepNumber: 2,
    timeKh: 'ម៉ោង ៤:៣០ ទៀបភ្លឺ',
    timeEn: '4:30 AM Pre-Dawn',
    titleKh: 'ដើរប្រទក្សិណ ៣ ជុំជុំវិញព្រះវិហារ',
    titleEn: 'Circumambulating the Sacred Vihara',
    subtitleKh: 'កាន់ជើងពានបាយបិណ្ឌ ទៀន និងធូប ដើរតាមទិសទ្រនិចនាឡិកាដោយសមាធិ និងសេចក្តីជ្រះថ្លា',
    subtitleEn: 'Carry rice trays, candles, and incense clockwise three times around the vihara in mindful reverence',
    actionKh: 'បន្តដំណើរប្រទក្សិណ',
    actionEn: 'Step Forward',
    goalKh: 'ដើរប្រទក្សិណ ៣ ជុំតាមទិសទ្រនិចនាឡិកា',
    goalEn: 'Complete 3 clockwise circumambulations',
    hintKh: 'ចុចប៊ូតុងបន្តដំណើរដើម្បីដើរតាមគន្លងជុំវិញព្រះវិហារ',
    hintEn: 'Click Step Forward to advance along the sacred path around the temple',
  },
  tossing: {
    id: 'tossing',
    stepNumber: 3,
    timeKh: 'ម៉ោង ៥:០០ ទៀបភ្លឺ',
    timeEn: '5:00 AM First Light',
    titleKh: 'បោះបាយបិណ្ឌឧទ្ទិសកុសល',
    titleEn: 'Tossing Sacred Rice to Spirits',
    subtitleKh: 'បោះដុំបាយបិណ្ឌតាមសន្លឹកសីមា និងជុំវិញខឿនវិហារ ឧទ្ទិសដល់ប្រេត និងដូនតា ៧ សន្តាន',
    subtitleEn: 'Toss rice balls around boundary stones and pagoda grounds before sunlight, nourishing ancestral spirits',
    actionKh: 'បោះបាយឧទ្ទិសកុសល',
    actionEn: 'Toss Rice Ball',
    goalKh: 'បោះបាយទៅកាន់សន្លឹកសីមា និងទីធ្លាព្រះវិហារ',
    goalEn: 'Toss rice balls toward the sacred boundary stones',
    hintKh: 'ចុចលើទីធ្លាវត្ត ឬចុចប៊ូតុងខាងក្រោម ដើម្បីបោះបាយឧទ្ទិសដល់ពពួកប្រេត',
    hintEn: 'Tap anywhere in the courtyard or click below to toss rice to waiting spirits',
  },
};

export const CULTURAL_NARRATIVE = {
  tagKh: 'ទំនៀមទម្លាប់ខ្មែរបុរាណ',
  tagEn: 'Ancient Khmer Tradition',
  titleKh: 'អត្ថន័យនៃពិធីបោះបាយបិណ្ឌ',
  titleEn: 'The Sacred Meaning of Bos Bay Ben',
  paliVerse: 'ឥទំ មេ ញាតីនំ ហោតុ សុខិតា ហោន្តុ ញាតយោ',
  paliTranslationKh: 'សូមបុណ្យកុសលនេះបានសម្រេចដល់ញាតិទាំងឡាយរបស់ខ្ញុំ សូមញាតិទាំងឡាយបានសេចក្តីសុខ',
  paliTranslationEn: 'May this merit reach our departed kin, may all our ancestors be at peace and free from suffering',
  facts: [
    {
      labelKh: 'ពេលវេលាទៀបភ្លឺ',
      labelEn: 'Pre-Dawn Timing',
      descKh: 'ប្រារព្ធឡើងនៅចន្លោះម៉ោង ៤:០០ ដល់ ៥:០០ ទៀបភ្លឺ ព្រោះពពួកប្រេតខ្លាចពន្លឺព្រះអាទិត្យ',
      descEn: 'Performed between 4:00 AM and 5:00 AM because hungry spirits cannot endure sunlight',
    },
    {
      labelKh: 'ដុំបាយដំណើបលាយល្ង',
      labelEn: 'Sesame Sticky Rice',
      descKh: 'អង្ករដំណើបស្អិតលាយល្ងខ្មៅ និងដូងកោស តំណាងឲ្យសេចក្តីសាមគ្គី និងទឹកចិត្តចែករំលែក',
      descEn: 'Glutinous rice with toasted sesame seeds symbolizes unity, nourishment, and selfless compassion',
    },
    {
      labelKh: 'ប្រទក្សិណ ៣ ជុំ',
      labelEn: '3 Circumambulations',
      descKh: 'ដើរតាមទិសស្តាំគោរពព្រះរតនត្រ័យទាំង ៣ គឺ ព្រះពុទ្ធ ព្រះធម៌ និងព្រះសង្ឃ',
      descEn: 'Clockwise movement around the temple venerates the Triple Gem: the Buddha, the Dharma, and the Sangha',
    },
  ],
};
