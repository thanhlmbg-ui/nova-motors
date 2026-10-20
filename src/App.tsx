import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { CookieBanner } from './components/layout/CookieBanner';
import { BackToTop } from './components/layout/BackToTop';
import { SearchModal } from './components/ui/SearchModal';

// Pages
import { HomePage } from './pages/HomePage';
import { ModelsPage } from './pages/ModelsPage';
import { ModelDetailPage } from './pages/ModelDetailPage';
import { TestDrivePage } from './pages/TestDrivePage';
import { InventoryPage } from './pages/InventoryPage';
import { ServicePage } from './pages/ServicePage';
import { DealersPage } from './pages/DealersPage';
import { NewsPage } from './pages/NewsPage';
import { AboutPage } from './pages/AboutPage';
import { CareersPage } from './pages/CareersPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Scroll to top automatically when route changes
const ScrollToTopOnRoute: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <Router>
      <ScrollToTopOnRoute />
      <div className="flex flex-col min-h-screen bg-white text-nova-dark font-sans selection:bg-nova-dark selection:text-white">
        {/* Sticky Header with dynamic scroll background */}
        <Header onOpenSearch={() => setIsSearchOpen(true)} />

        {/* Global Search Overlay Modal */}
        <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

        {/* Main Content Viewport */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/models" element={<ModelsPage />} />
            <Route path="/models/:slug" element={<ModelDetailPage />} />
            <Route path="/test-drive" element={<TestDrivePage />} />
            <Route path="/inventory" element={<InventoryPage />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/dealers" element={<DealersPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Floating Utilities */}
        <BackToTop />
        <CookieBanner />

        {/* Comprehensive Editorial Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;

