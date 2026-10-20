import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Zap, Gauge, Sparkles } from 'lucide-react';
import { VEHICLES } from '../../data/vehicles';

export const VehicleShowcase: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'Tất cả' | 'SUV' | 'Sedan' | 'Electric' | 'Sport'>('Tất cả');

  const filteredVehicles = activeFilter === 'Tất cả'
    ? VEHICLES
    : VEHICLES.filter(v => v.category === activeFilter);

  const filterTabs: Array<{ id: 'Tất cả' | 'SUV' | 'Sedan' | 'Electric' | 'Sport'; label: string }> = [
    { id: 'Tất cả', label: 'Tất cả dòng xe' },
    { id: 'SUV', label: 'SUV' },
    { id: 'Sedan', label: 'Sedan' },
    { id: 'Electric', label: 'Xe điện (BEV)' },
    { id: 'Sport', label: 'Xe thể thao GT' },
  ];

  return (
    <section className="py-24 bg-white text-nova-dark border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <span className="text-[11px] uppercase tracking-[0.3em] font-mono text-neutral-500">
              Bộ sưu tập đương đại
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-light text-nova-dark tracking-tight">
              Khám phá những mẫu xe mới nhất của chúng tôi
            </h2>
          </div>
          <Link
            to="/models"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-medium text-neutral-800 hover:text-black border-b border-black pb-1 self-start md:self-auto transition-colors"
          >
            <span>Toàn bộ danh mục ({VEHICLES.length} mẫu)</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto pb-4 mb-10 border-b border-neutral-200 no-scrollbar">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-5 py-2.5 text-xs uppercase tracking-widest transition-all whitespace-nowrap rounded-none font-medium ${
                activeFilter === tab.id
                  ? 'bg-nova-dark text-white shadow-sm'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-black'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="group flex flex-col justify-between bg-neutral-50 border border-neutral-200/80 hover:border-neutral-400 transition-all duration-500 hover:shadow-xl"
            >
              {/* Image Container with smooth hover zoom */}
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                <img
                  src={vehicle.thumbnailImage}
                  alt={vehicle.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Status or Fuel Badge */}
                <div className="absolute top-4 left-4 z-10 flex gap-2">
                  <span className="bg-black/80 backdrop-blur-md text-white text-[10px] font-mono tracking-widest uppercase px-3 py-1">
                    {vehicle.category}
                  </span>
                  {vehicle.fuelType.includes('Thuần điện') && (
                    <span className="bg-nova-cobalt text-white text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 flex items-center gap-1">
                      <Zap className="w-3 h-3" />
                      <span>EV</span>
                    </span>
                  )}
                </div>

                <div className="absolute top-4 right-4 z-10">
                  <span className="text-[10px] uppercase font-mono tracking-wider px-2.5 py-0.5 bg-white/90 text-nova-dark">
                    {vehicle.status}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="text-2xl font-display font-medium text-nova-dark tracking-tight group-hover:text-nova-burgundy transition-colors">
                      {vehicle.name}
                    </h3>
                  </div>

                  <p className="text-xs text-neutral-500 font-light line-clamp-2 mb-4 leading-relaxed">
                    {vehicle.description}
                  </p>

                  {/* Key specs row */}
                  <div className="grid grid-cols-3 gap-2 py-3 border-y border-neutral-200 text-center mb-5">
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-neutral-400 font-mono">Công suất</div>
                      <div className="text-xs font-semibold text-nova-dark mt-0.5">{vehicle.specs.power.split('/')[0]}</div>
                    </div>
                    <div className="border-x border-neutral-200">
                      <div className="text-[10px] uppercase tracking-wider text-neutral-400 font-mono">0-100 km/h</div>
                      <div className="text-xs font-semibold text-nova-dark mt-0.5">{vehicle.specs.acceleration.split(' ')[0]}s</div>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-neutral-400 font-mono">
                        {vehicle.specs.range ? 'Tầm hoạt động' : 'Tiêu thụ'}
                      </div>
                      <div className="text-xs font-semibold text-nova-dark mt-0.5">
                        {vehicle.specs.range ? vehicle.specs.range.split(' ')[0] + ' km' : vehicle.specs.fuelConsumption?.split(' ')[0] + ' L'}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer with Price & Actions */}
                <div>
                  <div className="mb-4">
                    <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-mono block">
                      Giá khởi điểm tham khảo
                    </span>
                    <span className="text-lg font-display font-medium text-nova-dark">
                      từ {vehicle.formattedPrice}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <Link
                      to={`/models/${vehicle.slug}`}
                      className="w-full py-3 px-4 bg-nova-dark text-white text-xs uppercase tracking-widest font-medium text-center hover:bg-neutral-800 transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span>Khám phá</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>

                    <Link
                      to="/test-drive"
                      className="w-full py-3 px-4 border border-neutral-300 text-neutral-800 text-xs uppercase tracking-widest font-medium text-center hover:border-black hover:text-black transition-colors"
                    >
                      Lái thử
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

