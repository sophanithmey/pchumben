export interface WaterQualityItem {
  id: string;
  numberKh: string;
  numberEn: string;
  iconName:'Sparkles' |'Droplet' |'Heart' |'Sprout';
  paliName: string;
  transliteration: string;
  khmerMeaning: string;
  englishMeaning: string;
  badgeKh: string;
  badgeEn: string;
  bgGrad: string;
  borderColor: string;
  iconBg: string;
  badgeStyle: string;
}

export const WATER_QUALITIES_DATA: WaterQualityItem[] = [
  {
    id:'dakkhinodaka',
    numberKh:'០១',
    numberEn:'01',
    iconName:'Sparkles',
    paliName:'ទក្ខិណោទក',
    transliteration:'Dakkhinodaka',
    khmerMeaning:
'ទឹកសម្រាប់លាងដៃ ឬទឹកអម្រឹតព្រះនិព្វាន ឧទ្ទិសជូនអ្នកទទួលទក្ខិណាទាន (ព្រះសង្ឃជាស្រែបុណ្យ)',
    englishMeaning:
'Purification water or celestial nectar of Nirvana, dedicated to holy monastic recipients of alms.',
    badgeKh:'ទឹកអម្រឹតព្រះនិព្វាន',
    badgeEn:'Celestial Nectar',
    bgGrad:'bg-gradient-to-br from-amber-500/8 via-amber-100/20 to-white',
    borderColor:'border-amber-200/90 hover:border-amber-400',
    iconBg:'bg-amber-100 text-amber-800 border-amber-300/80',
    badgeStyle:'bg-amber-100/90 text-amber-900 border-amber-300/80',
  },
  {
    id:'uddisodaka',
    numberKh:'០២',
    numberEn:'02',
    iconName:'Droplet',
    paliName:'ឧទ្ទិសោទក',
    transliteration:'Uddisodaka',
    khmerMeaning:
'ទឹកសម្រាប់ឧទ្ទិសភាគផលបុណ្យឆ្ពោះទៅកាន់ខាន់សីមា ឬបេតបុគ្គល (ញាតិដែលបានស្លាប់)',
    englishMeaning:
'Merit dedication water transmitting spiritual shares directly to departed ancestral spirits.',
    badgeKh:'ឧទ្ទិសដល់ប្រេតញាតិ',
    badgeEn:'Merit for Spirits',
    bgGrad:'bg-gradient-to-br from-sky-500/8 via-sky-100/20 to-white',
    borderColor:'border-sky-200/90 hover:border-sky-400',
    iconBg:'bg-sky-100 text-sky-800 border-sky-300/80',
    badgeStyle:'bg-sky-100/90 text-sky-900 border-sky-300/80',
  },
  {
    id:'patthanodaka',
    numberKh:'០៣',
    numberEn:'03',
    iconName:'Heart',
    paliName:'បត្ថនោទក',
    transliteration:'Patthanodaka',
    khmerMeaning:
'ទឹកសម្រាប់តាំងសេចក្តីប្រាថ្នា ឬសេចក្តីល្អ និងបួងសួងសេចក្តីសុខចម្រើន',
    englishMeaning:
'Aspiration water for establishing wholesome vows, spiritual virtues, and prayers for peace.',
    badgeKh:'តាំងសេចក្តីប្រាថ្នា',
    badgeEn:'Noble Aspirations',
    bgGrad:'bg-gradient-to-br from-rose-500/8 via-rose-100/20 to-white',
    borderColor:'border-rose-200/90 hover:border-rose-400',
    iconBg:'bg-rose-100 text-rose-800 border-rose-300/80',
    badgeStyle:'bg-rose-100/90 text-rose-900 border-rose-300/80',
  },
  {
    id:'sakkheyodaka',
    numberKh:'០៤',
    numberEn:'04',
    iconName:'Sprout',
    paliName:'សក្ខេយោទក',
    transliteration:'Sakkheyodaka',
    khmerMeaning:
'ទឹកតំណាងឱ្យការយកផែនដីជាសាក្សី ដូចរឿងនាងគង្ហីងព្រះធរណី ច្របាច់សក់បង្អោនទឹកទានកម្ចាត់មារ',
    englishMeaning:
'Witnessing water invoking Mother Earth (Neang Konghing) as eternal witness to virtuous generosity.',
    badgeKh:'ផែនដីជាសាក្សី',
    badgeEn:'Earth as Witness',
    bgGrad:'bg-gradient-to-br from-emerald-500/8 via-emerald-100/20 to-white',
    borderColor:'border-emerald-200/90 hover:border-emerald-400',
    iconBg:'bg-emerald-100 text-emerald-800 border-emerald-300/80',
    badgeStyle:'bg-emerald-100/90 text-emerald-900 border-emerald-300/80',
  },
];
