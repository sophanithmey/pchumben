import React, { Suspense, lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { AppLayout } from '../components/layout/app-layout';
import { LoadingState } from '../components/ui/loading-state';

// Route level code splitting for Lighthouse performance
const HomePage = lazy(() =>
  import('../features/home/home-page').then((m) => ({ default: m.HomePage })),
);
const JourneyPage = lazy(() =>
  import('../features/journey/journey-page').then((m) => ({ default: m.JourneyPage })),
);
const DayDetailPage = lazy(() =>
  import('../features/journey/day-detail-page').then((m) => ({ default: m.DayDetailPage })),
);
const ActivitiesPage = lazy(() =>
  import('../features/activities/activities-page').then((m) => ({ default: m.ActivitiesPage })),
);
const ActivityDetailPage = lazy(() =>
  import('../features/activities/activity-detail-page').then((m) => ({
    default: m.ActivityDetailPage,
  })),
);
const MemoriesPage = lazy(() =>
  import('../features/memories/memories-page').then((m) => ({ default: m.MemoriesPage })),
);
const CreateMemoryPage = lazy(() =>
  import('../features/memories/create-memory-page').then((m) => ({
    default: m.CreateMemoryPage,
  })),
);
const FamilyPage = lazy(() =>
  import('../features/family/family-page').then((m) => ({ default: m.FamilyPage })),
);
const PagodasPage = lazy(() =>
  import('../features/pagodas/pagodas-page').then((m) => ({ default: m.PagodasPage })),
);
const AboutPage = lazy(() =>
  import('../features/about/about-page').then((m) => ({ default: m.AboutPage })),
);
const SettingsPage = lazy(() =>
  import('../features/settings/settings-page').then((m) => ({ default: m.SettingsPage })),
);
const StoriesPage = lazy(() =>
  import('../features/stories/stories-page').then((m) => ({ default: m.StoriesPage })),
);
const LibationPage = lazy(() =>
  import('../features/libation/libation-page').then((m) => ({ default: m.LibationPage })),
);
const BayBenPage = lazy(() =>
  import('../features/bay-ben/bay-ben-page').then((m) => ({ default: m.BayBenPage })),
);

const withSuspense = (Component: React.ComponentType) => (
  <Suspense fallback={<LoadingState />}>
    <Component />
  </Suspense>
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: withSuspense(HomePage) },
      { path: 'journey', element: withSuspense(JourneyPage) },
      { path: 'journey/:day', element: withSuspense(DayDetailPage) },
      { path: 'activities', element: withSuspense(ActivitiesPage) },
      { path: 'activities/:id', element: withSuspense(ActivityDetailPage) },
      { path: 'libation', element: withSuspense(LibationPage) },
      { path: 'bay-ben', element: withSuspense(BayBenPage) },
      { path: 'early-morning', element: <Navigate to="/bay-ben" replace /> },
      { path: 'memories', element: withSuspense(MemoriesPage) },
      { path: 'memories/create', element: withSuspense(CreateMemoryPage) },
      { path: 'family', element: withSuspense(FamilyPage) },
      { path: 'pagodas', element: withSuspense(PagodasPage) },
      { path: 'about', element: withSuspense(AboutPage) },
      { path: 'stories', element: withSuspense(StoriesPage) },
      { path: 'settings', element: withSuspense(SettingsPage) },
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
]);
