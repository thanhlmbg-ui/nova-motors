import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface HeroSlide {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  slug: string;
  price: string;
}

const SLIDES: HeroSlide[] = [
  {
    id: 'hero-x5',
    badge: 'Flagship Luxury SUV',
    title: 'NOVA X5',
    subtitle: 'Định nghĩa lại trải nghiệm SUV hạng sang',
    description: 'Công nghệ tiên tiến, thiết kế tinh tế và hiệu suất mạnh mẽ cho mọi hành trình.',
    image: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=2400&q=90',
    slug: 'nova-x5',
    price: 'Từ 2.199.000.000 VNĐ'
  },
  {
    id: 'hero-s7',
    badge: 'Executive Sports Sedan',
    title: 'NOVA S7',
    subtitle: 'Cảm hứng thể thao, tinh thần tiên phong',
    description: 'Ngôn ngữ khí động học chuẩn mực, đánh lái 4 bánh linh hoạt và cảm xúc lái thuần chất.',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=2400&q=90',
    slug: 'nova-s7',
    price: 'Từ 1.899.000.000 VNĐ'
  },
  {
    id: 'hero-e9',
    badge: 'Pure Electric Flagship',
    title: 'NOVA E9',
    subtitle: 'Kỷ nguyên di chuyển thuần điện đỉnh cao',
    description: 'Nền tảng sạc siêu tốc 800V, tầm vận hành 620 km và 100% không phát thải khi vận hành.',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=2400&q=90',
    slug: 'nova-e9',
    price: 'Từ 2.599.000.000 VNĐ'
  }
];

export const HeroCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Auto transition
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setTimeout(() => {
        setCurrent(prev => (prev + 1) % SLIDES.length);
      }, 7000);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, isPlaying]);

  const goToSlide = (index: number) => {
    setCurrent(index);
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  const nextSlide = () => {
    goToSlide((current + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    goToSlide((current - 1 + SLIDES.length) % SLIDES.length);
  };

  const activeSlide = SLIDES[current];

  return (
    <section className="relative w-full h-screen min-h-[700px] max-h-[1050px] overflow-hidden bg-black text-white">
      {/* Background Images with smooth fade & subtle zoom effect */}
      {SLIDES.map((slide, index) => {
        const isActive = index === current;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <div
              className={`w-full h-full bg-cover bg-center transition-transform duration-[8000ms] ease-out ${
                isActive ? 'scale-105' : 'scale-100'
              }`}
              style={{
                backgroundImage: `url('${slide.image}')`,
              }}
            />
            {/* Cinematic dark gradients to guarantee editorial legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          </div>
        );
      })}

      {/* Content overlay */}
      <div className="relative z-20 max-w-7xl mx-auto h-full px-6 sm:px-8 flex flex-col justify-end pb-24 md:pb-32">
        <div className="max-w-3xl space-y-5 animate-fade-in key={current}">
          {/* Badge & Model */}
          <div className="flex items-center gap-3">
            <span className="w-8 h-[1px] bg-nova-burgundy" />
            <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-nova-silver/90">
              {activeSlide.badge}
            </span>
            <span className="text-[11px] font-mono text-neutral-400">|</span>
            <span className="text-[11px] font-mono tracking-wider text-neutral-300">
              {activeSlide.price}
            </span>
          </div>

          {/* Large Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-light tracking-tight text-white leading-tight">
            {activeSlide.title}
          </h1>

          {/* Subtitle & Description */}
          <p className="text-xl sm:text-2xl font-light text-neutral-200">
            {activeSlide.subtitle}
          </p>
          <p className="text-sm sm:text-base text-neutral-400 font-light max-w-xl leading-relaxed">
            {activeSlide.description}
          </p>

          {/* Two Call to Actions */}
          <div className="pt-3 flex flex-wrap items-center gap-4">
            <Link
              to={`/models/${activeSlide.slug}`}
              className="px-8 py-4 bg-white text-nova-dark text-xs uppercase tracking-widest font-medium hover:bg-neutral-200 transition-all duration-300 flex items-center gap-2 group shadow-lg"
            >
              <span>Khám phá mẫu xe</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Link
              to="/test-drive"
              className="px-8 py-4 border border-white/40 text-white text-xs uppercase tracking-widest font-medium hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm"
            >
              Đăng ký lái thử
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Carousel Controls & Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-30">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Slide Indicator bars */}
          <div className="flex items-center gap-3">
            {SLIDES.map((slide, idx) => {
              const isActive = idx === current;
              return (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(idx)}
                  className="group flex flex-col items-start gap-1 focus:outline-none"
                  aria-label={`Chuyển tới slide ${slide.title}`}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[10px] font-mono tracking-widest transition-colors ${
                        isActive ? 'text-white font-semibold' : 'text-neutral-500 group-hover:text-neutral-300'
                      }`}
                    >
                      0{idx + 1}
                    </span>
                    <span
                      className={`hidden sm:inline text-[10px] uppercase tracking-wider transition-colors ${
                        isActive ? 'text-white' : 'text-neutral-500 group-hover:text-neutral-300'
                      }`}
                    >
                      {slide.title}
                    </span>
                  </div>
                  <div
                    className={`h-[2px] transition-all duration-500 ${
                      isActive ? 'w-16 sm:w-24 bg-white' : 'w-8 bg-white/20 group-hover:bg-white/40'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Navigation Controls: Arrows, Pause/Play */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2.5 text-neutral-400 hover:text-white transition-colors"
              aria-label={isPlaying ? 'Tạm dừng chuyển slide' : 'Tiếp tục chuyển slide'}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setIsMuted(!isMuted)}
              className="p-2.5 text-neutral-400 hover:text-white transition-colors"
              aria-label={isMuted ? 'Bật âm thanh hiệu ứng' : 'Tắt âm thanh'}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>

            <div className="w-[1px] h-4 bg-white/20 mx-1 hidden sm:block" />

            <button
              onClick={prevSlide}
              className="p-2.5 text-neutral-400 hover:text-white border border-white/10 hover:border-white/40 transition-colors"
              aria-label="Slide trước"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2.5 text-neutral-400 hover:text-white border border-white/10 hover:border-white/40 transition-colors"
              aria-label="Slide kế tiếp"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
