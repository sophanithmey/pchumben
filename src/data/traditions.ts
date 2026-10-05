export interface TraditionFaqItem {
  id: string;
  questionKey: string;
  answerKey: string;
  defaultQuestionKhmer: string;
  defaultAnswerKhmer: string;
  defaultQuestionEnglish: string;
  defaultAnswerEnglish: string;
  category:'core' |'rituals' |'etiquette';
}

export const TRADITIONS_FAQ: TraditionFaqItem[] = [
  {
    id:'faq-what-is-pchum-ben',
    questionKey:'faq.whatIs.q',
    answerKey:'faq.whatIs.a',
    defaultQuestionKhmer:'តើបុណ្យភ្ជុំបិណ្ឌជាអ្វី?',
    defaultAnswerKhmer:
'យោងតាមទំនៀមទម្លាប់ព្រះពុទ្ធសាសនាខ្មែរ បុណ្យភ្ជុំបិណ្ឌ គឺជាពិធីបុណ្យប្រពៃណីជាតិដ៏ធំបំផុតមួយ ដែលប្រារព្ធឡើងដើម្បីរំឭកគុណ និងឧទ្ទិសកុសលជូនដល់បុព្វការីជន សាច់ញាតិទាំង ៧ សន្តាន ដែលបានចែកឋានទៅ',
    defaultQuestionEnglish:'What is Pchum Ben?',
    defaultAnswerEnglish:
'According to Cambodian Buddhist tradition, Pchum Ben (Ancestors’ Day) is one of the most significant national and spiritual observances, dedicated to honoring, remembering, and offering merits to departed relatives and ancestors across seven generations.',
    category:'core',
  },
  {
    id:'faq-why-celebrate',
    questionKey:'faq.whyCelebrate.q',
    answerKey:'faq.whyCelebrate.a',
    defaultQuestionKhmer:'ហេតុអ្វីបានជាជនជាតិខ្មែរប្រារព្ធពិធីបុណ្យនេះ?',
    defaultAnswerKhmer:
'ការប្រារព្ធពិធីនេះ បង្ហាញពីកតញ្ញូតាធម៌ (ការដឹងគុណ) ការជួបជុំគ្រួសារ ការពង្រឹងសាមគ្គីភាពក្នុងសហគមន៍ និងការបណ្តុះចិត្តមេត្តាធម៌ចែករំលែកទានដល់ជនងាយរងគ្រោះ',
    defaultQuestionEnglish:'Why do Cambodians celebrate it?',
    defaultAnswerEnglish:
'The festival embodies katannuta (filial gratitude), reinforces multi-generational family bonds, and cultivates generosity (dana) and compassion for all living beings and ancestors.',
    category:'core',
  },
  {
    id:'faq-what-is-kan-ben',
    questionKey:'faq.whatIsKanBen.q',
    answerKey:'faq.whatIsKanBen.a',
    defaultQuestionKhmer:'តើកាន់បិណ្ឌជាអ្វី?',
    defaultAnswerKhmer:
'កាន់បិណ្ឌ សំដៅលើរយៈពេល ១៤ ថ្ងៃដំបូង (ចាប់ពីថ្ងៃ ១ រោច ដល់ ១៤ រោច ខែភទ្របទ) ដែលពុទ្ធបរិស័ទឆ្លាស់គ្នាយកចង្ហាន់ និងទេយ្យវត្ថុទៅប្រគេនព្រះសង្ឃដែលកំពុងគង់ចាំវស្សានៅតាមវត្ត',
    defaultQuestionEnglish:'What is Kan Ben?',
    defaultAnswerEnglish:
'Kan Ben refers to the first 14 days of observance, where community members take turns hosting daily merit-making and offering food to monks observing the three-month rainy season retreat (Vassa).',
    category:'rituals',
  },
  {
    id:'faq-what-is-bay-ben',
    questionKey:'faq.whatIsBayBen.q',
    answerKey:'faq.whatIsBayBen.a',
    defaultQuestionKhmer:'តើបាយបិណ្ឌជាអ្វី?',
    defaultAnswerKhmer:
'យោងតាមជំនឿប្រពៃណី បាយបិណ្ឌជាដុំបាយដំណើបលាយល្ងខ្មៅ និងដូង ដែលពុទ្ធបរិស័ទនាំយកទៅបោះនៅជុំវិញព្រះវិហារនៅពេលព្រលឹមស្រាងៗ សម្រាប់ឧទ្ទិសដល់ប្រេតដែលមិនអាចទទួលទានអាហារធម្មតាបាន',
    defaultQuestionEnglish:'What is Bay Ben?',
    defaultAnswerEnglish:
'According to traditional beliefs, Bay Ben are small offerings of sticky rice with sesame seeds cast around the temple sanctuary before dawn, symbolizing boundless compassion for suffering beings who cannot receive ordinary meals.',
    category:'rituals',
  },
  {
    id:'faq-what-to-bring',
    questionKey:'faq.whatToBring.q',
    answerKey:'faq.whatToBring.a',
    defaultQuestionKhmer:'តើគួររៀបចំអ្វីខ្លះពេលទៅវត្ត?',
    defaultAnswerKhmer:
'គួររៀបចំចានស្រាក់ដាក់ម្ហូបស្អាតបាត ផ្កាឈូកស្រស់ ធូប ទៀន បច្ច័យតាមសទ្ធា និងទឹកបរិសុទ្ធ សំខាន់បំផុតគឺទឹកចិត្តជ្រះថ្លា និងការគោរព',
    defaultQuestionEnglish:'What should I bring to the pagoda?',
    defaultAnswerEnglish:
'Bring a traditional tiered lunch box (Chan Srak) with clean food, fresh lotus blossoms, incense, candles, modest donations, and drinking water. Most importantly, bring a respectful and sincere mindset.',
    category:'etiquette',
  },
  {
    id:'faq-etiquette',
    questionKey:'faq.etiquette.q',
    answerKey:'faq.etiquette.a',
    defaultQuestionKhmer:'តើគួរស្លៀកពាក់ និងប្រតិបត្តិយ៉ាងណា?',
    defaultAnswerKhmer:
'គួរស្លៀកពាក់អាវស ឬសម្លៀកបំពាក់ប្រពៃណីគួរសម ដោះស្បែកជើង និងមួកមុនពេលចូលព្រះវិហារ ព្រមទាំងរក្សាភាពស្ងប់ស្ងាត់ដើម្បីជាការគោរព',
    defaultQuestionEnglish:'What etiquette should I follow at the pagoda?',
    defaultAnswerEnglish:
'Wear white tops or respectful modest attire covering shoulders and knees. Remove footwear and hats before entering sanctuaries, speak in hushed tones, and bow respectfully (Sampeah) to the Sangha.',
    category:'etiquette',
  },
];
