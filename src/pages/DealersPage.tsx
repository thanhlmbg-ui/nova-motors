import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, MapPin, Phone, Clock, Search, ExternalLink, Calendar, CheckCircle2 } from 'lucide-react';
import { DEALERS } from '../data/dealers';

export const DealersPage: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState('Tất cả');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    document.title = 'Hệ Thống Đại Lý & Showroom | NOVA MOTORS';
    window.scrollTo(0, 0);
  }, []);

  const cities = ['Tất cả', 'TP. Hồ Chí Minh', 'Hà Nội', 'Đà Nẵng', 'Hải Phòng', 'Cần Thơ'];

  const filtered = DEALERS.filter((d) => {
    const matchesCity = selectedCity === 'Tất cả' || d.city === selectedCity;
    const matchesSearch =
      d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.address.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCity && matchesSearch;
  });

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen text-nova-dark">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4">
        <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono">
          <Link to="/" className="hover:text-black transition-colors">Trang chủ</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-black font-medium">Hệ thống đại lý</span>
        </div>
      </div>

      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-8 border-b border-neutral-200">
        <span className="text-[11px] uppercase tracking-[0.3em] font-mono text-neutral-500 block mb-2">
          Mạng lưới phân phối chính thức
        </span>
        <h1 className="text-4xl sm:text-5xl font-display font-light text-nova-dark tracking-tight">
          Hệ Thống Showroom & Trung Tâm Dịch Vụ
        </h1>
        <p className="text-sm sm:text-base text-neutral-600 font-light max-w-3xl mt-3 leading-relaxed">
          Được thiết kế theo tiêu chuẩn kiến trúc tối giản toàn cầu của NOVA MOTORS, mang lại không gian tĩnh lặng, tinh tế và riêng tư tuyệt đối cho quý khách hàng.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8 p-4 bg-neutral-50 border border-neutral-200">
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            {cities.map((c) => (
              <button
                key={c}
                onClick={() => setSelectedCity(c)}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-mono whitespace-nowrap transition-colors ${
                  selectedCity === c
                    ? 'bg-nova-dark text-white font-medium'
                    : 'bg-white border border-neutral-200 text-neutral-600 hover:text-black'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm theo tên đại lý hoặc đường..."
              className="w-full bg-white border border-neutral-300 text-xs pl-9 pr-3 py-2.5 focus:outline-none focus:border-black rounded-none"
            />
          </div>
        </div>

        {/* Showrooms Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((dealer) => (
            <div
              key={dealer.id}
              className="bg-neutral-50 border border-neutral-200 hover:border-neutral-400 transition-all p-8 flex flex-col justify-between hover:shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
                    {dealer.city}
                  </span>
                  {dealer.isFlagship && (
                    <span className="text-[10px] font-mono tracking-widest uppercase bg-nova-burgundy text-white px-2.5 py-0.5">
                      Flagship Lounge
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-display font-medium text-black mb-4">
                  {dealer.name}
                </h3>

                <div className="space-y-3 text-xs text-neutral-600 font-light mb-6">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-nova-burgundy flex-shrink-0 mt-0.5" />
                    <span>{dealer.address}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-nova-burgundy flex-shrink-0" />
                    <span className="font-mono text-black font-medium">{dealer.phone}</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-nova-burgundy flex-shrink-0 mt-0.5" />
                    <span>{dealer.hours}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-200 mb-6">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-400 block mb-2">
                    Dịch vụ tại đại lý:
                  </span>
                  <ul className="space-y-1 text-xs text-neutral-700">
                    {dealer.services.map((s, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-nova-burgundy" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(dealer.name + ' ' + dealer.address)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 border border-neutral-300 text-neutral-800 text-xs uppercase tracking-widest font-medium hover:border-black hover:text-black transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Chỉ đường trên Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <Link
                  to="/test-drive"
                  className="w-full py-3 bg-nova-dark text-white text-xs uppercase tracking-widest font-medium hover:bg-neutral-800 transition-colors flex items-center justify-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Đặt lịch hẹn tại đây</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

