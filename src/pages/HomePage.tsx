import React, { useEffect } from 'react';
import { HeroCarousel } from '../components/home/HeroCarousel';
import { QuickActions } from '../components/home/QuickActions';
import { VehicleShowcase } from '../components/home/VehicleShowcase';
import { TechExperience } from '../components/home/TechExperience';
import { ElectricShowcase } from '../components/home/ElectricShowcase';
import { NewsSection } from '../components/home/NewsSection';
import { DealerSection } from '../components/home/DealerSection';
import { TestDriveSection } from '../components/home/TestDriveSection';

export const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'NOVA MOTORS | Định Nghĩa Lại Trải Nghiệm Xe Hạng Sang & Tiên Phong Công Nghệ';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      {/* 1. Fullscreen Hero Section */}
      <HeroCarousel />

      {/* 2. Quick Action Cards (4-5 cards) */}
      <QuickActions />

      {/* 3. Vehicle Catalog Showcase */}
      <VehicleShowcase />

      {/* 4. Tech Experience Section (Dark theme, split layout) */}
      <TechExperience />

      {/* 5. Electric Vehicle Section (NOVA E9 focus & stats) */}
      <ElectricShowcase />

      {/* 6. News & Events (3 cards) */}
      <NewsSection />

      {/* 7. Dealer Locator with Interactive Map */}
      <DealerSection />

      {/* 8. Test Drive Booking Form Section */}
      <TestDriveSection />
    </div>
  );
};

