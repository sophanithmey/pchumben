import { ActivityKey } from'./hero-pagoda-illustration';

export interface ActivityCustom {
  kh: string;
  en: string;
}

export interface ActivityAction {
  kh: string;
  en: string;
  link: string;
}

export interface ActivityData {
  key: ActivityKey;
  tabLabelKh: string;
  tabLabelEn: string;
  badgeKh: string;
  badgeEn: string;
  timeKh: string;
  timeEn: string;
  titleKh: string;
  titleEn: string;
  summaryKh: string;
  summaryEn: string;
  descriptionKh: string;
  descriptionEn: string;
  customs: ActivityCustom[];
  primaryAction: ActivityAction;
  secondaryAction: ActivityAction;
}

export const ACTIVITIES: ActivityData[] = [
  {
    key:'procession',
    tabLabelKh:'ដំណើរទៅវត្ត',
    tabLabelEn:'Pagoda Pilgrimage',
    badgeKh:'កាន់បិណ្ឌ ១ - ១៥ • ពេលព្រឹក',
    badgeEn:'Kan Ben 1-15 • Morning',
    timeKh:'វេលាម៉ោង ៧:០០ ព្រឹក',
    timeEn:'7:00 AM Morning',
    titleKh:'ដំណើរទៅកាន់វត្តអារាម',
    titleEn:'Morning Pilgrimage to the Pagoda',
    summaryKh:'គ្រួសារខ្មែរស្លៀកសពាក់ស យួរចានស្រាក់ និងកាន់ផ្កាឈូកឆ្ពោះទៅវត្តអារាម',
    summaryEn:
'Cambodian families dress in pure white, carrying tiffin food carriers and lotus blossoms',
    descriptionKh:
'ជារៀងរាល់ព្រឹកនៃរដូវកាន់បិណ្ឌ ១៥ ថ្ងៃ ពុទ្ធបរិស័ទគ្រប់ជំនាន់ជួបជុំគ្នានៅវត្តអារាម ចាស់ទុំ និងកូនចៅស្លៀកសពាក់សយ៉ាងសមសួន នាំយកចង្ហាន់ដែលចម្អិនដោយផ្ទាល់ដៃ និងផ្កាឈូកស្រស់ ដើម្បីប្រគេនព្រះសង្ឃ និងឧទ្ទិសកុសលជូនដូនតា',
    descriptionEn:
'Every morning during the 15-day Kan Ben observance, Cambodian families gather at their ancestral pagodas. Dressed in respectful white garments, they bring freshly prepared meals in tiffin carriers and fresh lotus blossoms to support the monastic community and honor their forebears.',
    customs: [
      {
        kh:'ស្លៀកពាក់អាវពណ៌ស និងសំពត់ប្រពៃណី',
        en:'Wear clean white shirts and traditional sampot',
      },
      {
        kh:'រៀបចំចានស្រាក់ម្ហូបបាយសម្ល និងនំចំណី',
        en:'Prepare home-cooked meals in 3-tier tiffin carriers',
      },
      {
        kh:'ផ្កាឈូកស្រស់ ធូប ទៀន សម្រាប់បូជា',
        en:'Offer fresh lotus flowers, incense, and candles',
      },
    ],
    primaryAction: {
      kh:'តាមដានដំណើរបុណ្យ ១៥ ថ្ងៃ',
      en:'Explore 15-Day Journey',
      link:'/journey',
    },
    secondaryAction: {
      kh:'ស្វែងយល់ប្រវត្តិវត្តអារាម',
      en:'Discover Pagodas',
      link:'/pagodas',
    },
  },
  {
    key:'bosBayBen',
    tabLabelKh:'ពិធីបោះបាយបិណ្ឌ',
    tabLabelEn:'Dawn Bos Bay Ben',
    badgeKh:'ពិធីទៀបភ្លឺ • ម៉ោង ៤ ព្រឹក',
    badgeEn:'Sacred Pre-Dawn • 4:00 AM',
    timeKh:'វេលាម៉ោង ៤:០០ ទៀបភ្លឺ',
    timeEn:'4:00 AM Pre-Dawn',
    titleKh:'ពិធីបោះបាយបិណ្ឌទៀបភ្លឺ',
    titleEn:'Pre-Dawn Bos Bay Ben Ritual',
    summaryKh:'ដើរប្រទក្សិណ ៣ ជុំព្រះវិហារ បោះដុំបាយបិណ្ឌដើម្បីរំដោះទុក្ខដល់ពពួកប្រេត',
    summaryEn:
'Circumambulating the temple vihara by candlelight, scattering rice balls for hungry souls',
    descriptionKh:
'នៅវេលាស្ងាត់ជ្រងំម៉ោង ៤ ទៀបភ្លឺ ពុទ្ធបរិស័ទកាន់ចានបាយបិណ្ឌដើរព័ទ្ធជុំវិញព្រះវិហារ ៣ ជុំ ក្រោមពន្លឺព្រះចន្ទ និងទៀនបំភ្លឺផ្លូវ ការបោះបាយបិណ្ឌជាកាយវិការនៃមេត្តាធម៌ដ៏ជ្រាលជ្រៅ ដើម្បីចែករំលែកអាហារដល់ពពួកប្រេត និងវិញ្ញាណក្ខន្ធដែលកំពុងរងទុក្ខវេទនា',
    descriptionEn:
'In the quiet chill before dawn at 4:00 AM, devotees walk clockwise three times around the pagoda vihara by the glow of candles and the moon. Scattering small rice balls onto the temple grounds is a profound act of compassion, providing spiritual nourishment to suffering, hungry spirits (Preta).',
    customs: [
      { kh:'ភ្ញាក់ពីព្រលឹមមុនថ្ងៃរះ (ម៉ោង ៣:៣០)', en:'Awake before sunrise at 3:30 AM' },
      {
        kh:'ដើរប្រទក្សិណ ៣ ជុំជុំវិញព្រះវិហារ',
        en:'Circumambulate 3 times clockwise around the vihara',
      },
      {
        kh:'តាំងចិត្តមេត្តា ផ្សាយកុសលដល់ប្រេត',
        en:'Maintain a compassionate heart for all suffering beings',
      },
    ],
    primaryAction: {
      kh:'ស្ដាប់រឿងនិទានប្រេត',
      en:'Listen to Ghost Legends',
      link:'/stories',
    },
    secondaryAction: {
      kh:'ការត្រៀមបាយបិណ្ឌ',
      en:'Preparation Guide',
      link:'/journey/1',
    },
  },
  {
    key:'libation',
    tabLabelKh:'ពិធីច្រូចទឹកឧទ្ទិសកុសល',
    tabLabelEn:'Water Libation (Chroch Teuk)',
    badgeKh:'សាលាឆាន់ • ឧទ្ទិសកុសល ៧ សន្តាន',
    badgeEn:'Temple Hall • Dedicating Merits',
    timeKh:'វេលាថ្ងៃត្រង់ • ១១:០០ ថ្ងៃត្រង់',
    timeEn:'11:00 AM Midday',
    titleKh:'ការប្រគេនចង្ហាន់ និងពិធីច្រូចទឹក',
    titleEn:'Offering Alms & Sacred Water Libation',
    summaryKh:'ជួបជុំក្នុងសាលាឆាន់ ប្រគេនចង្ហាន់ ស្ដាប់ព្រះធម៌ និងច្រូចទឹកបញ្ជូនកុសល',
    summaryEn:
'Gathering in the temple hall to offer nourishing food and pour water to transfer merit',
    descriptionKh:
'បន្ទាប់ពីព្រះសង្ឃឆាន់ចង្ហាន់រួច ពុទ្ធបរិស័ទទទួលពរជ័យ និងចាប់ផ្តើមពិធីច្រូចទឹក ទឹកថ្លាបរិសុទ្ធដែលស្រក់ចុះមួយតំណក់ម្តងៗជានិមិត្តរូបនៃការហូរនៃបុណ្យកុសល ទៅកាន់វិញ្ញាណក្ខន្ធបុព្វការីជនទាំង ៧ សន្តាន ឱ្យបានស្ងប់ចិត្ត និងទៅកាន់ទីបរមសុខ',
    descriptionEn:
'After the monastic community finishes the midday meal, devotees gather for chanting and perform the sacred Water Libation (ច្រូចទឹក / Chroch Teuk). The continuous stream of crystal-clear water symbolizes the unbroken transfer of accumulated merit to seven generations of departed loved ones.',
    customs: [
      { kh:'ប្រគេនចង្ហាន់បាយសម្លដល់ព្រះសង្ឃ', en:'Offer wholesome food and drink to the Sangha' },
      {
        kh:'លើកដៃប្រណម្យស្ដាប់ព្រះសង្ឃសូត្រធម៌',
        en:'Sit respectfully with palms pressed in Sampeah',
      },
      {
        kh:'ច្រូចទឹកមួយតំណក់ៗរហូតដល់ចប់ធម៌',
        en:'Pour libation water steadily during the blessings',
      },
    ],
    primaryAction: {
      kh:'ចូលរួមពិធីច្រូចទឹក',
      en:'Virtual Water Libation',
      link:'/libation',
    },
    secondaryAction: {
      kh:'ដាំផ្កាឈូកអនុស្សាវរីយ៍',
      en:'Memorial Garden',
      link:'/memories',
    },
  },
];

export const HERO_ACTIVITIES = ACTIVITIES;
