import React from 'react';
import { HomeHero } from './home-hero';
import { CountdownCard } from './countdown-card';
import { PagodaPreparationSection } from './pagoda-preparation-section';
import { CulturalHighlights } from './cultural-highlights';
import { BayBenSection } from '../bay-ben/bay-ben-section';
import { JourneyPreview } from './journey-preview';
import { TodaysActivityCard } from './todays-activity-card';
import { FamilyCallout } from './family-callout';

export const HomePage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-4">
      <HomeHero />
      <CountdownCard />
      <CulturalHighlights />
      <BayBenSection />
      <JourneyPreview />
      <PagodaPreparationSection />
      <TodaysActivityCard />
      <FamilyCallout />
    </div>
  );
};
