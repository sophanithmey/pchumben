import React from'react';
import {
  Shirt,
  Utensils,
  Sparkles,
  Droplet,
  Heart,
  Landmark,
} from'lucide-react';

export interface Delicacy {
  id: string;
  nameKh: string;
  nameEn: string;
  shortNameKh: string;
  shortNameEn: string;
  icon: string;
  categoryKh: string;
  categoryEn: string;
  symbolismKh: string;
  symbolismEn: string;
  descriptionKh: string;
  descriptionEn: string;
  ingredientsKh: string[];
  ingredientsEn: string[];
  cookTimeKh: string;
  cookTimeEn: string;
  proTipKh: string;
  proTipEn: string;
}

export const DELICACIES: Delicacy[] = [
  {
    id: 'ansom-chrouk',
    nameKh: 'នំអន្សមជ្រូក (សាច់ជ្រូក ៣ ជាន់)',
    nameEn: 'Num Ansom Chrouk (Savory Pork Sticky Rice)',
    shortNameKh: 'នំអន្សមជ្រូក',
    shortNameEn: 'Ansom Chrouk',
    icon: '🫔',
    categoryKh: 'នំប្រពៃណីបុរាណ',
    categoryEn:'Classical Heritage Cake',
    symbolismKh:'រាងមូលទ្រវែងតំណាងឱ្យ «លិង្គព្រះឥសូរ» ឬគុណបិតា (ថាមពលការពារ និងភាពរឹងមាំ)',
    symbolismEn:'Cylindrical shape symbolizes paternal strength, masculine protection, and Shiva’s energy',
    descriptionKh:
'នំអន្សមជ្រូក ជានំប្រពៃណីខ្មែរដែលមិនអាចខ្វះបានក្នុងពិធីបុណ្យភ្ជុំបិណ្ឌ ធ្វើពីអង្ករដំណើបលាយខ្ទិះដូង សណ្តែកបាយចំហុយ និងសាច់ជ្រូកបីជាន់ប្រឡាក់ម្រេចកំពត និងស្លឹកខ្ទឹម រួចរុំស្លឹកចេកចងបន្ទះឫស្សីយ៉ាងណែន',
    descriptionEn:
'The quintessential Pchum Ben centerpiece. Fragrant sticky rice marinated in coconut milk, seasoned steamed yellow mung beans, and tender pork belly seasoned with crushed Kampot black pepper and shallots, bound tightly in layers of wilted banana leaves.',
    ingredientsKh: ['អង្ករដំណើបថ្មី','សណ្តែកបាយ','សាច់ជ្រូកបីជាន់','ម្រេចកំពតខ្មៅ','ខ្ទិះដូង','ស្លឹកចេកណាំវ៉ា','បន្ទះឫស្សីចង'],
    ingredientsEn: ['Fragrant Sticky Rice','Yellow Mung Beans','Pork Belly','Kampot Black Pepper','Coconut Cream','Banana Leaves','Bamboo Ties'],
    cookTimeKh:'ស្ងោរ ៨-១០ ម៉ោង លើចង្ក្រានអុស',
    cookTimeEn:'Boiled 8-10 hrs over woodfire',
    proTipKh:'ការស្ងោរនំអន្សមឆ្លងរាត្រី គឺជាឱកាសដ៏កក់ក្តៅបំផុតដែលសមាជិកគ្រួសារគ្រប់ជំនាន់អង្គុយជុំវិញភ្នក់ភ្លើងនិយាយរឿងបុរាណ',
    proTipEn:'Tending the overnight woodfire cauldron creates precious multi-generational bonding where grandparents share ancestral tales with children.',
  },
  {
    id: 'ansom-chek',
    nameKh: 'នំអន្សមចេក (ចេកណាំវ៉ាទុំ)',
    nameEn: 'Num Ansom Chek (Sweet Banana Sticky Rice)',
    shortNameKh: 'នំអន្សមចេក',
    shortNameEn: 'Ansom Chek',
    icon: '🍌',
    categoryKh: 'នំដំណើបបួស',
    categoryEn:'Vegetarian Sweet Cake',
    symbolismKh:'តំណាងឱ្យភាពផ្អែមល្ហែមនៃចំណងគ្រួសារ និងជាទេយ្យទានបរិសុទ្ធគ្មានការបៀតបៀនជីវិត',
    symbolismEn:'Symbolizes familial sweetness, agrarian abundance, and harmless vegetarian merit',
    descriptionKh:
'នំអន្សមចេក ប្រើប្រាស់ផ្លែចេកណាំវ៉ាទុំស្រស់ជាស្នូល កណ្តាលអង្ករដំណើបដែលលាយគ្រាប់សណ្តែកខ្មៅ ឬសណ្តែកបាយ និងសាច់ដូងកោស មានរសជាតិផ្អែមស្រទន់បែបធម្មជាតិ និងក្លិនឈ្ងុយនៃស្លឹកចេក',
    descriptionEn:
'Filled with sweet ripe baby bananas nestled in sticky rice infused with coconut shreds and black or mung beans. Naturally sweet, wholesome, and a beloved offering for elderly monks and ancestors.',
    ingredientsKh: ['អង្ករដំណើប','ចេកណាំវ៉ាទុំជោរ','សណ្តែកខ្មៅ ឬសណ្តែកបាយ','សាច់ដូងកោស','ស្ករត្នោតបន្តិច','ស្លឹកចេក'],
    ingredientsEn: ['Sticky Rice','Ripe Baby Bananas','Black or Mung Beans','Fresh Coconut Shreds','Palm Sugar','Banana Leaves'],
    cookTimeKh:'ស្ងោរ ៦-៨ ម៉ោង',
    cookTimeEn:'Boiled 6-8 hrs',
    proTipKh:'ជ្រើសរើសចេកណាំវ៉ាទុំសំបកអុជៗ នោះស្នូលនំនឹងឡើងពណ៌ក្រហមផ្កាឈូកស្រស់ពេលឆ្អិន និងមានរសជាតិផ្អែមក្រអូប',
    proTipEn:'Choose speckled, fully ripe baby bananas; slow boiling turns the fruit into a beautiful rose-pink hue with rich caramel notes.',
  },
  {
    id: 'num-kom',
    nameKh: 'នំគម (ស្នូលដូងស្ករត្នោត)',
    nameEn: 'Num Korm (Pyramidal Coconut Palm Sugar Cake)',
    shortNameKh: 'នំគម',
    shortNameEn: 'Num Korm',
    icon: '🥥',
    categoryKh: 'នំសាជីត្រីកោណ',
    categoryEn:'Pyramidal Steamed Cake',
    symbolismKh:'រាងសាជីតំណាងឱ្យ «យោនីព្រះនាងឧមា» ឬគុណមាតា (ក្តីមេត្តា ភាពផ្អែមល្ហែម និងការចិញ្ចឹមបីបាច់)',
    symbolismEn:'Pyramidal contour represents maternal love, nurturing feminine essence, and gentle tenderness',
    descriptionKh:
'នំគមមានរាងសាជីត្រីកោណ ស្រោបដោយម្សៅដំណើបទន់ល្មើយ ស្នូលខាងក្នុងជាសាច់ដូងកោសឆាជាមួយស្ករត្នោតកំពង់ស្ពឺ និងល្ងសលីង ត្រូវបានចំហុយរហូតដល់សាច់នំឡើងរលោងទន់គួរឱ្យចង់ទទួលទាន',
    descriptionEn:
'Pyramidal pastry wrapped in banana leaf envelopes. The exterior is chewy glutinous rice dough, embracing a decadent filling of freshly grated coconut caramelized with Kampong Speu palm sugar and toasted sesame.',
    ingredientsKh: ['ម្សៅអង្ករដំណើប','ស្ករត្នោតសុទ្ធ','ដូងទុំកោស','ល្ងសលីងឈ្ងុយ','ស្លឹកចេកកាត់រាងត្រីកោណ'],
    ingredientsEn: ['Glutinous Rice Flour','Pure Palm Sugar','Grated Coconut','Toasted Sesame','Banana Leaf Cones'],
    cookTimeKh:'ចំហុយ ៣០-៤០ នាទី',
    cookTimeEn:'Steamed 30-40 mins',
    proTipKh:'លាបប្រេងដូងស្តើងៗលើស្លឹកចេកមុននឹងខ្ចប់ ដើម្បីកុំឱ្យនំស្អិតជាប់ស្លឹក និងកាន់តែឈ្ងុយពេលបកទទួលទាន',
    proTipEn:'Brush a drop of virgin coconut oil onto the banana leaf wrap before folding so the delicate dough slides off cleanly without sticking.',
  },
  {
    id: 'srak-chanhan',
    nameKh: 'ស្រាក់ចង្ហាន់ ៤ ថ្នាក់សម្រាប់ព្រះសង្ឃ',
    nameEn: 'Srak Chanhan (4-Tier Monastic Tiffin Carrier)',
    shortNameKh: 'ស្រាក់ចង្ហាន់',
    shortNameEn: 'Srak Chanhan',
    icon: '🍱',
    categoryKh: 'ចង្ហាន់បិណ្ឌបាតពេលព្រឹក',
    categoryEn:'Morning Alms Tiffin',
    symbolismKh:'ការគោរពបូជាចំពោះព្រះសង្ឃសាវ័ក និងការផ្តល់អាហារូបត្ថម្ភប្រកបដោយអនាម័យនិងសេចក្តីជ្រះថ្លា',
    symbolismEn:'Reverence toward the Sangha through hygienic, wholesome, and joyfully prepared nourishment',
    descriptionKh:
'ស្រាក់ចង្ហាន់បុរាណធ្វើពីស្ពាន់ ឬស្រោបស្រទាប់ពណ៌ ថ្នាក់នីមួយៗត្រូវរៀបចំម្ហូបថ្មីៗក្តៅៗ ៖ ថ្នាក់ក្រោមបង្អស់ដាក់បាយដំណើប ឬបាយផ្កាម្លិះ, ថ្នាក់កណ្តាលដាក់សម្លម្ជូរ និងការីសាច់មាន់ខ្មែរ, ថ្នាក់លើដាក់បង្អែម និងផ្លែឈើស្រស់',
    descriptionEn:
'Traditional multi-tiered enamel or brass food carrier. Packed before dawn with freshly cooked warm dishes: steaming jasmine rice at base, rich coconut curry and traditional sour soup in the middle, topped with sweet fruits and traditional cakes.',
    ingredientsKh: ['បាយផ្កាម្លិះក្តៅៗ','ការីសាច់មាន់ខ្មែរ','សម្លម្ជូរគ្រឿង ឬសម្លកកូរ','ត្រីចៀនជូរអែម','ផ្លែឈើស្រស់ (ក្រូចថ្លុង មៀន)'],
    ingredientsEn: ['Fragrant Jasmine Rice','Khmer Chicken Curry','Traditional Sour Herb Soup','Crispy Fish with Tamarind','Fresh Fruits (Pomelo, Longan)'],
    cookTimeKh:'ចម្អិនស្រស់ៗនៅព្រលឹមស្រាងៗ (៤:៣០ - ៦:០០ ព្រឹក)',
    cookTimeEn:'Cooked fresh before dawn (4:30 - 6:00 AM)',
    proTipKh:'ចង្ហាន់ប្រគេនព្រះសង្ឃត្រូវតែចម្អិនថ្មីៗ មិនត្រូវយកម្ហូបសល់ពីល្ងាចមករៀបចំឡើយ ដើម្បីធានាបុណ្យកុសលបរិសុទ្ធ',
    proTipEn:'Monastic offerings must always be prepared fresh that morning; traditional belief holds that offering freshly prepared meals brings prime merit and purity.',
  },
  {
    id: 'bay-ben',
    nameKh: 'ដុំបាយបិណ្ឌ (សម្រាប់បោះបាយបិណ្ឌ)',
    nameEn: 'Bay Ben Balls (Pre-Dawn Offering Spheres)',
    shortNameKh: 'បាយបិណ្ឌ',
    shortNameEn: 'Bay Ben',
    icon: '🍚',
    categoryKh: 'ពិធីកិច្ចម៉ោង ៤ ព្រឹក',
    categoryEn:'4:00 AM Dawn Ritual',
    symbolismKh:'ការរំដោះការស្រេកឃ្លាននៃពួកប្រេតដែលមានមាត់តូចដូចម្ជុល ឱ្យទទួលបានអាហារទាន់ពេលព្រឹកព្រហាម',
    symbolismEn:'Nourishing hungry ghosts (Petas) with needle-thin mouths who can only receive sustenance in pre-dawn twilight',
    descriptionKh:
'ដុំបាយបិណ្ឌធ្វើពីបាយដំណើបលាយល្ងស ល្ងខ្មៅ ដូងកោស និងអំបិលបន្តិច ពូតជាដុំមូលៗល្មមដៃ រៀបចំដាក់ក្នុងថាសផ្កា ឬចានស្រាក់ ដើម្បីយកទៅដើរព័ទ្ធជុំវិញព្រះវិហារ ៣ ជុំ រួចបោះទៅលើដីជុំវិញព្រះវិហារនៅវេលាម៉ោង ៤ ព្រឹក',
    descriptionEn:
'Sticky rice kneaded with toasted black and white sesame seeds, grated coconut, and a touch of salt. Rolled into small palm-sized spheres to be offered while circumambulating the temple three times in the pre-dawn darkness.',
    ingredientsKh: ['បាយដំណើបឆ្អិនស្អិត','ល្ងស និងល្ងខ្មៅលីង','ដូងកោសស្រស់','អំបិលម៉ដ្ឋបន្តិច','ចានស្រាក់ ឬថាសទ្រ'],
    ingredientsEn: ['Cooked Sticky Rice','Toasted White & Black Sesame','Fresh Grated Coconut','Pinch of Sea Salt','Offering Tray'],
    cookTimeKh:'ពូតមុនម៉ោង ៣:៣០ ទៀបភ្លឺ',
    cookTimeEn:'Hand-rolled before 3:30 AM dawn',
    proTipKh:'ពេលពូតបាយបិណ្ឌ ត្រូវតាំងចិត្តស្ងប់ ហើយឧទ្ទិសផ្សាយមេត្តាធម៌ដល់សព្វសត្វទាំងអស់ឱ្យរួចផុតទុក្ខ',
    proTipEn:'While rolling Bay Ben spheres, maintain a quiet, compassionate state of mind, wishing peace and liberation for all wandering spirits.',
  },
];

