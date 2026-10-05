import React, { useState } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { Navbar } from './navbar';
import { BottomNav } from './bottom-nav';
import { Footer } from './footer';
import { MobileNavDrawer } from './mobile-nav-drawer';

export const AppLayout: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-warmth-50 text-warmth-950 font-sans selection:bg-lotus-200 selection:text-lotus-900">
      <Navbar onOpenMobileMenu={() => setIsDrawerOpen(true)} />
      <main className="flex-1 w-full max-w-7xl mx-auto px-3.5 sm:px-6 py-4 sm:py-6 md:py-8 pb-24 md:pb-8">
        <Outlet />
      </main>
      <Footer />
      <BottomNav onOpenMobileMenu={() => setIsDrawerOpen(true)} />
      <MobileNavDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
      <ScrollRestoration />
    </div>
  );
};
