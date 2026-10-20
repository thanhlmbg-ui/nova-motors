import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ShieldCheck, Lock, FileText, Check } from 'lucide-react';

export const PrivacyPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Chính Sách Bảo Mật Dữ Liệu | NOVA MOTORS';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen text-nova-dark">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4">
        <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono">
          <Link to="/" className="hover:text-black transition-colors">Trang chủ</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-black font-medium">Chính sách bảo mật</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 sm:px-8 py-8">
        <div className="border-b border-neutral-200 pb-8 mb-10">
          <span className="text-[11px] uppercase tracking-[0.3em] font-mono text-neutral-500 block mb-2">
            Tuân thủ Nghị định 13/2023/NĐ-CP
          </span>
          <h1 className="text-4xl sm:text-5xl font-display font-light text-nova-dark tracking-tight">
            Chính Sách Bảo Vệ Dữ Liệu Cá Nhân
          </h1>
          <p className="text-xs text-neutral-500 font-mono mt-3">
            Ngày có hiệu lực: 01 Tháng 01, 2026 &bull; Bản cập nhật phiên bản 3.2
          </p>
        </div>

        <div className="space-y-10 text-sm font-light text-neutral-700 leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-display font-medium text-black flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-nova-burgundy" />
              1. Cam kết của NOVA MOTORS Việt Nam
            </h2>
            <p>
              NOVA MOTORS Vietnam Co., Ltd. (&ldquo;chúng tôi&rdquo;, &ldquo;NOVA MOTORS&rdquo;) tôn trọng và cam kết bảo vệ quyền riêng tư cùng dữ liệu cá nhân của quý khách hàng theo các tiêu chuẩn khắt khe nhất của pháp luật Việt Nam và chuẩn mực bảo mật toàn cầu ISO/IEC 27001.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl font-display font-medium text-black">
              2. Các loại dữ liệu cá nhân chúng tôi thu thập
            </h2>
            <p>
              Tùy thuộc vào phương thức tương tác của quý khách trên website, showroom hoặc ứng dụng NOVA Connect, chúng tôi có thể thu thập:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2 text-neutral-600">
              <li>Thông tin nhận diện cơ bản: Họ và tên, số điện thoại, địa chỉ email, tỉnh/thành phố cư trú.</li>
              <li>Thông tin xe & lái thử: Mẫu xe quan tâm, giấy phép lái xe ô tô, thời gian và địa điểm lái thử mong muốn.</li>
              <li>Thông tin kỹ thuật & viễn thông: Địa chỉ IP, trình duyệt web, thời gian truy cập thông qua cookies và các công nghệ phân tích tương tự.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl font-display font-medium text-black">
              3. Mục đích xử lý dữ liệu
            </h2>
            <p>
              Dữ liệu của quý khách chỉ được sử dụng cho các mục đích hợp pháp sau:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2 text-neutral-600">
              <li>Sắp xếp lịch lái thử xe tại showroom hoặc tại địa điểm yêu cầu.</li>
              <li>Gửi báo giá lăn bánh, thông tin khuyến mãi và thư mời sự kiện cá nhân hóa.</li>
              <li>Hỗ trợ kỹ thuật, đặt lịch bảo dưỡng định kỳ và dịch vụ cứu hộ khẩn cấp 24/7.</li>
              <li>Nâng cấp tính năng xe thông qua mạng OTA và cải tiến chất lượng dịch vụ.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl font-display font-medium text-black flex items-center gap-2">
              <Lock className="w-5 h-5 text-nova-burgundy" />
              4. Bảo đảm an ninh và lưu trữ dữ liệu
            </h2>
            <p>
              Mọi dữ liệu cá nhân được mã hóa đường truyền theo tiêu chuẩn TLS 1.3 và lưu trữ trên hệ thống máy chủ được bảo vệ bởi tường lửa đa lớp. Chúng tôi cam kết tuyệt đối không bán hoặc chuyển nhượng dữ liệu khách hàng cho bên thứ ba vì mục đích thương mại độc lập.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl font-display font-medium text-black">
              5. Quyền của chủ thể dữ liệu
            </h2>
            <p>
              Theo quy định của pháp luật, quý khách có đầy đủ các quyền:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2 text-neutral-600">
              <li>Quyền được biết và đồng ý về việc xử lý dữ liệu.</li>
              <li>Quyền truy cập để xem, chỉnh sửa hoặc yêu cầu cung cấp bản sao dữ liệu cá nhân.</li>
              <li>Quyền yêu cầu xóa hoặc rút lại sự đồng ý bất kỳ lúc nào bằng cách gửi yêu cầu tới email <span className="font-mono text-black font-medium">dpo@novamotors.vn</span>.</li>
            </ul>
          </section>

          {/* Contact */}
          <div className="p-6 bg-neutral-50 border border-neutral-200 mt-8 space-y-2">
            <h4 className="font-display font-medium text-black">Bộ phận Bảo vệ Dữ liệu Cá nhân (DPO)</h4>
            <p className="text-xs text-neutral-600">
              Toà nhà NOVA Tower, 29 Lê Duẩn, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh
            </p>
            <p className="text-xs font-mono text-neutral-700">
              Email: dpo@novamotors.vn &bull; Hotline: 1900 8899
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

