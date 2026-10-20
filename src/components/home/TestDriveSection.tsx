import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, Loader2, ArrowRight, ShieldCheck } from 'lucide-react';
import { VEHICLES } from '../../data/vehicles';
import { DEALERS } from '../../data/dealers';

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  city: string;
  model: string;
  dealer: string;
  agreePolicy: boolean;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  city?: string;
  model?: string;
  dealer?: string;
  agreePolicy?: string;
}

export const TestDriveSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phone: '',
    email: '',
    city: 'TP. Hồ Chí Minh',
    model: 'NOVA X5',
    dealer: 'NOVA MOTORS Flagship Lounge — TP. Hồ Chí Minh',
    agreePolicy: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const cities = ['TP. Hồ Chí Minh', 'Hà Nội', 'Đà Nẵng', 'Hải Phòng', 'Cần Thơ'];

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Vui lòng nhập họ và tên của quý khách.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Họ và tên cần có ít nhất 2 ký tự.';
    }

    const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Vui lòng nhập số điện thoại liên hệ.';
    } else if (!phoneRegex.test(formData.phone.replace(/\s+/g, ''))) {
      newErrors.phone = 'Số điện thoại không hợp lệ (Ví dụ: 0912 345 678).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Vui lòng nhập địa chỉ email.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Địa chỉ email không đúng định dạng.';
    }

    if (!formData.agreePolicy) {
      newErrors.agreePolicy = 'Quý khách vui lòng đồng ý với Chính sách bảo mật dữ liệu.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsLoading(true);

    // Simulated API call (1.5s delay)
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      // Reset form
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        city: 'TP. Hồ Chí Minh',
        model: 'NOVA X5',
        dealer: 'NOVA MOTORS Flagship Lounge — TP. Hồ Chí Minh',
        agreePolicy: false,
      });
    }, 1500);
  };

  return (
    <section className="py-24 bg-neutral-900 text-white relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-neutral-950 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial message */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[11px] uppercase tracking-[0.3em] font-mono text-nova-silver/80">
              Trải nghiệm độc quyền
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-light text-white tracking-tight leading-tight">
              Cảm nhận NOVA MOTORS trên mọi cung đường
            </h2>
            <p className="text-neutral-400 font-light text-sm sm:text-base leading-relaxed">
              Kính mời quý khách trực tiếp cầm lái và cảm nhận độ tĩnh lặng tuyệt đối, sức mạnh động cơ mượt mà cùng các tính năng hỗ trợ lái tiên tiến nhất.
            </p>

            <div className="space-y-4 pt-4 border-t border-white/10 text-xs text-neutral-300 font-light">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-nova-burgundy" />
                <span>Trải nghiệm riêng tư 1-kèm-1 cùng Chuyên viên Tư vấn cấp cao</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-nova-burgundy" />
                <span>Tùy chọn lộ trình lái thử: đô thị cao cấp hoặc cao tốc</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-nova-burgundy" />
                <span>Thưởng thức dịch vụ ẩm thực tại Private VIP Lounge</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-white/[0.03] border border-white/15 p-8 sm:p-10 backdrop-blur-md shadow-2xl">
            {isSuccess ? (
              <div className="py-12 text-center space-y-4 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-light text-white">
                  Đăng ký thành công!
                </h3>
                <p className="text-sm text-neutral-300 font-light max-w-md mx-auto leading-relaxed">
                  Cảm ơn quý khách đã tin tưởng NOVA MOTORS. Chuyên viên chăm sóc khách hàng VIP sẽ liên hệ trong vòng 30 phút để xác nhận thời gian và chuẩn bị xe lái thử chu đáo nhất.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-6 px-6 py-2.5 bg-white text-nova-dark text-xs uppercase tracking-widest font-medium hover:bg-neutral-200 transition-colors"
                >
                  Đăng ký thêm buổi lái thử khác
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div>
                    <label className="text-[11px] uppercase tracking-wider font-mono text-neutral-300 block mb-1.5">
                      Họ và tên *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Nguyễn Văn A"
                      className={`w-full bg-white/5 border ${
                        errors.fullName ? 'border-rose-500' : 'border-white/20'
                      } text-white px-4 py-3 text-sm focus:outline-none focus:border-white transition-colors`}
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="text-[11px] uppercase tracking-wider font-mono text-neutral-300 block mb-1.5">
                      Số điện thoại *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0912 345 678"
                      className={`w-full bg-white/5 border ${
                        errors.phone ? 'border-rose-500' : 'border-white/20'
                      } text-white px-4 py-3 text-sm focus:outline-none focus:border-white transition-colors`}
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="text-[11px] uppercase tracking-wider font-mono text-neutral-300 block mb-1.5">
                    Địa chỉ email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="nguyen.vana@example.com"
                    className={`w-full bg-white/5 border ${
                      errors.email ? 'border-rose-500' : 'border-white/20'
                    } text-white px-4 py-3 text-sm focus:outline-none focus:border-white transition-colors`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* City */}
                  <div>
                    <label className="text-[11px] uppercase tracking-wider font-mono text-neutral-300 block mb-1.5">
                      Tỉnh / Thành phố
                    </label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-neutral-900 border border-white/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-white"
                    >
                      {cities.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Vehicle Model */}
                  <div>
                    <label className="text-[11px] uppercase tracking-wider font-mono text-neutral-300 block mb-1.5">
                      Mẫu xe quan tâm
                    </label>
                    <select
                      value={formData.model}
                      onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                      className="w-full bg-neutral-900 border border-white/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-white"
                    >
                      {VEHICLES.map((vehicle) => (
                        <option key={vehicle.id} value={vehicle.name}>
                          {vehicle.name} ({vehicle.category})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Dealer Location */}
                <div>
                  <label className="text-[11px] uppercase tracking-wider font-mono text-neutral-300 block mb-1.5">
                    Đại lý mong muốn tiếp đón
                  </label>
                  <select
                    value={formData.dealer}
                    onChange={(e) => setFormData({ ...formData, dealer: e.target.value })}
                    className="w-full bg-neutral-900 border border-white/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-white"
                  >
                    {DEALERS.map((d) => (
                      <option key={d.id} value={d.name}>
                        {d.name} ({d.city})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Privacy policy agreement checkbox */}
                <div>
                  <label className="flex items-start gap-3 cursor-pointer pt-1">
                    <input
                      type="checkbox"
                      checked={formData.agreePolicy}
                      onChange={(e) => setFormData({ ...formData, agreePolicy: e.target.checked })}
                      className="mt-1 w-4 h-4 rounded-none bg-white/10 border-white/30 text-nova-burgundy focus:ring-0"
                    />
                    <span className="text-xs text-neutral-400 font-light leading-relaxed">
                      Tôi xác nhận đã đọc và đồng ý với{' '}
                      <span className="text-white underline">Chính sách bảo mật</span> của NOVA MOTORS, cho phép thương hiệu liên hệ tư vấn trải nghiệm sản phẩm.
                    </span>
                  </label>
                  {errors.agreePolicy && (
                    <p className="text-[11px] text-rose-400 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.agreePolicy}
                    </p>
                  )}
                </div>

                {/* Submit button with loading state */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-4 bg-white text-nova-dark text-xs uppercase tracking-widest font-medium hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed shadow-xl"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Đang xử lý thông tin...</span>
                      </>
                    ) : (
                      <>
                        <span>Đăng ký lái thử</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  <p className="text-[10px] text-neutral-500 font-mono text-center mt-3">
                    Bảo mật tuyệt đối thông tin khách hàng theo tiêu chuẩn ISO 27001
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