export interface ChecklistItem {
  id: string;
  titleKh: string;
  titleEn: string;
  detailKh: string;
  detailEn: string;
  icon: React.ElementType;
  badgeKh: string;
  badgeEn: string;
}

export const CHECKLIST_ITEMS: ChecklistItem[] = [
  {
    id:'attire',
    titleKh:'សម្លៀកបំពាក់ពណ៌សសមរម្យ (អាវស ឬអាវប៉ាក់)',
    titleEn:'Modest White Attire (White Shirt / Av Pak)',
    detailKh:
'ស្លៀកពាក់អាវសស្អាតបាត ឬអាវប៉ាក់ប្រពៃណី សំពត់ចងក្បិន ឬសំពត់បត់វែងជិតជង្គង់ និងពាក់ក្រមា ឬស្បៃឆៀងស្មា ពណ៌សតំណាងឱ្យភាពបរិសុទ្ធនៃចិត្ត និងការគោរពព្រះពុទ្ធសាសនា',
    detailEn:
'Pristine white blouse/shirt, conservative long Sampot or traditional pants, and a clean shoulder scarf (Kroma/Sbai). White symbolizes mental clarity, humility, and sacred reverence.',
    icon: Shirt,
    badgeKh:'សំខាន់បំផុត',
    badgeEn:'Essential',
  },
  {
    id:'tiffin',
    titleKh:'ស្រាក់ចង្ហាន់ស្អាត និងចម្អិនស្រស់ៗ',
    titleEn:'Freshly Prepared Multi-Tier Tiffin Carrier',
    detailKh:
'ចង្ហាន់ដែលទើបតែចម្អិនក្តៅៗនៅព្រឹកព្រហាម រៀបចំដាក់ក្នុងស្រាក់ចង្ហាន់ដែលជូតសម្អាតស្អាត មិនត្រូវភ្លក្សម្ហូបមុនពេលប្រគេនព្រះសង្ឃឡើយ',
    detailEn:
'Freshly cooked hot meals packed in a spotless tiffin carrier before sunrise. Traditionally, cooks refrain from tasting directly from serving pots to preserve offering purity.',
    icon: Utensils,
    badgeKh:'ចង្ហាន់ព្រះសង្ឃ',
    badgeEn:'Alms Meal',
  },
  {
    id:'flowers',
    titleKh:'កន្ត្រកផ្កាឈូកបត់ស្រទាប់ ផ្កាម្លិះ ធូប និងទៀន',
    titleEn:'Folded Lotus Basket, Jasmine, Incense & Candles',
    detailKh:
'ផ្កាឈូកស្រស់បត់ស្រទាប់យ៉ាងប្រណីត កម្រងផ្កាម្លិះក្រអូប ធូប ៣ សរសៃ (បូជាព្រះពុទ្ធ ព្រះធម៌ ព្រះសង្ឃ) និងទៀនពណ៌លឿង ២ ដើម សម្រាប់អុជបូជាព្រះរតនត្រ័យ',
    detailEn:
'Fresh lotus buds folded petal-by-petal into blooming crowns, fragrant jasmine garlands, 3 incense sticks (Triple Gem), and yellow candles for sanctuary devotion.',
    icon: Sparkles,
    badgeKh:'បូជាព្រះរតនត្រ័យ',
    badgeEn:'Veneration',
  },
  {
    id:'libation-pot',
    titleKh:'កំសៀវ ឬកែវស្អាតសម្រាប់ពិធីច្រូចទឹក',
    titleEn:'Clean Water Vessel for Dacina Libation',
    detailKh:
'ដបទឹកស្អាត ឬកំសៀវតូចមួយសម្រាប់ច្រូចទឹកឧទ្ទិសកុសល ពេលព្រះសង្ឃសូត្រធម៌យថា (Yatha...) ដើម្បីបញ្ជូនផលបុណ្យដល់ដូនតា ៧ សន្តាន',
    detailEn:
'Dedicated clean water kettle or cup to perform the drop-by-drop Dacina water pouring ritual while monks chant Pali merit-transference verses.',
    icon: Droplet,
    badgeKh:'ឧទ្ទិសកុសល',
    badgeEn:'Merit Dedication',
  },
  {
    id:'envelopes',
    titleKh:'ស្រោមសំបុត្របច្ច័យបួន និងទេយ្យទាន',
    titleEn:'Four Requisites Donation Envelopes',
    detailKh:
'ស្រោមសំបុត្រស្អាតបាតដាក់បច្ច័យតាមសទ្ធាជ្រះថ្លា សម្រាប់ទ្រទ្រង់ទឹក ភ្លើង ការសាងសង់វត្តអារាម និងជាថ្នាំសង្កូវសម្រាប់ព្រះសង្ឃដែលគង់ចាំវស្សា',
    detailEn:
'Clean envelopes with modest merit donations to support monastery maintenance, electricity/water utilities, and medical care for resident monks.',
    icon: Heart,
    badgeKh:'ទានមេត្តាធម៌',
    badgeEn:'Monastery Support',
  },
  {
    id:'mindset',
    titleKh:'ចិត្តស្ងប់ជ្រះថ្លា និងវាចាសុភាពរាបសារ',
    titleEn:'Serene Mindset, Humility & Noble Speech',
    detailKh:
'តាំងចិត្តស្ងប់ចាកទុក្ខកង្វល់ មិនខឹងក្រេវក្រោធ និយាយវាចាពិរោះពិសា ចេះជួយទុក្ខធុរៈអ្នកដទៃ និងប្រកាន់ខ្ជាប់នូវសីល ៥ ពេញមួយថ្ងៃ',
    detailEn:
'Cultivating inner tranquility, leaving domestic anxieties behind, speaking gentle words, helping fellow pilgrims, and mindfully upholding the Five Precepts.',
    icon: Landmark,
    badgeKh:'សីលធម៌',
    badgeEn:'Inner Virtue',
  },
];
