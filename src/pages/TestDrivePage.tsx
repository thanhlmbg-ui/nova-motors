import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, CheckCircle2, AlertCircle, Loader2, Calendar, MapPin, Car, User, Clock } from 'lucide-react';
import { VEHICLES } from '../data/vehicles';
import { DEALERS } from '../data/dealers';

export const TestDrivePage: React.FC = () => {
  const [selectedVehicle, setSelectedVehicle] = useState(VEHICLES[0].id);
  const [selectedDealer, setSelectedDealer] = useState(DEALERS[0].id);
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('09:30');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [drivingLicense, setDrivingLicense] = useState(true);
  const [notes, setNotes] = useState('');
  const [agreePolicy, setAgreePolicy] = useState(false);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  useEffect(() => {
    document.title = 'Đăng Ký Lái Thử | NOVA MOTORS';
    window.scrollTo(0, 0);

    // Set default date to tomorrow
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setDate(tomorrow.toISOString().split('T')[0]);
  }, []);

  const timeSlots = [
    '09:00', '10:00', '11:00', '14:00', '15:30', '16:30', '18:00'
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) errs.fullName = 'Vui lòng nhập họ và tên.';
    const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
    if (!phone.trim()) errs.phone = 'Vui lòng nhập số điện thoại.';
    else if (!phoneRegex.test(phone.replace(/\s+/g, ''))) errs.phone = 'Số điện thoại không hợp lệ.';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) errs.email = 'Vui lòng nhập email.';
    else if (!emailRegex.test(email.trim())) errs.email = 'Email không hợp lệ.';

    if (!agreePolicy) errs.agreePolicy = 'Vui lòng chấp nhận chính sách bảo mật dữ liệu.';
    if (!drivingLicense) errs.drivingLicense = 'Quý khách cần có giấy phép lái xe ô tô hợp lệ.';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setBookingRef(`NOVA-TD-${Math.floor(100000 + Math.random() * 900000)}`);
      setIsSuccess(true);
    }, 1500);
  };

  const vehicleObj = VEHICLES.find(v => v.id === selectedVehicle) || VEHICLES[0];
  const dealerObj = DEALERS.find(d => d.id === selectedDealer) || DEALERS[0];

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen text-nova-dark">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4">
        <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono">
          <Link to="/" className="hover:text-black transition-colors">Trang chủ</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-black font-medium">Đăng ký lái thử</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-8">
        <div className="max-w-3xl mb-12">
          <span className="text-[11px] uppercase tracking-[0.3em] font-mono text-neutral-500 block mb-2">
            Đặc quyền thương hiệu
          </span>
          <h1 className="text-4xl sm:text-5xl font-display font-light text-nova-dark tracking-tight">
            Đăng Ký Lái Thử Xe NOVA MOTORS
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 font-light mt-3 leading-relaxed">
            Chọn mẫu xe yêu thích, địa điểm và thời gian tiện lợi nhất. Đội ngũ chuyên gia của chúng tôi sẽ chuẩn bị mẫu xe sạch tinh tươm cùng lộ trình lái thử chuyên biệt.
          </p>
        </div>

        {isSuccess ? (
          <div className="max-w-2xl mx-auto bg-neutral-50 border border-neutral-300 p-8 sm:p-12 text-center animate-fade-in shadow-xl">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <span className="text-[11px] uppercase tracking-widest font-mono text-emerald-700 font-semibold bg-emerald-50 px-3 py-1">
              Xác nhận thành công
            </span>

            <h2 className="text-3xl font-display font-light text-nova-dark mt-4">
              Lịch Hẹn Của Quý Khách Đã Được Tiếp Nhận
            </h2>

            <div className="my-8 p-6 bg-white border border-neutral-200 text-left space-y-3 text-xs">
              <div className="flex justify-between border-b pb-2">
                <span className="text-neutral-500 font-mono uppercase">Mã lịch hẹn:</span>
                <span className="font-mono font-bold text-black">{bookingRef}</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-neutral-500 font-mono uppercase">Mẫu xe:</span>
                <span className="font-semibold text-black">{vehicleObj.name} ({vehicleObj.category})</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-neutral-500 font-mono uppercase">Địa điểm:</span>
                <span className="text-right text-black font-medium">{dealerObj.name}</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-neutral-500 font-mono uppercase">Thời gian:</span>
                <span className="text-black font-mono">{timeSlot} ngày {date}</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-neutral-500 font-mono uppercase">Khách hàng:</span>
                <span className="text-black">{fullName} ({phone})</span>
              </div>
            </div>

            <p className="text-xs text-neutral-500 leading-relaxed mb-8">
              Chuyên viên tư vấn VIP sẽ gửi tin nhắn SMS xác nhận và liên hệ trước 2 giờ khi lịch hẹn diễn ra.
            </p>

            <Link
              to="/"
              className="inline-block px-8 py-3.5 bg-nova-dark text-white text-xs uppercase tracking-widest font-medium hover:bg-neutral-800 transition-colors"
            >
              Quay lại Trang chủ
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Steps */}
            <div className="lg:col-span-7 space-y-10">
              {/* Step 1: Vehicle selection */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-neutral-500">
                  <span className="w-5 h-5 rounded-full bg-nova-dark text-white flex items-center justify-center text-[10px]">1</span>
                  <span>Chọn mẫu xe trải nghiệm</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                  {VEHICLES.map((v) => {
                    const isSelected = selectedVehicle === v.id;
                    return (
                      <div
                        key={v.id}
                        onClick={() => setSelectedVehicle(v.id)}
                        className={`p-4 border cursor-pointer transition-all ${
                          isSelected
                            ? 'border-black bg-neutral-900 text-white shadow-lg'
                            : 'border-neutral-200 bg-white hover:border-neutral-400 text-neutral-800'
                        }`}
                      >
                        <div className="aspect-[16/10] overflow-hidden mb-3 bg-neutral-100">
                          <img src={v.thumbnailImage} alt={v.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex items-center justify-between">
                          <h4 className="font-display font-medium text-base">{v.name}</h4>
                          <span className={`text-[10px] font-mono uppercase ${isSelected ? 'text-neutral-300' : 'text-neutral-500'}`}>
                            {v.category}
                          </span>
                        </div>
                        <p className={`text-[11px] mt-1 font-mono ${isSelected ? 'text-neutral-400' : 'text-neutral-500'}`}>
                          {v.formattedPrice}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Showroom & Time */}
              <div className="space-y-4 pt-6 border-t border-neutral-200">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-neutral-500">
                  <span className="w-5 h-5 rounded-full bg-nova-dark text-white flex items-center justify-center text-[10px]">2</span>
                  <span>Chọn địa điểm & thời gian</span>
                </div>

                <div>
                  <label className="text-xs uppercase font-mono tracking-wider text-neutral-600 block mb-2">
                    Showroom tiếp đón
                  </label>
                  <select
                    value={selectedDealer}
                    onChange={(e) => setSelectedDealer(e.target.value)}
                    className="w-full bg-white border border-neutral-300 p-3 text-xs focus:outline-none focus:border-black rounded-none"
                  >
                    {DEALERS.map((d) => (
                      <option key={d.id} value={d.id}>
                        {d.name} — ({d.address})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase font-mono tracking-wider text-neutral-600 block mb-2">
                      Ngày lái thử
                    </label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-white border border-neutral-300 p-3 text-xs focus:outline-none focus:border-black rounded-none font-mono"
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase font-mono tracking-wider text-neutral-600 block mb-2">
                      Khung giờ tiếp đón
                    </label>
                    <select
                      value={timeSlot}
                      onChange={(e) => setTimeSlot(e.target.value)}
                      className="w-full bg-white border border-neutral-300 p-3 text-xs focus:outline-none focus:border-black rounded-none font-mono"
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Step 3: Personal Info */}
              <div className="space-y-4 pt-6 border-t border-neutral-200">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-neutral-500">
                  <span className="w-5 h-5 rounded-full bg-nova-dark text-white flex items-center justify-center text-[10px]">3</span>
                  <span>Thông tin liên hệ của quý khách</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-neutral-600 block mb-1">
                      Họ và tên *
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Nguyễn Văn A"
                      className="w-full bg-white border border-neutral-300 p-3 text-xs focus:outline-none focus:border-black"
                    />
                    {errors.fullName && <p className="text-[11px] text-rose-500 mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-neutral-600 block mb-1">
                      Số điện thoại *
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="0912 345 678"
                      className="w-full bg-white border border-neutral-300 p-3 text-xs focus:outline-none focus:border-black"
                    />
                    {errors.phone && <p className="text-[11px] text-rose-500 mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-neutral-600 block mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nguyen.vana@example.com"
                    className="w-full bg-white border border-neutral-300 p-3 text-xs focus:outline-none focus:border-black"
                  />
                  {errors.email && <p className="text-[11px] text-rose-500 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-neutral-600 block mb-1">
                    Ghi chú hoặc yêu cầu đặc biệt
                  </label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Quý khách có nhu cầu thử tính năng hỗ trợ lái hoặc đưa gia đình cùng trải nghiệm?"
                    className="w-full bg-white border border-neutral-300 p-3 text-xs focus:outline-none focus:border-black resize-none"
                  />
                </div>

                {/* Checkboxes */}
                <div className="space-y-3 pt-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={drivingLicense}
                      onChange={(e) => setDrivingLicense(e.target.checked)}
                      className="w-4 h-4 accent-nova-dark"
                    />
                    <span className="text-xs text-neutral-700">
                      Tôi xác nhận đã có Giấy phép lái xe ô tô hạng B1/B2 còn hiệu lực tại Việt Nam.
                    </span>
                  </label>
                  {errors.drivingLicense && <p className="text-[11px] text-rose-500">{errors.drivingLicense}</p>}

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={agreePolicy}
                      onChange={(e) => setAgreePolicy(e.target.checked)}
                      className="w-4 h-4 accent-nova-dark"
                    />
                    <span className="text-xs text-neutral-700">
                      Tôi đồng ý với chính sách xử lý dữ liệu cá nhân của NOVA MOTORS.
                    </span>
                  </label>
                  {errors.agreePolicy && <p className="text-[11px] text-rose-500">{errors.agreePolicy}</p>}
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 bg-nova-dark text-white text-xs uppercase tracking-widest font-medium hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Đang hoàn tất đăng ký...</span>
                  </>
                ) : (
                  <span>Xác nhận đăng ký lái thử</span>
                )}
              </button>
            </div>

            {/* Right Summary Card */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 bg-neutral-50 border border-neutral-300 p-6 space-y-6">
                <h3 className="text-sm uppercase font-mono tracking-wider font-semibold text-neutral-800 border-b pb-3">
                  Tóm tắt lịch hẹn
                </h3>

                <div className="aspect-[16/10] overflow-hidden bg-neutral-900 border">
                  <img src={vehicleObj.thumbnailImage} alt={vehicleObj.name} className="w-full h-full object-cover" />
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <span className="text-neutral-400 font-mono uppercase block text-[10px]">Xe đăng ký</span>
                    <span className="text-base font-display font-medium text-black">{vehicleObj.name}</span>
                    <span className="text-neutral-500 block">{vehicleObj.tagline}</span>
                  </div>

                  <div className="pt-2 border-t border-neutral-200">
                    <span className="text-neutral-400 font-mono uppercase block text-[10px]">Showroom tiếp đón</span>
                    <span className="font-medium text-black block">{dealerObj.name}</span>
                    <span className="text-neutral-500 text-[11px]">{dealerObj.address}</span>
                  </div>

                  <div className="pt-2 border-t border-neutral-200">
                    <span className="text-neutral-400 font-mono uppercase block text-[10px]">Thời gian dự kiến</span>
                    <span className="font-mono font-medium text-black">{timeSlot} &bull; Ngày {date}</span>
                  </div>
                </div>

                <div className="p-4 bg-white border border-neutral-200 text-xs text-neutral-500 space-y-1">
                  <p className="font-medium text-black">Quyền lợi khách hàng:</p>
                  <p>&bull; Nước uống & bánh ngọt cao cấp</p>
                  <p>&bull; Hướng dẫn viên kỹ thuật đồng hành</p>
                  <p>&bull; Bảo hiểm tai nạn trọn vẹn trong suốt hành trình</p>
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

