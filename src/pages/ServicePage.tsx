import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Wrench, Shield, Clock, PhoneCall, Check, ChevronDown, CheckCircle2, Loader2 } from 'lucide-react';
import { SERVICE_PACKAGES, SERVICE_FAQS } from '../data/services';
import { DEALERS } from '../data/dealers';

export const ServicePage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedPackage, setSelectedPackage] = useState<string>(SERVICE_PACKAGES[0].id);

  // Service form state
  const [licensePlate, setLicensePlate] = useState('');
  const [serviceType, setServiceType] = useState('Bảo dưỡng định kỳ');
  const [selectedDealer, setSelectedDealer] = useState(DEALERS[0].id);
  const [serviceDate, setServiceDate] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [ownerPhone, setOwnerPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  useEffect(() => {
    document.title = 'Dịch Vụ & Bảo Dưỡng Chính Hãng | NOVA MOTORS';
    window.scrollTo(0, 0);

    const tmr = new Date();
    tmr.setDate(tmr.getDate() + 1);
    setServiceDate(tmr.toISOString().split('T')[0]);
  }, []);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ownerName || !ownerPhone || !licensePlate) {
      alert('Vui lòng điền đầy đủ họ tên, số điện thoại và biển số xe.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setBookingSuccess(true);
    }, 1500);
  };

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen text-nova-dark">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4">
        <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono">
          <Link to="/" className="hover:text-black transition-colors">Trang chủ</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-black font-medium">Dịch vụ & Bảo dưỡng</span>
        </div>
      </div>

      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-8 border-b border-neutral-200">
        <span className="text-[11px] uppercase tracking-[0.3em] font-mono text-neutral-500 block mb-2">
          Dịch vụ kỹ thuật 5 sao
        </span>
        <h1 className="text-4xl sm:text-5xl font-display font-light text-nova-dark tracking-tight">
          Chăm Sóc & Bảo Dưỡng Chuyên Sâu
        </h1>
        <p className="text-sm sm:text-base text-neutral-600 font-light max-w-3xl mt-3 leading-relaxed">
          Đội ngũ kỹ thuật viên đạt chứng chỉ quốc tế cùng thiết bị chẩn đoán chuyên dụng, đảm bảo chiếc xe của quý khách luôn ở trạng thái vận hành hoàn hảo nhất.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 space-y-20">
        {/* Section 1: Service Booking Wizard */}
        <div className="bg-neutral-900 text-white p-8 sm:p-12 border border-neutral-800 shadow-2xl">
          <div className="max-w-3xl mb-8">
            <span className="text-[10px] font-mono uppercase tracking-widest text-nova-silver">
              Tiếp nhận xe ưu tiên
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-light text-white mt-1">
              Đặt Lịch Hẹn Dịch Vụ Trực Tuyến
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm font-light mt-2">
              Khách hàng đặt hẹn trước được ưu tiên tiếp nhận ngay lập tức, miễn phí kiểm tra 45 hạng mục an toàn và phòng chờ VIP Lounge riêng biệt.
            </p>
          </div>

          {bookingSuccess ? (
            <div className="p-8 bg-white/5 border border-emerald-500/30 text-center space-y-4 animate-fade-in">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
              <h3 className="text-xl font-display font-light text-white">
                Đặt hẹn dịch vụ thành công!
              </h3>
              <p className="text-xs text-neutral-300 font-light max-w-md mx-auto">
                Cố vấn dịch vụ tại xưởng sẽ liên hệ để chuẩn bị phụ tùng chính hãng và cầu nâng sẵn sàng phục vụ chiếc xe của quý khách (Biển số: {licensePlate}).
              </p>
              <button
                onClick={() => setBookingSuccess(false)}
                className="mt-4 px-6 py-2 bg-white text-nova-dark text-xs uppercase tracking-widest font-medium"
              >
                Đặt thêm lịch hẹn khác
              </button>
            </div>
          ) : (
            <form onSubmit={handleBookingSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
              <div>
                <label className="text-[10px] uppercase font-mono tracking-wider text-neutral-400 block mb-1.5">
                  Biển số xe ô tô *
                </label>
                <input
                  type="text"
                  value={licensePlate}
                  onChange={(e) => setLicensePlate(e.target.value)}
                  placeholder="Ví dụ: 30K-888.99 hoặc 51L-123.45"
                  required
                  className="w-full bg-white/5 border border-white/20 p-3 text-white focus:outline-none focus:border-white font-mono uppercase"
                />
              </div>

              <div>
                <label className="text-[10px] uppercase font-mono tracking-wider text-neutral-400 block mb-1.5">
                  Loại hình dịch vụ
                </label>
                <select
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  className="w-full bg-neutral-900 border border-white/20 p-3 text-white focus:outline-none focus:border-white"
                >
                  <option value="Bảo dưỡng định kỳ">Bảo dưỡng định kỳ tiêu chuẩn</option>
                  <option value="Sửa chữa chung & Chẩn đoán">Sửa chữa chung & Chẩn đoán điện tử</option>
                  <option value="Kiểm tra hệ thống pin EV">Kiểm tra pin & hệ thống sạc xe điện</option>
                  <option value="Đồng sơn & Thân vỏ">Đồng sơn & Phục hồi thân vỏ</option>
                  <option value="Lắp đặt phụ kiện chính hãng">Lắp đặt phụ kiện chính hãng</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] uppercase font-mono tracking-wider text-neutral-400 block mb-1.5">
                  Xưởng dịch vụ tiếp nhận
                </label>
                <select
                  value={selectedDealer}
                  onChange={(e) => setSelectedDealer(e.target.value)}
                  className="w-full bg-neutral-900 border border-white/20 p-3 text-white focus:outline-none focus:border-white"
                >
                  {DEALERS.map((d) => (
                    <option key={d.id} value={d.id}>
                      {d.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-[10px] uppercase font-mono tracking-wider text-neutral-400 block mb-1.5">
                  Ngày làm dịch vụ
                </label>
                <input
                  type="date"
                  value={serviceDate}
                  onChange={(e) => setServiceDate(e.target.value)}
                  className="w-full bg-white/5 border border-white/20 p-3 text-white focus:outline-none focus:border-white font-mono"
                />
              </div>

              <div>
                <label className="text-[10px] uppercase font-mono tracking-wider text-neutral-400 block mb-1.5">
                  Họ và tên chủ xe *
                </label>
                <input
                  type="text"
                  value={ownerName}
                  onChange={(e) => setOwnerName(e.target.value)}
                  placeholder="Nguyễn Văn A"
                  required
                  className="w-full bg-white/5 border border-white/20 p-3 text-white focus:outline-none focus:border-white"
                />
              </div>

              <div>
                <label className="text-[10px] uppercase font-mono tracking-wider text-neutral-400 block mb-1.5">
                  Số điện thoại liên hệ *
                </label>
                <input
                  type="tel"
                  value={ownerPhone}
                  onChange={(e) => setOwnerPhone(e.target.value)}
                  placeholder="0912 345 678"
                  required
                  className="w-full bg-white/5 border border-white/20 p-3 text-white focus:outline-none focus:border-white"
                />
              </div>

              <div className="md:col-span-3 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3.5 bg-white text-nova-dark text-xs uppercase tracking-widest font-medium hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Đang xác nhận lịch hẹn...</span>
                    </>
                  ) : (
                    <span>Xác nhận đặt lịch bảo dưỡng</span>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Section 2: Maintenance Packages */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] uppercase tracking-[0.3em] font-mono text-neutral-500 block mb-2">
              Tiêu chuẩn kỹ thuật
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-light text-nova-dark">
              Các Gói Bảo Dưỡng Định Kỳ
            </h2>
            <p className="text-neutral-600 font-light text-xs sm:text-sm mt-2">
              Minh bạch chi phí, sử dụng 100% dầu nhớt và phụ tùng cao cấp nhập khẩu trực tiếp.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICE_PACKAGES.map((pkg) => {
              const isSelected = selectedPackage === pkg.id;
              return (
                <div
                  key={pkg.id}
                  onClick={() => setSelectedPackage(pkg.id)}
                  className={`p-8 border flex flex-col justify-between cursor-pointer transition-all ${
                    isSelected
                      ? 'border-nova-dark bg-neutral-900 text-white shadow-xl scale-[1.02]'
                      : 'border-neutral-200 bg-neutral-50 hover:border-neutral-400 text-nova-dark'
                  }`}
                >
                  <div>
                    <span className={`text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 ${
                      isSelected ? 'bg-white/10 text-nova-silver' : 'bg-neutral-200 text-neutral-700'
                    }`}>
                      {pkg.interval}
                    </span>

                    <h3 className="text-xl font-display font-medium mt-4 mb-2">
                      {pkg.title}
                    </h3>
                    <p className={`text-xs font-light mb-6 leading-relaxed ${isSelected ? 'text-neutral-400' : 'text-neutral-600'}`}>
                      {pkg.description}
                    </p>

                    <div className="border-t border-b border-current/10 py-4 mb-6">
                      <span className={`text-[10px] uppercase font-mono tracking-widest block ${isSelected ? 'text-neutral-400' : 'text-neutral-500'}`}>
                        Chi phí ước tính
                      </span>
                      <span className="text-xl font-display font-medium">
                        {pkg.priceEstimated}
                      </span>
                    </div>

                    <ul className="space-y-2.5 text-xs font-light">
                      {pkg.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${isSelected ? 'text-nova-burgundy' : 'text-neutral-700'}`} />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-8">
                    <button
                      className={`w-full py-3 text-xs uppercase tracking-widest font-medium transition-colors ${
                        isSelected
                          ? 'bg-white text-nova-dark hover:bg-neutral-200'
                          : 'bg-nova-dark text-white hover:bg-neutral-800'
                      }`}
                    >
                      Chọn gói dịch vụ này
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 3: 24/7 Roadside Assistance Banner */}
        <div className="bg-neutral-100 border border-neutral-300 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 rounded-full bg-nova-burgundy text-white flex items-center justify-center flex-shrink-0">
              <PhoneCall className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-display font-medium text-nova-dark">
                NOVA Roadside Assistance — Cứu Hộ Khẩn Cấp 24/7
              </h4>
              <p className="text-xs text-neutral-600 font-light mt-1">
                Hỗ trợ kéo xe miễn phí về đại lý gần nhất, tiếp nhiên liệu khẩn cấp và cứu hộ pin trên toàn lãnh thổ Việt Nam.
              </p>
            </div>
          </div>
          <div className="text-right">
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block">
              Đường dây nóng VIP 24/7
            </span>
            <a href="tel:19008899" className="text-2xl font-display font-bold text-nova-burgundy hover:underline">
              1900 8899
            </a>
          </div>
        </div>

        {/* Section 4: FAQs */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[11px] uppercase tracking-[0.3em] font-mono text-neutral-500 block mb-2">
              Giải đáp thắc mắc
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-light text-nova-dark">
              Câu Hỏi Thường Gặp Về Dịch Vụ
            </h2>
          </div>

          <div className="max-w-3xl mx-auto divide-y divide-neutral-200 border-y border-neutral-200">
            {SERVICE_FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="py-5">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between text-left font-display font-medium text-base text-nova-dark focus:outline-none"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <p className="mt-3 text-xs sm:text-sm text-neutral-600 font-light leading-relaxed animate-fade-in">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

