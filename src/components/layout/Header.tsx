import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, ArrowUpRight, Phone, MapPin } from 'lucide-react';

interface HeaderProps {
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isHomePage = location.pathname === '/';

  const navLinks = [
    { name: 'Xe', path: '/models' },
    { name: 'Mua xe', path: '/inventory' },
    { name: 'Dịch vụ', path: '/service' },
    { name: 'Đại lý', path: '/dealers' },
    { name: 'Tin tức', path: '/news' },
    { name: 'Về chúng tôi', path: '/about' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-nova-dark/95 backdrop-blur-md py-4 border-b border-white/10 text-white shadow-xl'
            : isHomePage
            ? 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-6 text-white'
            : 'bg-nova-dark py-5 text-white border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none focus:ring-1 focus:ring-white/40">
            {/* Minimalist geometric brand mark */}
            <div className="w-8 h-8 rounded-full border border-white/60 flex items-center justify-center transition-transform duration-500 group-hover:scale-105 group-hover:border-white">
              <div className="w-3 h-3 bg-nova-burgundy rotate-45 transform transition-transform duration-500 group-hover:rotate-90"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-light text-xl tracking-[0.3em] uppercase leading-none">
                NOVA
              </span>
              <span className="text-[9px] tracking-[0.45em] text-nova-silver/70 font-mono uppercase mt-0.5">
                MOTORS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm tracking-wider uppercase transition-colors relative py-1 group ${
                    isActive ? 'text-white font-medium' : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[1px] bg-white transition-transform duration-300 origin-left ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Action items: Search, Test Drive CTA, Mobile Hamburger */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="p-2 text-neutral-300 hover:text-white transition-colors focus:outline-none"
              aria-label="Tìm kiếm mẫu xe hoặc dịch vụ"
            >
              <Search className="w-5 h-5 stroke-[1.5]" />
            </button>

            {/* Test Drive Button */}
            <Link
              to="/test-drive"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-widest font-medium border border-white/30 text-white bg-white/5 hover:bg-white hover:text-nova-dark backdrop-blur-sm transition-all duration-300 rounded-none shadow-sm hover:border-white"
            >
              <span>Đăng ký lái thử</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-neutral-200 hover:text-white focus:outline-none"
              aria-label="Mở menu điều hướng"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 stroke-[1.5]" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-nova-dark/98 backdrop-blur-xl lg:hidden transition-all duration-500 flex flex-col justify-between p-8 pt-28 ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        <div className="flex flex-col space-y-6">
          <p className="text-[10px] tracking-[0.3em] uppercase text-neutral-400 font-mono">
            Danh mục điều hướng
          </p>
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-light tracking-wide text-neutral-100 hover:text-white flex items-center justify-between border-b border-white/10 pb-3"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-5 h-5 text-neutral-500" />
              </Link>
            ))}
          </div>

          <div className="pt-4">
            <Link
              to="/test-drive"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-3 py-4 text-sm uppercase tracking-widest font-medium bg-white text-nova-dark hover:bg-neutral-200 transition-colors"
            >
              <span>Đăng ký lái thử ngay</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Quick Footer inside Mobile Drawer */}
        <div className="pt-8 border-t border-white/10 space-y-3 text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-nova-burgundy" />
            <span>Hotline 24/7: 1900 8899</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-nova-burgundy" />
            <span>Hệ thống 7 Showroom chính hãng toàn quốc</span>
          </div>
        </div>
      </div>
    </>
  );
};

