import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-nova-dark text-white border-t border-white/10 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Top Newsletter & Brand Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full border border-white/60 flex items-center justify-center">
                <div className="w-2.5 h-2.5 bg-nova-burgundy rotate-45"></div>
              </div>
              <span className="font-display font-light text-xl tracking-[0.3em] uppercase">
                NOVA MOTORS
              </span>
            </div>
            <p className="text-sm text-neutral-400 font-light leading-relaxed max-w-md">
              Thương hiệu ô tô hạng sang tiên phong với ngôn ngữ thiết kế tối giản, công nghệ hỗ trợ lái thông minh và cam kết kiến tạo tương lai di chuyển thuần khiết không phát thải.
            </p>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-end">
            <h4 className="text-xs uppercase tracking-widest text-neutral-400 mb-3 font-mono">
              Bản tin độc quyền NOVA Private Circle
            </h4>
            <p className="text-sm text-neutral-300 font-light mb-4">
              Nhận thông tin ra mắt các phiên bản giới hạn, đặc quyền lái thử và thư mời tham dự các sự kiện thượng lưu.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 text-emerald-400 text-sm py-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Cảm ơn quý khách. Chúng tôi sẽ gửi thông tin cập nhật sớm nhất.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2 max-w-lg">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Nhập địa chỉ email của quý khách..."
                  required
                  className="bg-white/5 border border-white/20 text-white placeholder-neutral-500 px-4 py-3 text-sm focus:outline-none focus:border-white transition-colors flex-grow"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-white text-nova-dark text-xs uppercase tracking-widest font-medium hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2"
                >
                  <span>Đăng ký</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Multi-column Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 py-14 border-b border-white/10 text-xs">
          {/* Col 1: Các dòng xe */}
          <div className="space-y-4">
            <h5 className="uppercase tracking-widest text-neutral-300 font-mono font-medium">
              Các dòng xe
            </h5>
            <ul className="space-y-2.5 text-neutral-400 font-light">
              <li>
                <Link to="/models/nova-x5" className="hover:text-white transition-colors">
                  NOVA X5 (SUV Hạng Sang)
                </Link>
              </li>
              <li>
                <Link to="/models/nova-s7" className="hover:text-white transition-colors">
                  NOVA S7 (Sedan Thể Thao)
                </Link>
              </li>
              <li>
                <Link to="/models/nova-e9" className="hover:text-white transition-colors">
                  NOVA E9 (SUV Thuần Điện)
                </Link>
              </li>
              <li>
                <Link to="/models/nova-gt" className="hover:text-white transition-colors">
                  NOVA GT (Concept V8)
                </Link>
              </li>
              <li>
                <Link to="/models" className="text-white hover:underline underline-offset-4 pt-1 inline-block">
                  Xem tất cả mẫu xe &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Mua xe & Dịch vụ */}
          <div className="space-y-4">
            <h5 className="uppercase tracking-widest text-neutral-300 font-mono font-medium">
              Sở hữu xe
            </h5>
            <ul className="space-y-2.5 text-neutral-400 font-light">
              <li>
                <Link to="/inventory" className="hover:text-white transition-colors">
                  Xe có sẵn giao ngay
                </Link>
              </li>
              <li>
                <Link to="/test-drive" className="hover:text-white transition-colors">
                  Đăng ký lái thử
                </Link>
              </li>
              <li>
                <Link to="/service" className="hover:text-white transition-colors">
                  Đặt lịch bảo dưỡng
                </Link>
              </li>
              <li>
                <Link to="/service" className="hover:text-white transition-colors">
                  Gói dịch vụ cao cấp
                </Link>
              </li>
              <li>
                <a href="#customizer" className="hover:text-white transition-colors">
                  Phòng cá nhân hóa Bespoke
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Hệ thống Showroom */}
          <div className="space-y-4">
            <h5 className="uppercase tracking-widest text-neutral-300 font-mono font-medium">
              Đại lý chính hãng
            </h5>
            <ul className="space-y-2.5 text-neutral-400 font-light">
              <li>
                <Link to="/dealers" className="hover:text-white transition-colors">
                  TP. Hồ Chí Minh — Flagship Quận 1
                </Link>
              </li>
              <li>
                <Link to="/dealers" className="hover:text-white transition-colors">
                  Hà Nội — Flagship Ba Đình
                </Link>
              </li>
              <li>
                <Link to="/dealers" className="hover:text-white transition-colors">
                  Đà Nẵng — Showroom 2/9
                </Link>
              </li>
              <li>
                <Link to="/dealers" className="hover:text-white transition-colors">
                  Hải Phòng & Cần Thơ
                </Link>
              </li>
              <li>
                <Link to="/dealers" className="text-white hover:underline underline-offset-4 pt-1 inline-block">
                  Tìm showroom gần nhất &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Về NOVA MOTORS */}
          <div className="space-y-4">
            <h5 className="uppercase tracking-widest text-neutral-300 font-mono font-medium">
              Về thương hiệu
            </h5>
            <ul className="space-y-2.5 text-neutral-400 font-light">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  Câu chuyện thương hiệu
                </Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-white transition-colors">
                  Tin tức & Sự kiện
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  Triết lý thiết kế tối giản
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-white transition-colors">
                  Cơ hội nghề nghiệp
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  Cam kết phát triển bền vững
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Hotline & Kết nối */}
          <div className="space-y-4 col-span-2 md:col-span-4 lg:col-span-1">
            <h5 className="uppercase tracking-widest text-neutral-300 font-mono font-medium">
              Liên hệ
            </h5>
            <div className="space-y-2 text-neutral-400 font-light">
              <p className="text-white font-medium">Tổng đài CSKH VIP:</p>
              <p className="text-base font-light text-white font-mono">1900 8899</p>
              <p className="text-neutral-400">contact@novamotors.vn</p>
              <div className="pt-2 flex items-center gap-4 text-neutral-400">
                <a href="#social" className="hover:text-white transition-colors uppercase tracking-wider text-[11px]">
                  Facebook
                </a>
                <span className="text-neutral-700">|</span>
                <a href="#social" className="hover:text-white transition-colors uppercase tracking-wider text-[11px]">
                  Instagram
                </a>
                <span className="text-neutral-700">|</span>
                <a href="#social" className="hover:text-white transition-colors uppercase tracking-wider text-[11px]">
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-neutral-500 text-[11px] font-light">
          <div>
            &copy; {new Date().getFullYear()} NOVA MOTORS VIETNAM CO., LTD. Bảo lưu mọi quyền.
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <Link to="/privacy" className="hover:text-neutral-300 transition-colors">
              Chính sách bảo mật
            </Link>
            <Link to="/privacy" className="hover:text-neutral-300 transition-colors">
              Điều khoản sử dụng
            </Link>
            <Link to="/privacy" className="hover:text-neutral-300 transition-colors">
              Cài đặt Cookie
            </Link>
            <span>Giấy phép KD số 010889922 do Sở KHĐT TP.HCM cấp</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

