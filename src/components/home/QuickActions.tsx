import React from 'react';
import { Link } from 'react-router-dom';
import { Gauge, Warehouse, CalendarClock, MapPin, MessageSquareText, ArrowRight } from 'lucide-react';

export const QuickActions: React.FC = () => {
  const actions = [
    {
      icon: Gauge,
      title: 'Đăng ký lái thử',
      desc: 'Trải nghiệm thực tế cảm giác lái đẳng cấp',
      path: '/test-drive',
      accent: 'group-hover:border-white'
    },
    {
      icon: Warehouse,
      title: 'Tìm xe có sẵn',
      desc: 'Danh mục xe giao ngay tại hệ thống showroom',
      path: '/inventory',
      accent: 'group-hover:border-white'
    },
    {
      icon: CalendarClock,
      title: 'Đặt lịch dịch vụ',
      desc: 'Bảo dưỡng định kỳ chuẩn 5 sao chính hãng',
      path: '/service',
      accent: 'group-hover:border-white'
    },
    {
      icon: MapPin,
      title: 'Tìm đại lý',
      desc: 'Hệ thống Flagship & Service Center',
      path: '/dealers',
      accent: 'group-hover:border-white'
    },
    {
      icon: MessageSquareText,
      title: 'Liên hệ tư vấn',
      desc: 'Tư vấn viên Bespoke trực tiếp 24/7',
      path: '/test-drive',
      accent: 'group-hover:border-white'
    }
  ];

  return (
    <section className="relative z-30 bg-nova-dark border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {actions.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Link
                key={index}
                to={item.path}
                className="group relative p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:bg-white/[0.04]"
              >
                {/* Subtle top indicator bar on hover */}
                <span className="absolute top-0 left-0 right-0 h-[2px] bg-nova-burgundy scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div>
                  <div className="w-10 h-10 mb-4 flex items-center justify-center text-neutral-300 group-hover:text-white transition-colors">
                    <IconComponent className="w-6 h-6 stroke-[1.25]" />
                  </div>
                  <h3 className="text-sm font-medium text-white tracking-wide mb-1.5 flex items-center gap-1.5">
                    <span>{item.title}</span>
                  </h3>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-neutral-400 group-hover:text-white transition-colors font-mono">
                  <span>Khám phá</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

