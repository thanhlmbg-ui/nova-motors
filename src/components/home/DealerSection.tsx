import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Search, ExternalLink, Calendar, Check, Compass } from 'lucide-react';
import { DEALERS } from '../../data/dealers';
import { Dealer } from '../../types';

export const DealerSection: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<string>('Tất cả');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeDealer, setActiveDealer] = useState<Dealer>(DEALERS[0]);

  const cities = ['Tất cả', 'Hà Nội', 'TP. Hồ Chí Minh', 'Đà Nẵng', 'Hải Phòng', 'Cần Thơ'];

  const filteredDealers = DEALERS.filter(dealer => {
    const matchesCity = selectedCity === 'Tất cả' || dealer.city === selectedCity;
    const matchesSearch =
      dealer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dealer.address.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCity && matchesSearch;
  });

  return (
    <section className="py-24 bg-white text-nova-dark border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <span className="text-[11px] uppercase tracking-[0.3em] font-mono text-neutral-500">
            Mạng lưới ủy quyền chính hãng
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-light text-nova-dark tracking-tight">
            Tìm đại lý gần bạn
          </h2>
          <p className="text-neutral-600 font-light text-sm sm:text-base leading-relaxed">
            Trải nghiệm không gian trưng bày đạt chuẩn kiến trúc đương đại toàn cầu và dịch vụ chăm sóc khách hàng cá nhân hóa VIP tại các trung tâm NOVA MOTORS.
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-10 p-4 bg-neutral-50 border border-neutral-200">
          <div className="md:col-span-4">
            <label className="text-[10px] uppercase font-mono tracking-widest text-neutral-500 block mb-1">
              Chọn tỉnh / thành phố
            </label>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full bg-white border border-neutral-300 text-sm px-3.5 py-2.5 focus:outline-none focus:border-black rounded-none"
            >
              {cities.map((c) => (
                <option key={c} value={c}>
                  {c === 'Tất cả' ? 'Tất cả các tỉnh / thành phố' : c}
                </option>
              ))}
            </select>
          </div>

          <div className="md:col-span-8">
            <label className="text-[10px] uppercase font-mono tracking-widest text-neutral-500 block mb-1">
              Tìm theo tên showroom hoặc quận / huyện
            </label>
            <div className="relative">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3.5 stroke-[1.5]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Nhập tên đại lý, đường hoặc quận (Ví dụ: Lê Duẩn, Ba Đình, Quận 7...)"
                className="w-full bg-white border border-neutral-300 text-sm pl-10 pr-4 py-2.5 focus:outline-none focus:border-black rounded-none"
              />
            </div>
          </div>
        </div>

        {/* Interactive Master-Detail Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Dealers List */}
          <div className="lg:col-span-5 space-y-4 max-h-[620px] overflow-y-auto pr-1">
            {filteredDealers.length === 0 ? (
              <div className="p-8 text-center bg-neutral-50 border border-neutral-200 text-neutral-500 text-sm">
                Không tìm thấy đại lý nào phù hợp với tìm kiếm của quý khách.
              </div>
            ) : (
              filteredDealers.map((dealer) => {
                const isSelected = activeDealer.id === dealer.id;
                return (
                  <div
                    key={dealer.id}
                    onClick={() => setActiveDealer(dealer)}
                    className={`p-6 border cursor-pointer transition-all duration-300 ${
                      isSelected
                        ? 'border-nova-dark bg-neutral-900 text-white shadow-xl'
                        : 'border-neutral-200 bg-white hover:border-neutral-400 text-nova-dark'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex items-center gap-2">
                        {dealer.isFlagship && (
                          <span className="text-[9px] font-mono tracking-widest uppercase bg-nova-burgundy text-white px-2 py-0.5">
                            Flagship
                          </span>
                        )}
                        <span className={`text-[10px] font-mono uppercase tracking-wider ${isSelected ? 'text-neutral-300' : 'text-neutral-500'}`}>
                          {dealer.city}
                        </span>
                      </div>
                      {isSelected && <Check className="w-4 h-4 text-white" />}
                    </div>

                    <h3 className="text-base font-display font-medium tracking-tight mb-2">
                      {dealer.name}
                    </h3>

                    <div className="space-y-1.5 text-xs font-light">
                      <div className="flex items-start gap-2">
                        <MapPin className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${isSelected ? 'text-neutral-400' : 'text-neutral-500'}`} />
                        <span className="line-clamp-2">{dealer.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className={`w-3.5 h-3.5 flex-shrink-0 ${isSelected ? 'text-neutral-400' : 'text-neutral-500'}`} />
                        <span className="font-mono">{dealer.phone}</span>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Interactive Map Visualizer / Placeholder Card */}
          <div className="lg:col-span-7 bg-neutral-900 text-white border border-neutral-800 p-8 flex flex-col justify-between min-h-[620px] relative overflow-hidden">
            {/* Visual map matrix background */}
            <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />

            <div>
              {/* Map header info */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-nova-silver">
                    Đại lý đang chọn
                  </span>
                  <h3 className="text-2xl font-display font-light text-white mt-1">
                    {activeDealer.name}
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                  <Compass className="w-5 h-5 text-neutral-300 animate-spin-slow" />
                </div>
              </div>

              {/* Simulated Map Graphic with GPS coordinates */}
              <div className="relative aspect-[16/9] w-full bg-neutral-950 border border-white/10 overflow-hidden flex items-center justify-center mb-6">
                {/* Stylized road grid lines */}
                <svg className="w-full h-full opacity-30" viewBox="0 0 500 300" fill="none">
                  <path d="M 0 100 Q 150 120 300 80 T 500 120" stroke="#ffffff" strokeWidth="2" />
                  <path d="M 120 0 L 140 300" stroke="#ffffff" strokeWidth="1.5" />
                  <path d="M 380 0 L 360 300" stroke="#ffffff" strokeWidth="1.5" />
                  <path d="M 0 220 Q 250 200 500 240" stroke="#ffffff" strokeWidth="1" />
                  <circle cx="250" cy="140" r="45" stroke="#ffffff" strokeDasharray="4 4" />
                </svg>

                {/* Animated Pulsing Pin */}
                <div className="absolute flex flex-col items-center">
                  <div className="relative flex items-center justify-center">
                    <span className="absolute w-8 h-8 rounded-full bg-nova-burgundy/40 animate-ping" />
                    <span className="relative w-4 h-4 rounded-full bg-nova-burgundy border-2 border-white" />
                  </div>
                  <div className="mt-2 bg-black/90 backdrop-blur-md px-3 py-1 text-[11px] font-mono border border-white/20 whitespace-nowrap">
                    {activeDealer.name}
                  </div>
                </div>

                <div className="absolute bottom-3 left-4 text-[10px] font-mono text-neutral-400">
                  Tọa độ GPS: {activeDealer.latitude}° N, {activeDealer.longitude}° E
                </div>
                <div className="absolute bottom-3 right-4 text-[10px] font-mono text-neutral-500 uppercase">
                  Chế độ bản đồ tương tác
                </div>
              </div>

              {/* Dealer Full Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-light text-neutral-300 py-3">
                <div className="space-y-2">
                  <p className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-nova-burgundy flex-shrink-0 mt-0.5" />
                    <span>{activeDealer.address}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-nova-burgundy flex-shrink-0" />
                    <span className="font-mono text-white">{activeDealer.phone}</span>
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-nova-burgundy flex-shrink-0" />
                    <span>{activeDealer.hours}</span>
                  </p>
                  <div className="pt-1">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-400 block mb-1">
                      Dịch vụ cung cấp:
                    </span>
                    <ul className="list-disc list-inside text-[11px] space-y-0.5 text-neutral-300">
                      {activeDealer.services.slice(0, 2).map((s, i) => (
                        <li key={i}>{s}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-4">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(activeDealer.name + ' ' + activeDealer.address)}`}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 border border-white/30 text-white text-xs uppercase tracking-widest font-medium hover:bg-white hover:text-nova-dark transition-colors flex items-center gap-2"
              >
                <span>Xem bản đồ Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <Link
                to="/test-drive"
                className="px-6 py-3 bg-white text-nova-dark text-xs uppercase tracking-widest font-medium hover:bg-neutral-200 transition-colors flex items-center gap-2"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Đặt lịch hẹn tại đây</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

