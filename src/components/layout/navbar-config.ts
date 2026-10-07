import {
  Sparkles,
  Sunrise,
  Droplet,
  CheckCircle2,
  Users,
  Trees,
  BookOpen,
  MapPin,
  Info,
  type LucideIcon,
} from 'lucide-react';

export interface NavbarDropdownItem {
  to: string;
  labelKh: string;
  labelEn: string;
  subKh: string;
  subEn: string;
  icon: LucideIcon;
  iconBg: string;
  badge?: string;
}

export interface NavbarCategory {
  id: string;
  titleKh: string;
  titleEn: string;
  items: NavbarDropdownItem[];
}

export const NAVBAR_CATEGORIES: NavbarCategory[] = [
  {
    id: 'rituals',
    titleKh: 'ពិធីសាសនា',
    titleEn: 'Sacred Rituals',
    items: [
      {
        to: '/journey',
        labelKh: 'ដំណើរ ១៥ ថ្ងៃ',
        labelEn: '15-Day Journey',
        subKh: 'ដំណើរបុណ្យ និងប្រតិទិនសាសនា',
        subEn: '15-day festival calendar & schedule',
        icon: Sparkles,
        iconBg: 'bg-lotus-100 text-lotus-800',
      },
      {
        to: '/bay-ben',
        labelKh: 'ពិធីបោះបាយបិណ្ឌ',
        labelEn: 'Bay Ben Ritual',
        subKh: 'ពួតបាយបិណ្ឌ និងបោះបាយពេលទៀបភ្លឺ',
        subEn: 'Sacred pre-dawn rice offering',
        icon: Sunrise,
        iconBg: 'bg-amber-100 text-amber-800',
      },
      {
        to: '/libation',
        labelKh: 'ពិធីច្រូចទឹក',
        labelEn: 'Water Libation',
        subKh: 'ឧទ្ទិសកុសលជូនដូនតា និងធម៌បាលី',
        subEn: 'Ancestral merit dedication & Pali chants',
        icon: Droplet,
        iconBg: 'bg-sky-100 text-sky-800',
      },
      {
        to: '/activities',
        labelKh: 'កិច្ចការបុណ្យ',
        labelEn: 'Daily Activities',
        subKh: 'កិច្ចកុសលប្រចាំថ្ងៃ និងវិធីធ្វើនំអន្សម',
        subEn: 'Daily merits, checklist & recipes',
        icon: CheckCircle2,
        iconBg: 'bg-emerald-100 text-emerald-800',
      },
    ],
  },
  {
    id: 'family',
    titleKh: 'គ្រួសារ និងការចងចាំ',
    titleEn: 'Family & Memories',
    items: [
      {
        to: '/family',
        labelKh: 'គ្រួសារ និងសាមគ្គី',
        labelEn: 'Family Traditions',
        subKh: 'កិច្ចសាមគ្គីគ្រួសារ និងការរួបរួម',
        subEn: 'Family challenges & traditions',
        icon: Users,
        iconBg: 'bg-purple-100 text-purple-800',
      },
      {
        to: '/memories',
        labelKh: 'សួនអនុស្សាវរីយ៍',
        labelEn: 'Remembrance Garden',
        subKh: 'កម្រងរូបថត និងការរំឭកគុណដូនតា',
        subEn: 'Tributes & photo memories to ancestors',
        icon: Trees,
        iconBg: 'bg-teal-100 text-teal-800',
      },
    ],
  },
  {
    id: 'heritage',
    titleKh: 'វប្បធម៌ និងវត្តអារាម',
    titleEn: 'Culture & Pagodas',
    items: [
      {
        to: '/stories',
        labelKh: 'រឿងនិទាន',
        labelEn: 'Stories & Lore',
        subKh: 'ប្រវត្តិបុណ្យ និងរឿងព្រេងប្រពៃណី',
        subEn: 'Pchum Ben legends & folklore',
        icon: BookOpen,
        iconBg: 'bg-orange-100 text-orange-800',
      },
      {
        to: '/pagodas',
        labelKh: 'ស្វែងរកវត្តអារាម',
        labelEn: 'Historic Pagodas',
        subKh: 'វត្តអារាមប្រវត្តិសាស្ត្រ ១៥ ថ្ងៃ',
        subEn: '15 historic pagodas across Cambodia',
        icon: MapPin,
        iconBg: 'bg-rose-100 text-rose-800',
      },
      {
        to: '/about',
        labelKh: 'អំពីបុណ្យភ្ជុំបិណ្ឌ',
        labelEn: 'About Festival',
        subKh: 'អត្ថន័យ និងប្រភពនៃបុណ្យជាតិ',
        subEn: 'Significance & Theravada Buddhist origins',
        icon: Info,
        iconBg: 'bg-blue-100 text-blue-800',
      },
    ],
  },
];
