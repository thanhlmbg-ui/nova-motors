import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BatteryCharging, Leaf, Zap, ArrowUpRight, Gauge } from 'lucide-react';

export const ElectricShowcase: React.FC = () => {
  const [chargingSpeedKW, setChargingSpeedKW] = useState<number>(250);

  // Quick interactive calculator: calculate minutes needed for 200km based on kW
  const calcMinutes = (kw: number) => {
    if (kw >= 250) return 9;
    if (kw >= 150) return 16;
    if (kw >= 50) return 38;
    return 120;
  };

  return (
    <section className="py-24 bg-neutral-950 text-white relative overflow-hidden border-b border-white/10">
      {/* Sleek electric accent glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-nova-cobalt/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-nova-cobalt/30 border border-nova-cobalt/50 text-sky-300 text-[10px] font-mono tracking-widest uppercase">
            <Zap className="w-3 h-3 text-sky-400" />
            <span>NOVA E-Mobility Vision</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-light text-white tracking-tight">
            Bước vào kỷ nguyên di chuyển mới
          </h2>
          <p className="text-neutral-400 font-light text-sm sm:text-base leading-relaxed">
            Mẫu SUV thuần điện NOVA E9 mở ra chương mới trong lịch sử di chuyển hạng sang. Sự kết hợp giữa năng lượng điện sạch 800V, không gian khoang lái rộng mở và cam kết chuỗi cung ứng Net-Zero bền vững.
          </p>
        </div>

        {/* 3 Key Big Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-8 bg-white/[0.03] border border-white/10 hover:border-white/30 transition-colors">
            <div className="text-5xl sm:text-6xl font-display font-light text-white tracking-tight mb-2">
              620 <span className="text-2xl font-light text-neutral-400">km</span>
            </div>
            <div className="text-sm font-medium text-white mb-2">
              Tầm hoạt động tối đa
            </div>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              Thử nghiệm theo chuẩn quốc tế WLTP với bộ pin thông minh 102 kWh và hệ số cản gió cực thấp Cd 0.24.
            </p>
          </div>

          <div className="p-8 bg-white/[0.03] border border-white/10 hover:border-white/30 transition-colors">
            <div className="text-5xl sm:text-6xl font-display font-light text-white tracking-tight mb-2">
              20 <span className="text-2xl font-light text-neutral-400">phút</span>
            </div>
            <div className="text-sm font-medium text-white mb-2">
              Sạc nhanh từ 10% đến 80%
            </div>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              Nhờ kiến trúc điện áp cao 800V Ultra-Charge, công suất nạp đỉnh lên tới 250 kW tại trạm sạc DC.
            </p>
          </div>

          <div className="p-8 bg-white/[0.03] border border-white/10 hover:border-white/30 transition-colors">
            <div className="text-5xl sm:text-6xl font-display font-light text-white tracking-tight mb-2">
              100 <span className="text-2xl font-light text-neutral-400">%</span>
            </div>
            <div className="text-sm font-medium text-white mb-2">
              Không phát thải khi vận hành
            </div>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              Hệ thống tái tạo năng lượng phanh thông minh phục hồi đến 90% động năng khi giảm tốc trong đô thị.
            </p>
          </div>
        </div>

        {/* Vehicle Showcase Feature & Interactive Charging Simulator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white/[0.02] border border-white/10 p-8 sm:p-12">
          {/* Left car photo */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900 border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1600&q=85"
                alt="NOVA E9 Pure Electric SUV"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1.5 text-xs font-mono text-white">
                NOVA E9 Flagship Electric
              </div>
            </div>
          </div>

          {/* Right info & interactive charging calculator */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-400">
                Hiệu suất vượt bậc
              </span>
              <h3 className="text-2xl font-display font-light text-white mt-1">
                Sức mạnh thuần khiết 480 mã lực
              </h3>
              <p className="text-xs text-neutral-400 font-light mt-2 leading-relaxed">
                Động cơ điện đồng bộ kép mang lại khả năng tăng tốc tức thì từ 0 lên 100 km/h chỉ trong 3.8 giây trong sự yên tĩnh tuyệt đối.
              </p>
            </div>

            {/* Interactive charging slider */}
            <div className="p-4 bg-white/[0.04] border border-white/10 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-neutral-400 font-light flex items-center gap-1.5">
                  <BatteryCharging className="w-4 h-4 text-emerald-400" />
                  Mô phỏng sạc nhanh (Trạm DC):
                </span>
                <span className="font-mono text-white font-medium">{chargingSpeedKW} kW</span>
              </div>
              <div className="flex items-center gap-2">
                {[50, 150, 250].map((kw) => (
                  <button
                    key={kw}
                    onClick={() => setChargingSpeedKW(kw)}
                    className={`flex-1 py-1.5 text-xs font-mono border transition-colors ${
                      chargingSpeedKW === kw
                        ? 'bg-white text-nova-dark border-white font-semibold'
                        : 'bg-transparent text-neutral-400 border-white/20 hover:text-white'
                    }`}
                  >
                    {kw} kW
                  </button>
                ))}
              </div>
              <div className="pt-1 flex items-center justify-between text-xs border-t border-white/10">
                <span className="text-neutral-400">Thời gian nạp thêm 200 km:</span>
                <span className="font-mono text-emerald-400 font-bold">~ {calcMinutes(chargingSpeedKW)} phút</span>
              </div>
            </div>

            {/* Sustainability Badge */}
            <div className="flex items-start gap-3 text-xs text-neutral-400 font-light">
              <Leaf className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span>
                100% điện năng sử dụng trong quá trình lắp ráp xe tại nhà máy đến từ nguồn năng lượng mặt trời và gió tái sinh.
              </span>
            </div>

            {/* CTA */}
            <div className="pt-2 flex items-center gap-4">
              <Link
                to="/models/nova-e9"
                className="px-6 py-3.5 bg-white text-nova-dark text-xs uppercase tracking-widest font-medium hover:bg-neutral-200 transition-colors flex items-center gap-2"
              >
                <span>Chi tiết mẫu NOVA E9</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to="/test-drive"
                className="px-6 py-3.5 border border-white/30 text-white text-xs uppercase tracking-widest font-medium hover:bg-white/10 transition-colors"
              >
                Lái thử xe điện
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

