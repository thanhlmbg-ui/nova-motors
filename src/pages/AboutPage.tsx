import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Sparkles, Shield, Compass, Leaf, Award, ArrowUpRight } from 'lucide-react';

export const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Về Chúng Tôi — Tầm Nhìn & Sứ Mệnh | NOVA MOTORS';
    window.scrollTo(0, 0);
  }, []);

  const pillars = [
    {
      icon: Sparkles,
      title: 'Thẩm mỹ Tối giản Đương đại',
      desc: 'Chúng tôi loại bỏ các chi tiết thừa thãi để tập trung vào sự hoàn mỹ của tỷ lệ thân xe, độ tinh xảo của bề mặt kim loại và ánh sáng tự nhiên.'
    },
    {
      icon: Compass,
      title: 'Kỹ nghệ Chính xác Đỉnh cao',
      desc: 'Từng mối ghép dung sai dưới 0.1 mm, hệ khung gầm khí động học và hệ thống treo thông minh mang đến cảm giác làm chủ tuyệt đối.'
    },
    {
      icon: Leaf,
      title: 'Cam kết Di chuyển Thuần khiết',
      desc: 'Chiến lược điện khí hóa toàn diện hướng tới mục tiêu trung hòa carbon Net-Zero, sử dụng 100% năng lượng tái tạo trong chế tác.'
    },
    {
      icon: Award,
      title: 'Trải nghiệm Khách hàng Độc bản',
      desc: 'Mỗi chủ nhân sở hữu xe NOVA MOTORS là một thành viên của NOVA Private Circle, với đặc quyền chăm sóc cá nhân hóa 24/7 không giới hạn.'
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen text-nova-dark">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4">
        <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono">
          <Link to="/" className="hover:text-black transition-colors">Trang chủ</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-black font-medium">Về thương hiệu</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-16 sm:py-24 bg-neutral-950 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-[11px] uppercase tracking-[0.3em] font-mono text-nova-silver">
              Di sản & Tương lai
            </span>
            <h1 className="text-4xl sm:text-6xl font-display font-light text-white tracking-tight leading-tight">
              Kiến Tạo Chuẩn Mực Mới Cho Xe Hạng Sang
            </h1>
            <p className="text-neutral-400 font-light text-sm sm:text-base leading-relaxed">
              NOVA MOTORS ra đời từ khát vọng định nghĩa lại trải nghiệm lái xe: không ồn ào phô trương, mà hướng đến sự thanh tao, trực giác và tĩnh tại tuyệt đối.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[11px] uppercase tracking-[0.3em] font-mono text-neutral-500">
              Triết lý thương hiệu
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-light text-black">
              &ldquo;Sự hoàn hảo không đến từ việc không còn gì để thêm vào, mà từ việc không còn gì để lược bớt.&rdquo;
            </h2>
            <p className="text-sm text-neutral-600 font-light leading-relaxed">
              Tại NOVA MOTORS, chúng tôi tin rằng sự xa xỉ đích thực không nằm ở những chi tiết mạ chrome hào nhoáng hay các đường gân phức tạp. Sang trọng hiện đại là sự tĩnh lặng trong khoang lái khi lướt đi trên xa lộ, là sự mượt mà khi ngón tay lướt trên mặt da Nappa tự nhiên, và là sự an tâm tuyệt đối với hệ thống an toàn hỗ trợ lái thông minh.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-neutral-200">
              <div>
                <h4 className="text-base font-display font-medium text-black">Tầm nhìn</h4>
                <p className="text-xs text-neutral-500 font-light mt-1">
                  Trở thành thương hiệu ô tô hạng sang tiên phong dẫn dắt kỷ nguyên di chuyển thông minh và bền vững tại khu vực Đông Nam Á.
                </p>
              </div>
              <div>
                <h4 className="text-base font-display font-medium text-black">Sứ mệnh</h4>
                <p className="text-xs text-neutral-500 font-light mt-1">
                  Kiến tạo những mẫu xe mang vẻ đẹp trường tồn cùng thời gian, kết nối cảm xúc người lái và gìn giữ hành tinh cho các thế hệ tương lai.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] bg-neutral-900 border border-neutral-300 overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=85"
                alt="NOVA Craftsmanship"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md px-3.5 py-1.5 text-xs font-mono text-white">
                Xưởng Chế Tác Thủ Công — Atelier Studio
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Brand Pillars */}
      <section className="py-20 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] uppercase tracking-[0.3em] font-mono text-neutral-500 block mb-2">
              Giá trị cốt lõi
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-light text-black">
              Bốn Trụ Cột Định Hình NOVA MOTORS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="p-8 bg-white border border-neutral-200 space-y-4">
                  <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-nova-burgundy">
                    <IconComp className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <h3 className="text-lg font-display font-medium text-black">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-600 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA to Explore Lineup */}
      <section className="py-20 max-w-7xl mx-auto px-6 sm:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-display font-light text-black mb-4">
          Khám Phá Dòng Xe Tương Lai Ngay Hôm Nay
        </h2>
        <p className="text-sm text-neutral-600 font-light max-w-xl mx-auto mb-8">
          Trải nghiệm thực tế các tuyệt tác SUV NOVA X5, Sedan S7 và xe điện thuần túy E9 tại các đại lý chính hãng.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link
            to="/models"
            className="px-8 py-3.5 bg-nova-dark text-white text-xs uppercase tracking-widest font-medium hover:bg-neutral-800 transition-colors"
          >
            Xem toàn bộ mẫu xe
          </Link>
          <Link
            to="/test-drive"
            className="px-8 py-3.5 border border-neutral-300 text-neutral-800 text-xs uppercase tracking-widest font-medium hover:border-black hover:text-black transition-colors"
          >
            Đăng ký lái thử
          </Link>
        </div>
      </section>
    </div>
  );
};

