import React, { useState, useEffect } from 'react';
import { ShieldCheck, X } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('nova_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('nova_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('nova_cookie_consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:max-w-lg z-50 animate-slide-up">
      <div className="bg-nova-dark/95 backdrop-blur-md text-white p-6 border border-white/15 shadow-2xl relative">
        <button
          onClick={handleDecline}
          className="absolute top-4 right-4 text-neutral-400 hover:text-white"
          aria-label="Đóng thông báo cookie"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-start gap-3.5 pr-6">
          <ShieldCheck className="w-5 h-5 text-nova-silver flex-shrink-0 mt-0.5" />
          <div className="space-y-2">
            <h4 className="text-xs uppercase tracking-widest font-mono text-white">
              Chính sách Cookie & Trải nghiệm riêng tư
            </h4>
            <p className="text-xs text-neutral-300 font-light leading-relaxed">
              NOVA MOTORS sử dụng cookie nhằm cá nhân hóa nội dung số, cung cấp tính năng an toàn và phân tích lưu lượng truy cập nhằm nâng tầm trải nghiệm của quý khách.
            </p>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-end gap-3 pt-3 border-t border-white/10">
          <button
            onClick={handleDecline}
            className="px-4 py-2 text-xs uppercase tracking-wider text-neutral-400 hover:text-white transition-colors"
          >
            Từ chối
          </button>
          <button
            onClick={handleAccept}
            className="px-5 py-2 text-xs uppercase tracking-wider font-medium bg-white text-nova-dark hover:bg-neutral-200 transition-colors"
          >
            Chấp nhận tất cả
          </button>
        </div>
      </div>
    </div>
  );
};

