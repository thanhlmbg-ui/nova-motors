import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, Cpu, Wifi, Sparkles, Zap, ArrowRight } from 'lucide-react';

interface TechItem {
  id: string;
  icon: any;
  title: string;
  tag: string;
  description: string;
  metrics: Array<{ label: string; value: string }>;
  image: string;
}

const TECH_ITEMS: TechItem[] = [
  {
    id: 'adas',
    icon: ShieldAlert,
    title: 'Hệ thống hỗ trợ lái tự hành NOVA Pilot IQ',
    tag: 'An toàn chủ động',
    description: 'Trang bị cụm cảm biến LiDAR 3D, 12 camera quan sát xung quanh và radar sóng milimet, tự động duy trì khoảng cách an toàn, hỗ trợ chuyển làn thông minh và phanh khẩn cấp thế hệ mới.',
    metrics: [
      { label: 'Tầm quét LiDAR', value: '250 m' },
      { label: 'Thời gian phản ứng', value: '15 ms' },
      { label: 'Cấp độ an toàn', value: 'Level 3 Ready' }
    ],
    image: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=1600&q=85'
  },
  {
    id: 'cockpit',
    icon: Cpu,
    title: 'Màn hình kỹ thuật số thế hệ mới NOVA Horizon',
    tag: 'Giao diện tương lai',
    description: 'Cụm màn hình cong OLED 27 inch độ phân giải 4K siêu sắc nét với kính cường lực chống chói Nano-Etched. Giao diện trực quan tích hợp trợ lý tiếng Việt AI thấu hiểu thói quen cá nhân.',
    metrics: [
      { label: 'Độ phân giải', value: '4K Ultra-HD' },
      { label: 'Tần số quét', value: '120 Hz' },
      { label: 'Kích thước hiển thị', value: '27 inch' }
    ],
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=85'
  },
  {
    id: 'connectivity',
    icon: Wifi,
    title: 'Kết nối thông minh & Cập nhật OTA liên tục',
    tag: 'Hệ sinh thái số',
    description: 'Ứng dụng NOVA Connect trên điện thoại thông minh cho phép khởi động điều hòa từ xa, chia sẻ khóa kỹ thuật số Digital Key và cập nhật toàn bộ phần mềm xe thông qua mạng không dây tốc độ cao.',
    metrics: [
      { label: 'Kết nối mạng', value: '5G Ultra-Fast' },
      { label: 'Khóa kỹ thuật số', value: 'UWB Smart Key' },
      { label: 'Cập nhật xe', value: '100% OTA' }
    ],
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=85'
  },
  {
    id: 'craftsmanship',
    icon: Sparkles,
    title: 'Nội thất thủ công & Không gian tĩnh lặng đỉnh cao',
    tag: 'Nghệ thuật chế tác',
    description: 'Mỗi chi tiết da Nappa khâu quả trám và ốp gỗ óc chó tự nhiên đều được tinh tuyển khắt khe. Hệ thống khử tiếng ồn chủ động tạo nên khoang lái tĩnh tại như một thánh đường âm thanh.',
    metrics: [
      { label: 'Giảm ồn khoang lái', value: '-8 dB' },
      { label: 'Thời gian may thủ công', value: '40+ Giờ' },
      { label: 'Chất lượng da', value: 'Semi-Aniline' }
    ],
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1600&q=85'
  },
  {
    id: 'ev-powertrain',
    icon: Zap,
    title: 'Hệ truyền động điện hiệu suất cao Dual-Motor',
    tag: 'Động lực học thuần khiết',
    description: 'Động cơ điện nam châm vĩnh cửu kép đồng bộ sản sinh mô-men xoắn tức thời 720 Nm. Hệ thống phân bổ lực kéo thông minh kiểm soát từng bánh xe độc lập theo từng phần nghìn giây.',
    metrics: [
      { label: 'Gia tốc 0-100', value: '3.8 giây' },
      { label: 'Mô-men xoắn tức thì', value: '720 Nm' },
      { label: 'Hiệu suất động cơ', value: '97.2%' }
    ],
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1600&q=85'
  }
];

export const TechExperience: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<TechItem>(TECH_ITEMS[0]);

  return (
    <section className="py-24 bg-nova-dark text-white relative overflow-hidden border-b border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-nova-burgundy/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-nova-cobalt/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-[11px] uppercase tracking-[0.3em] font-mono text-nova-silver/70">
            Kỹ nghệ & Tương lai
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-light text-white tracking-tight">
            Công nghệ tạo nên khác biệt
          </h2>
          <p className="text-neutral-400 font-light text-sm sm:text-base leading-relaxed">
            Sự hội tụ giữa kỹ thuật cơ khí chính xác và công nghệ điện toán trí tuệ nhân tạo, thiết lập chuẩn mực mới cho sự tiện nghi và an toàn tuyệt đối.
          </p>
        </div>

        {/* Interactive Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual display */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="relative aspect-[16/10] overflow-hidden border border-white/20 bg-neutral-900 group shadow-2xl">
              <img
                src={selectedTech.image}
                alt={selectedTech.title}
                key={selectedTech.id}
                className="w-full h-full object-cover transform transition-transform duration-700 ease-out animate-fade-in group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-nova-silver bg-white/10 px-3 py-1 backdrop-blur-md">
                    {selectedTech.tag}
                  </span>
                  <h4 className="text-xl font-display font-light text-white mt-2">
                    {selectedTech.title}
                  </h4>
                </div>
              </div>
            </div>

            {/* Key Metrics row */}
            <div className="grid grid-cols-3 gap-4 mt-6 p-6 bg-white/[0.03] border border-white/10">
              {selectedTech.metrics.map((m, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-xl sm:text-2xl font-display font-light text-white">
                    {m.value}
                  </div>
                  <div className="text-[10px] uppercase font-mono tracking-wider text-neutral-400 mt-1">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Tech Items List & Details */}
          <div className="lg:col-span-5 order-1 lg:order-2 space-y-3">
            {TECH_ITEMS.map((item) => {
              const isSelected = selectedTech.id === item.id;
              const IconComp = item.icon;
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedTech(item)}
                  className={`p-5 cursor-pointer border transition-all duration-300 ${
                    isSelected
                      ? 'bg-white/10 border-white text-white shadow-lg'
                      : 'bg-white/[0.02] border-white/10 text-neutral-400 hover:bg-white/[0.05] hover:text-white hover:border-white/25'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-2.5 rounded-none ${isSelected ? 'bg-nova-burgundy text-white' : 'bg-white/5 text-neutral-400'}`}>
                      <IconComp className="w-5 h-5 stroke-[1.5]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">
                          {item.tag}
                        </span>
                        {isSelected && (
                          <span className="w-2 h-2 rounded-full bg-nova-burgundy animate-pulse" />
                        )}
                      </div>
                      <h3 className="text-base font-medium text-white mt-1">
                        {item.title}
                      </h3>
                      {isSelected && (
                        <p className="text-xs text-neutral-300 font-light mt-3 leading-relaxed animate-fade-in">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="pt-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-3 text-xs uppercase tracking-widest text-white hover:text-nova-silver font-medium group"
              >
                <span>Tìm hiểu thêm về triết lý kỹ thuật NOVA</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

