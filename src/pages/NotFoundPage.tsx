import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Compass } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  useEffect(() => {
    document.title = '404 — Không Tìm Thấy Trang | NOVA MOTORS';
  }, []);

  return (
    <div className="pt-32 pb-24 min-h-[75vh] flex flex-col items-center justify-center bg-white text-nova-dark px-6 text-center">
      <div className="w-16 h-16 rounded-full border border-neutral-300 flex items-center justify-center mb-6">
        <Compass className="w-8 h-8 text-neutral-400 stroke-[1.25]" />
      </div>

      <span className="text-[11px] uppercase font-mono tracking-[0.3em] text-neutral-400">
        Mã lỗi 404 &bull; Đường dẫn không tồn tại
      </span>

      <h1 className="text-5xl sm:text-7xl font-display font-light text-black tracking-tight mt-3 mb-4">
        Lạc Bước Trên Hành Trình
      </h1>

      <p className="text-sm text-neutral-500 font-light max-w-md mx-auto leading-relaxed mb-8">
        Trang quý khách đang tìm kiếm có thể đã được di dời hoặc không còn tồn tại trên hệ thống của NOVA MOTORS.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          to="/"
          className="px-8 py-3.5 bg-nova-dark text-white text-xs uppercase tracking-widest font-medium hover:bg-neutral-800 transition-colors flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Về trang chủ</span>
        </Link>
        <Link
          to="/models"
          className="px-8 py-3.5 border border-neutral-300 text-neutral-800 text-xs uppercase tracking-widest font-medium hover:border-black hover:text-black transition-colors"
        >
          Khám phá dòng xe
        </Link>
      </div>
    </div>
  );
};

