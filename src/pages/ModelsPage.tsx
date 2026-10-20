import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, SlidersHorizontal, ArrowUpDown, ChevronRight, Zap } from 'lucide-react';
import { VEHICLES } from '../data/vehicles';

export const ModelsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tất cả');
  const [selectedFuel, setSelectedFuel] = useState<string>('Tất cả');
  const [maxPrice, setMaxPrice] = useState<number>(4000000000);
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');

  useEffect(() => {
    document.title = 'Tất Cả Mẫu Xe | NOVA MOTORS Vietnam';
    window.scrollTo(0, 0);
  }, []);

  const filteredVehicles = VEHICLES.filter(v => {
    const matchesCategory = selectedCategory === 'Tất cả' || v.category === selectedCategory;
    const matchesFuel = selectedFuel === 'Tất cả' || v.fuelType.includes(selectedFuel);
    const matchesPrice = v.priceVND <= maxPrice;
    return matchesCategory && matchesFuel && matchesPrice;
  }).sort((a, b) => {
    if (sortBy === 'price-asc') return a.priceVND - b.priceVND;
    if (sortBy === 'price-desc') return b.priceVND - a.priceVND;
    return 0;
  });

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen text-nova-dark">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4">
        <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono">
          <Link to="/" className="hover:text-black transition-colors">Trang chủ</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-black">Dòng xe</span>
        </div>
      </div>

      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-8 border-b border-neutral-200">
        <span className="text-[11px] uppercase tracking-[0.3em] font-mono text-neutral-500 block mb-2">
          Danh mục sản phẩm NOVA MOTORS
        </span>
        <h1 className="text-4xl sm:text-6xl font-display font-light text-nova-dark tracking-tight">
          Bộ Sưu Tập Xe Hạng Sang
        </h1>
        <p className="text-sm sm:text-base text-neutral-600 font-light max-w-2xl mt-3 leading-relaxed">
          Mỗi chiếc xe là một tác phẩm nghệ thuật kỹ thuật, được kiến tạo để tôn vinh sự tinh tế, công nghệ thông minh và trải nghiệm làm chủ đỉnh cao.
        </p>
      </div>

      {/* Filter Toolbar */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-8">
        <div className="bg-neutral-50 border border-neutral-200 p-6 space-y-6">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-neutral-500">
            <SlidersHorizontal className="w-4 h-4" />
            <span>Bộ lọc xe</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Category Filter */}
            <div>
              <label className="text-[11px] uppercase font-mono tracking-wider text-neutral-500 block mb-2">
                Loại xe
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-white border border-neutral-300 px-3.5 py-2.5 text-xs focus:outline-none focus:border-black rounded-none"
              >
                <option value="Tất cả">Tất cả kiểu dáng</option>
                <option value="SUV">SUV Hạng Sang</option>
                <option value="Sedan">Sedan Thể Thao</option>
                <option value="Electric">Xe thuần điện (BEV)</option>
                <option value="Sport">Grand Tourer Thể Thao</option>
              </select>
            </div>

            {/* Fuel Type Filter */}
            <div>
              <label className="text-[11px] uppercase font-mono tracking-wider text-neutral-500 block mb-2">
                Nhiên liệu & Động cơ
              </label>
              <select
                value={selectedFuel}
                onChange={(e) => setSelectedFuel(e.target.value)}
                className="w-full bg-white border border-neutral-300 px-3.5 py-2.5 text-xs focus:outline-none focus:border-black rounded-none"
              >
                <option value="Tất cả">Tất cả động cơ</option>
                <option value="Mild-Hybrid">Xăng Mild-Hybrid</option>
                <option value="Thuần điện">Thuần điện (BEV)</option>
                <option value="Hi-Performance">Hi-Performance V8</option>
              </select>
            </div>

            {/* Price Slider */}
            <div>
              <div className="flex items-center justify-between mb-2 text-[11px] font-mono">
                <span className="uppercase text-neutral-500">Mức giá tối đa</span>
                <span className="font-semibold text-nova-dark">
                  {(maxPrice / 1000000000).toFixed(1)} Tỷ VNĐ
                </span>
              </div>
              <input
                type="range"
                min="1800000000"
                max="4000000000"
                step="100000000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-nova-dark"
              />
            </div>

            {/* Sort */}
            <div>
              <label className="text-[11px] uppercase font-mono tracking-wider text-neutral-500 block mb-2">
                Sắp xếp theo
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full bg-white border border-neutral-300 px-3.5 py-2.5 text-xs focus:outline-none focus:border-black rounded-none"
              >
                <option value="featured">Đặc sắc nhất</option>
                <option value="price-asc">Giá: Thấp đến cao</option>
                <option value="price-desc">Giá: Cao đến thấp</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count & Reset */}
        <div className="flex items-center justify-between py-6">
          <p className="text-xs text-neutral-500 font-mono">
            Hiển thị <span className="font-semibold text-black">{filteredVehicles.length}</span> mẫu xe phù hợp
          </p>
          {(selectedCategory !== 'Tất cả' || selectedFuel !== 'Tất cả' || maxPrice < 4000000000) && (
            <button
              onClick={() => {
                setSelectedCategory('Tất cả');
                setSelectedFuel('Tất cả');
                setMaxPrice(4000000000);
              }}
              className="text-xs text-neutral-600 hover:text-black underline underline-offset-4"
            >
              Xóa tất cả bộ lọc
            </button>
          )}
        </div>

        {/* Vehicle Cards Grid */}
        {filteredVehicles.length === 0 ? (
          <div className="py-20 text-center bg-neutral-50 border border-neutral-200">
            <h3 className="text-xl font-display font-light text-neutral-800">
              Không tìm thấy mẫu xe phù hợp với tiêu chí lọc
            </h3>
            <p className="text-xs text-neutral-500 mt-2">
              Quý khách vui lòng nới rộng khoảng giá hoặc chọn &ldquo;Tất cả dòng xe&rdquo;.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className="group flex flex-col justify-between bg-neutral-50 border border-neutral-200 hover:border-neutral-400 transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                  <img
                    src={vehicle.thumbnailImage}
                    alt={vehicle.name}
                    className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 z-10 flex gap-2">
                    <span className="bg-black/80 backdrop-blur-md text-white text-[10px] font-mono tracking-widest uppercase px-3 py-1">
                      {vehicle.category}
                    </span>
                    {vehicle.fuelType.includes('Thuần điện') && (
                      <span className="bg-nova-cobalt text-white text-[10px] font-mono tracking-widest uppercase px-2 py-1 flex items-center gap-1">
                        <Zap className="w-3 h-3" />
                        <span>EV</span>
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-2xl font-display font-medium text-nova-dark tracking-tight mb-1 group-hover:text-nova-burgundy transition-colors">
                      {vehicle.name}
                    </h3>
                    <p className="text-xs text-neutral-500 font-light mb-4 line-clamp-2">
                      {vehicle.description}
                    </p>

                    <div className="grid grid-cols-3 gap-2 py-3 border-y border-neutral-200 text-center mb-5">
                      <div>
                        <div className="text-[10px] uppercase font-mono text-neutral-400">Công suất</div>
                        <div className="text-xs font-semibold text-nova-dark mt-0.5">{vehicle.specs.power.split('/')[0]}</div>
                      </div>
                      <div className="border-x border-neutral-200">
                        <div className="text-[10px] uppercase font-mono text-neutral-400">0-100 km/h</div>
                        <div className="text-xs font-semibold text-nova-dark mt-0.5">{vehicle.specs.acceleration.split(' ')[0]}s</div>
                      </div>
                      <div>
                        <div className="text-[10px] uppercase font-mono text-neutral-400">Vận hành</div>
                        <div className="text-xs font-semibold text-nova-dark mt-0.5">{vehicle.specs.topSpeed.split(' ')[0]} km/h</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="mb-4">
                      <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-mono block">
                        Giá khởi điểm
                      </span>
                      <span className="text-lg font-display font-medium text-nova-dark">
                        {vehicle.formattedPrice}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <Link
                        to={`/models/${vehicle.slug}`}
                        className="py-3 px-4 bg-nova-dark text-white text-xs uppercase tracking-widest font-medium text-center hover:bg-neutral-800 transition-colors flex items-center justify-center gap-1.5"
                      >
                        <span>Chi tiết</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>

                      <Link
                        to="/test-drive"
                        className="py-3 px-4 border border-neutral-300 text-neutral-800 text-xs uppercase tracking-widest font-medium text-center hover:border-black hover:text-black transition-colors"
                      >
                        Lái thử
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

