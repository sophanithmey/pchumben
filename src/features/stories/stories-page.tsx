import React, { useState } from'react';
import { BookOpen, Sparkles } from'lucide-react';
import { CULTURAL_STORIES } from'../../data/cultural-stories';
import { CulturalStory, StoryCategory } from'../../domain/entities/story';
import { StoryCard } from'./story-card';
import { StoryDetailModal } from'./story-detail-modal';
import { useI18n } from'../../i18n/i18n-context';

type FilterCategory ='ALL' | StoryCategory;

interface CategoryTab {
  id: FilterCategory;
  khmer: string;
  english: string;
}

const CATEGORIES: CategoryTab[] = [
  { id:'ALL', khmer:'ទាំងអស់', english:'All' },
  { id:'ORIGIN', khmer:'ប្រវត្តិដើម', english:'Origins' },
  { id:'RITUAL', khmer:'ពិធីសាសនា', english:'Rituals' },
  { id:'FOOD', khmer:'នំប្រពៃណី', english:'Delicacies' },
  { id:'ANCESTORS', khmer:'បុព្វការីជន', english:'Ancestors' },
];

export const StoriesPage: React.FC = () => {
  const { locale } = useI18n();
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>('ALL');
  const [activeStory, setActiveStory] = useState<CulturalStory | null>(null);

  const filteredStories =
    selectedCategory ==='ALL'
      ? CULTURAL_STORIES
      : CULTURAL_STORIES.filter((s) => s.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-sm border border-warmth-200/90 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xs">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-lotus-50 text-lotus-700 border border-lotus-200 mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span className="font-khmer">{locale ==='kh' ?'រឿងនិទាន និងប្រវត្តិបុណ្យ' :'Legends & Cultural Lore'}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-warmth-950 mb-2 font-khmer">
          {locale ==='kh' ?'ប្រវត្តិ និងរឿងរ៉ាវនៃពិធីបុណ្យភ្ជុំបិណ្ឌ' :'Stories Behind Pchum Ben'}
        </h1>
        <p className="text-xs sm:text-sm text-warmth-600 leading-relaxed max-w-3xl font-khmer">
          {locale ==='kh'
            ?'ស្វែងយល់ពីប្រភពដើម គម្ពីរព្រះពុទ្ធសាសនា អត្ថន័យនៃនំអន្សម និងមូលហេតុដែលកូនខ្មែរគ្រប់រូបតែងឧទ្ទិសកុសលជូនដូនតាទាំង ៧ សន្តាន'
            :'Explore the Buddhist scriptures, royal origins of King Bimbisara, the symbolism of Num Ansom, and why Cambodians dedicate merits to 7 generations.'}
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {CATEGORIES.map((tab) => {
          const isActive = selectedCategory === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-4 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                isActive
                  ?'bg-lotus-600 text-white shadow-xs'
                  :'bg-white hover:bg-warmth-100 text-warmth-700 border border-warmth-200/80'
              }`}
            >
              {locale ==='kh' ? tab.khmer : tab.english}
            </button>
          );
        })}
      </div>

      {/* Stories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {filteredStories.map((story) => (
          <StoryCard key={story.id} story={story} onRead={(s) => setActiveStory(s)} />
        ))}
      </div>

      {filteredStories.length === 0 && (
        <div className="text-center py-12 bg-white rounded-3xl border border-warmth-200">
          <BookOpen className="w-8 h-8 text-warmth-400 mx-auto mb-2" />
          <p className="text-sm text-warmth-600">
            {locale ==='kh' ?'មិនមានរឿងក្នុងប្រភេទនេះទេ' :'No stories found in this category'}
          </p>
        </div>
      )}

      {/* Modal View */}
      <StoryDetailModal story={activeStory} onClose={() => setActiveStory(null)} />
    </div>
  );
};
