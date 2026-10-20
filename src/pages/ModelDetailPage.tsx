import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronRight, ArrowUpRight, Gauge, Zap, Check, Shield, Layers, Image as ImageIcon, X } from 'lucide-react';
import { VEHICLES, getVehicleBySlug } from '../data/vehicles';
import { ColorOption, InteriorOption } from '../types';

export const ModelDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const vehicle = getVehicleBySlug(slug || 'nova-x5');

  const [selectedColor, setSelectedColor] = useState<ColorOption | null>(null);
  const [selectedInterior, setSelectedInterior] = useState<InteriorOption | null>(null);
  const [activeTab, setActiveTab] = useState<'highlights' | 'specs' | 'gallery'>('highlights');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  useEffect(() => {
    if (vehicle) {
      document.title = `${vehicle.name} | ${vehicle.tagline} — NOVA MOTORS`;
      setSelectedColor(vehicle.colors[0]);
      setSelectedInterior(vehicle.interiors[0]);
      window.scrollTo(0, 0);
    }
  }, [slug, vehicle]);

  if (!vehicle) {
    return (
      <div className="pt-32 pb-24 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-3xl font-display font-light">Không tìm thấy mẫu xe</h2>
        <p className="text-neutral-500 mt-2 text-sm">Mẫu xe quý khách đang tìm kiếm không tồn tại hoặc đã ngừng sản xuất.</p>
        <Link to="/models" className="mt-6 px-6 py-3 bg-nova-dark text-white text-xs uppercase tracking-widest">
          Quay lại danh mục xe
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-20 bg-white text-nova-dark">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4">
        <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono">
          <Link to="/" className="hover:text-black transition-colors">Trang chủ</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/models" className="hover:text-black transition-colors">Dòng xe</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-black font-medium">{vehicle.name}</span>
        </div>
      </div>

      {/* Model Hero Banner */}
      <section className="relative bg-neutral-950 text-white overflow-hidden py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Vehicle Info */}
            <div className="lg:col-span-5 space-y-5">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-mono uppercase tracking-[0.3em] bg-white/10 px-3 py-1 text-nova-silver">
                  {vehicle.category} &bull; {vehicle.fuelType}
                </span>
                <span className="text-xs font-mono text-emerald-400">
                  {vehicle.status}
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-display font-light tracking-tight text-white">
                {vehicle.name}
              </h1>

              <p className="text-xl sm:text-2xl font-light text-neutral-300">
                {vehicle.tagline}
              </p>

              <p className="text-sm text-neutral-400 font-light leading-relaxed">
                {vehicle.longDescription}
              </p>

              <div className="pt-2">
                <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-mono block">
                  Giá niêm yết chính hãng
                </span>
                <span className="text-3xl font-display font-light text-white">
                  {vehicle.formattedPrice}
                </span>
                <span className="text-xs text-neutral-400 block mt-1">
                  Đã bao gồm thuế VAT & 5 năm bảo hành chính hãng
                </span>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  to="/test-drive"
                  className="px-8 py-4 bg-white text-nova-dark text-xs uppercase tracking-widest font-medium hover:bg-neutral-200 transition-colors flex items-center gap-2"
                >
                  <span>Đăng ký lái thử {vehicle.name}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/inventory"
                  className="px-8 py-4 border border-white/30 text-white text-xs uppercase tracking-widest font-medium hover:bg-white/10 transition-colors"
                >
                  Tìm xe có sẵn
                </Link>
              </div>
            </div>

            {/* Vehicle Hero Display */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900 border border-white/10 shadow-2xl">
                <img
                  src={selectedColor ? selectedColor.image : vehicle.heroImage}
                  alt={vehicle.name}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
                <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1.5 text-[11px] font-mono text-neutral-300">
                  Màu ngoại thất: {selectedColor?.name || 'Tiêu chuẩn'}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-white/10">
            <div>
              <div className="text-[11px] uppercase tracking-wider font-mono text-neutral-400">Công suất tối đa</div>
              <div className="text-2xl font-display font-light text-white mt-1">{vehicle.specs.power}</div>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wider font-mono text-neutral-400">Tăng tốc 0-100 km/h</div>
              <div className="text-2xl font-display font-light text-white mt-1">{vehicle.specs.acceleration}</div>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wider font-mono text-neutral-400">Hệ dẫn động</div>
              <div className="text-sm font-medium text-white mt-2 leading-tight">{vehicle.specs.drivetrain}</div>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wider font-mono text-neutral-400">
                {vehicle.specs.range ? 'Tầm hoạt động thuần điện' : 'Mức tiêu thụ nhiên liệu'}
              </div>
              <div className="text-2xl font-display font-light text-white mt-1">
                {vehicle.specs.range || vehicle.specs.fuelConsumption}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Color Customizer Section */}
      <section className="py-20 bg-neutral-100 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] uppercase tracking-[0.3em] font-mono text-neutral-500 block mb-2">
              Studio cá nhân hóa
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-light text-nova-dark">
              Tùy Chọn Màu Ngoại Thất & Nội Thất
            </h2>
            <p className="text-neutral-600 font-light text-xs sm:text-sm mt-2">
              Chạm vào các ô màu bên dưới để ngắm nhìn vẻ đẹp của {vehicle.name} dưới từng sắc thái hoàn thiện.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Color preview viewer */}
            <div className="lg:col-span-8">
              <div className="relative aspect-[16/10] bg-neutral-900 border border-neutral-300 shadow-xl overflow-hidden">
                <img
                  src={selectedColor ? selectedColor.image : vehicle.heroImage}
                  alt={selectedColor?.name || vehicle.name}
                  className="w-full h-full object-cover transition-all duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 text-xs font-mono text-black font-medium">
                  {selectedColor?.name}
                </div>
              </div>
            </div>

            {/* Color Controls */}
            <div className="lg:col-span-4 space-y-8 bg-white p-8 border border-neutral-200">
              <div>
                <h4 className="text-xs uppercase font-mono tracking-widest text-neutral-500 mb-4">
                  1. Màu sơn ngoại thất ({vehicle.colors.length} tùy chọn)
                </h4>
                <div className="flex flex-wrap gap-3">
                  {vehicle.colors.map((c) => {
                    const isSelected = selectedColor?.name === c.name;
                    return (
                      <button
                        key={c.name}
                        onClick={() => setSelectedColor(c)}
                        title={c.name}
                        className={`w-10 h-10 rounded-full border-2 transition-all p-0.5 focus:outline-none ${
                          isSelected ? 'border-nova-burgundy scale-110 shadow-md' : 'border-neutral-300 hover:border-neutral-500'
                        }`}
                      >
                        <span
                          className="block w-full h-full rounded-full"
                          style={{ backgroundColor: c.code }}
                        />
                      </button>
                    );
                  })}
                </div>
                {selectedColor && (
                  <div className="mt-4 p-3 bg-neutral-50 border border-neutral-200 text-xs">
                    <p className="font-medium text-nova-dark">{selectedColor.name}</p>
                    <p className="text-neutral-500 font-light mt-1">{selectedColor.description}</p>
                  </div>
                )}
              </div>

              <div className="border-t border-neutral-200 pt-6">
                <h4 className="text-xs uppercase font-mono tracking-widest text-neutral-500 mb-4">
                  2. Tùy chọn da & ốp nội thất
                </h4>
                <div className="space-y-3">
                  {vehicle.interiors.map((item) => {
                    const isSelected = selectedInterior?.name === item.name;
                    return (
                      <div
                        key={item.name}
                        onClick={() => setSelectedInterior(item)}
                        className={`p-3 border cursor-pointer transition-colors flex items-center justify-between text-xs ${
                          isSelected ? 'border-black bg-neutral-50 font-medium' : 'border-neutral-200 hover:border-neutral-400'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className="w-5 h-5 rounded-full border border-neutral-300 flex-shrink-0"
                            style={{ backgroundColor: item.leatherColor }}
                          />
                          <div>
                            <div>{item.name}</div>
                            <div className="text-[10px] text-neutral-400 font-light">{item.trim}</div>
                          </div>
                        </div>
                        {isSelected && <Check className="w-4 h-4 text-nova-burgundy" />}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Navigation Tabs (Highlights / Specs / Gallery) */}
      <section className="py-20 max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-center gap-8 border-b border-neutral-200 mb-14">
          <button
            onClick={() => setActiveTab('highlights')}
            className={`pb-4 text-xs uppercase tracking-widest font-mono font-medium transition-all relative ${
              activeTab === 'highlights' ? 'text-black' : 'text-neutral-400 hover:text-black'
            }`}
          >
            Tính năng nổi bật
            {activeTab === 'highlights' && <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-black" />}
          </button>

          <button
            onClick={() => setActiveTab('specs')}
            className={`pb-4 text-xs uppercase tracking-widest font-mono font-medium transition-all relative ${
              activeTab === 'specs' ? 'text-black' : 'text-neutral-400 hover:text-black'
            }`}
          >
            Thông số kỹ thuật
            {activeTab === 'specs' && <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-black" />}
          </button>

          <button
            onClick={() => setActiveTab('gallery')}
            className={`pb-4 text-xs uppercase tracking-widest font-mono font-medium transition-all relative ${
              activeTab === 'gallery' ? 'text-black' : 'text-neutral-400 hover:text-black'
            }`}
          >
            Thư viện hình ảnh ({vehicle.gallery.length})
            {activeTab === 'gallery' && <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-black" />}
          </button>
        </div>

        {/* Tab 1: Highlights */}
        {activeTab === 'highlights' && (
          <div className="space-y-16 animate-fade-in">
            {vehicle.highlights.map((h, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${
                  idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`lg:col-span-7 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900 border border-neutral-200 shadow-lg">
                    <img src={h.image} alt={h.title} className="w-full h-full object-cover" />
                  </div>
                </div>

                <div className={`lg:col-span-5 space-y-4 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-nova-burgundy bg-nova-burgundy/10 px-3 py-1">
                    {h.tag}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-light text-nova-dark">
                    {h.title}
                  </h3>
                  <p className="text-sm text-neutral-600 font-light leading-relaxed">
                    {h.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Full Specs Table */}
        {activeTab === 'specs' && (
          <div className="max-w-4xl mx-auto bg-neutral-50 border border-neutral-200 divide-y divide-neutral-200 text-xs animate-fade-in">
            <div className="p-6 bg-neutral-100 font-medium font-mono uppercase tracking-wider text-neutral-600">
              Bảng Thông Số Kỹ Thuật Chi Tiết — {vehicle.name}
            </div>
            {[
              { label: 'Công suất cực đại', value: vehicle.specs.power },
              { label: 'Mô-men xoắn cực đại', value: vehicle.specs.torque },
              { label: 'Khả năng tăng tốc (0 - 100 km/h)', value: vehicle.specs.acceleration },
              { label: 'Tốc độ tối đa', value: vehicle.specs.topSpeed },
              { label: 'Hệ dẫn động', value: vehicle.specs.drivetrain },
              { label: 'Hộp số', value: vehicle.specs.transmission },
              { label: 'Kích thước (Dài x Rộng x Cao)', value: vehicle.specs.dimensions },
              { label: 'Trọng lượng không tải', value: vehicle.specs.weight },
              { label: 'Dung tích khoang hành lý', value: vehicle.specs.bootSpace },
              vehicle.specs.fuelConsumption ? { label: 'Mức tiêu thụ nhiên liệu (Chuẩn hỗn hợp)', value: vehicle.specs.fuelConsumption } : null,
              vehicle.specs.range ? { label: 'Tầm hoạt động tối đa (Chuẩn WLTP)', value: vehicle.specs.range } : null,
              vehicle.specs.batteryCapacity ? { label: 'Dung lượng bộ pin', value: vehicle.specs.batteryCapacity } : null,
              vehicle.specs.chargingTime ? { label: 'Thời gian sạc nhanh DC', value: vehicle.specs.chargingTime } : null,
            ].filter(Boolean).map((row: any, i) => (
              <div key={i} className="grid grid-cols-2 p-4 hover:bg-neutral-100/60 transition-colors">
                <span className="text-neutral-500 font-light">{row.label}</span>
                <span className="font-medium text-nova-dark font-mono text-right sm:text-left">{row.value}</span>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Gallery Grid */}
        {activeTab === 'gallery' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in">
            {vehicle.gallery.map((img, i) => (
              <div
                key={i}
                onClick={() => setLightboxImage(img)}
                className="group relative aspect-[16/10] bg-neutral-900 cursor-pointer overflow-hidden border border-neutral-200 shadow-md"
              >
                <img
                  src={img}
                  alt={`${vehicle.name} gallery ${i + 1}`}
                  className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white gap-2">
                  <ImageIcon className="w-5 h-5" />
                  <span className="text-xs uppercase font-mono tracking-widest">Phóng to hình ảnh</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6 cursor-zoom-out animate-fade-in"
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 text-white p-2"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={lightboxImage}
            alt="Gallery preview"
            className="max-w-full max-h-[90vh] object-contain shadow-2xl"
          />
        </div>
      )}

      {/* Bottom Sticky Test Drive Action Banner */}
      <div className="bg-neutral-900 text-white py-12 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-display font-light text-white">
              Sẵn sàng trải nghiệm {vehicle.name}?
            </h3>
            <p className="text-xs text-neutral-400 font-light mt-1">
              Đăng ký lịch hẹn tại Showroom hoặc nhận xe lái thử tại nhà riêng của quý khách.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              to="/test-drive"
              className="px-8 py-3.5 bg-white text-nova-dark text-xs uppercase tracking-widest font-medium hover:bg-neutral-200 transition-colors shadow-lg"
            >
              Đăng ký lái thử
            </Link>
            <Link
              to="/inventory"
              className="px-8 py-3.5 border border-white/30 text-white text-xs uppercase tracking-widest font-medium hover:bg-white/10 transition-colors"
            >
              Xem xe giao ngay
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

