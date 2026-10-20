import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight, Car, Newspaper, Wrench, MapPin } from 'lucide-react';
import { VEHICLES } from '../../data/vehicles';
import { NEWS_ARTICLES } from '../../data/news';
import { DEALERS } from '../../data/dealers';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const normalized = query.toLowerCase().trim();

  const matchingVehicles = normalized
    ? VEHICLES.filter(
        v =>
          v.name.toLowerCase().includes(normalized) ||
          v.category.toLowerCase().includes(normalized) ||
          v.fuelType.toLowerCase().includes(normalized)
      )
    : [];

  const matchingNews = normalized
    ? NEWS_ARTICLES.filter(
        a =>
          a.title.toLowerCase().includes(normalized) ||
          a.excerpt.toLowerCase().includes(normalized)
      )
    : [];

  const matchingDealers = normalized
    ? DEALERS.filter(
        d =>
          d.name.toLowerCase().includes(normalized) ||
          d.city.toLowerCase().includes(normalized) ||
          d.address.toLowerCase().includes(normalized)
      )
    : [];

  const handleSelect = (path: string) => {
    onClose();
    navigate(path);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex flex-col justify-start items-center pt-20 px-6 animate-fade-in">
      <div className="w-full max-w-3xl">
        {/* Header bar */}
        <div className="flex items-center justify-between pb-6 border-b border-white/20">
          <div className="flex items-center gap-3 w-full pr-4">
            <Search className="w-6 h-6 text-neutral-400 stroke-[1.5]" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Tìm kiếm mẫu xe (NOVA X5, S7, E9), tin tức, hoặc đại lý..."
              className="w-full bg-transparent text-xl sm:text-2xl font-light text-white placeholder-neutral-500 focus:outline-none"
            />
          </div>
          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white transition-colors"
            aria-label="Đóng tìm kiếm"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Results area */}
        <div className="py-8 max-h-[70vh] overflow-y-auto space-y-8">
          {/* Quick suggestions when empty */}
          {!query && (
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-widest text-neutral-400 font-mono">
                Gợi ý tìm kiếm phổ biến
              </p>
              <div className="flex flex-wrap gap-2.5">
                {[
                  { label: 'NOVA X5 SUV', path: '/models/nova-x5' },
                  { label: 'NOVA S7 Sedan', path: '/models/nova-s7' },
                  { label: 'NOVA E9 Thuần điện', path: '/models/nova-e9' },
                  { label: 'Đăng ký lái thử', path: '/test-drive' },
                  { label: 'Showroom TP.HCM & Hà Nội', path: '/dealers' },
                  { label: 'Đặt hẹn bảo dưỡng', path: '/service' },
                ].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelect(item.path)}
                    className="px-4 py-2 border border-white/15 hover:border-white text-xs tracking-wider uppercase text-neutral-300 hover:text-white transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Vehicles Results */}
          {matchingVehicles.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-400 font-mono">
                <Car className="w-4 h-4 text-nova-burgundy" />
                <span>Mẫu xe ({matchingVehicles.length})</span>
              </div>
              <div className="divide-y divide-white/10">
                {matchingVehicles.map(vehicle => (
                  <div
                    key={vehicle.id}
                    onClick={() => handleSelect(`/models/${vehicle.slug}`)}
                    className="py-3 flex items-center justify-between cursor-pointer group hover:bg-white/5 px-3 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={vehicle.thumbnailImage}
                        alt={vehicle.name}
                        className="w-16 h-10 object-cover rounded-none"
                      />
                      <div>
                        <h4 className="text-white font-medium text-sm group-hover:text-nova-silver">
                          {vehicle.name}
                        </h4>
                        <p className="text-xs text-neutral-400">
                          {vehicle.category} &bull; {vehicle.formattedPrice}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Dealers Results */}
          {matchingDealers.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-400 font-mono">
                <MapPin className="w-4 h-4 text-nova-burgundy" />
                <span>Đại lý & Showroom ({matchingDealers.length})</span>
              </div>
              <div className="divide-y divide-white/10">
                {matchingDealers.map(dealer => (
                  <div
                    key={dealer.id}
                    onClick={() => handleSelect('/dealers')}
                    className="py-3 flex items-center justify-between cursor-pointer group hover:bg-white/5 px-3 transition-colors"
                  >
                    <div>
                      <h4 className="text-white font-medium text-sm group-hover:text-nova-silver">
                        {dealer.name}
                      </h4>
                      <p className="text-xs text-neutral-400">{dealer.address}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* News Results */}
          {matchingNews.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-400 font-mono">
                <Newspaper className="w-4 h-4 text-nova-burgundy" />
                <span>Tin tức & Sự kiện ({matchingNews.length})</span>
              </div>
              <div className="divide-y divide-white/10">
                {matchingNews.map(article => (
                  <div
                    key={article.id}
                    onClick={() => handleSelect('/news')}
                    className="py-3 flex items-center justify-between cursor-pointer group hover:bg-white/5 px-3 transition-colors"
                  >
                    <div>
                      <h4 className="text-white font-medium text-sm group-hover:text-nova-silver">
                        {article.title}
                      </h4>
                      <p className="text-xs text-neutral-400">{article.date}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* No results */}
          {query &&
            matchingVehicles.length === 0 &&
            matchingNews.length === 0 &&
            matchingDealers.length === 0 && (
              <div className="py-12 text-center text-neutral-400">
                <p className="text-sm">Không tìm thấy kết quả phù hợp với &ldquo;{query}&rdquo;.</p>
                <p className="text-xs text-neutral-500 mt-2">
                  Vui lòng thử tìm kiếm theo từ khóa: SUV, Sedan, Xe điện, hoặc tên thành phố.
                </p>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

