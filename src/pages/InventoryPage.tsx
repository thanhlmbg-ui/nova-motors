import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Search, SlidersHorizontal, CheckCircle2, Clock, Car, ArrowUpRight } from 'lucide-react';
import { INVENTORY_ITEMS } from '../data/inventory';
import { VEHICLES } from '../data/vehicles';

export const InventoryPage: React.FC = () => {
  const [modelFilter, setModelFilter] = useState('Tất cả');
  const [locationFilter, setLocationFilter] = useState('Tất cả');
  const [statusFilter, setStatusFilter] = useState('Tất cả');
  const [searchVin, setSearchVin] = useState('');
  const [reservedVin, setReservedVin] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'Xe Có Sẵn Giao Ngay | Kho Xe NOVA MOTORS';
    window.scrollTo(0, 0);
  }, []);

  const filteredItems = INVENTORY_ITEMS.filter(item => {
    const matchesModel = modelFilter === 'Tất cả' || item.modelSlug === modelFilter;
    const matchesLocation = locationFilter === 'Tất cả' || item.location.includes(locationFilter);
    const matchesStatus = statusFilter === 'Tất cả' || item.status === statusFilter;
    const matchesSearch =
      item.vin.toLowerCase().includes(searchVin.toLowerCase()) ||
      item.modelName.toLowerCase().includes(searchVin.toLowerCase()) ||
      item.exteriorColor.toLowerCase().includes(searchVin.toLowerCase());
    return matchesModel && matchesLocation && matchesStatus && matchesSearch;
  });

  const handleReserve = (vin: string) => {
    setReservedVin(vin);
    setTimeout(() => setReservedVin(null), 4000);
  };

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen text-nova-dark">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4">
        <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono">
          <Link to="/" className="hover:text-black transition-colors">Trang chủ</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-black font-medium">Xe có sẵn giao ngay</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-8 border-b border-neutral-200">
        <span className="text-[11px] uppercase tracking-[0.3em] font-mono text-neutral-500 block mb-2">
          Kho xe chính hãng toàn quốc
        </span>
        <h1 className="text-4xl sm:text-5xl font-display font-light text-nova-dark tracking-tight">
          Danh Mục Xe Có Sẵn Giao Ngay
        </h1>
        <p className="text-sm sm:text-base text-neutral-600 font-light max-w-3xl mt-3 leading-relaxed">
          Tất cả xe trong danh mục đều đã hoàn tất thủ tục hải quan và kiểm định chất lượng nghiêm ngặt, sẵn sàng bàn giao cho chủ nhân trong vòng 24 - 48 giờ.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-8">
        <div className="bg-neutral-50 border border-neutral-200 p-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search by VIN or model */}
            <div>
              <label className="text-[10px] uppercase font-mono tracking-wider text-neutral-500 block mb-1">
                Tìm kiếm số VIN hoặc màu sắc
              </label>
              <div className="relative">
                <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-3" />
                <input
                  type="text"
                  value={searchVin}
                  onChange={(e) => setSearchVin(e.target.value)}
                  placeholder="Nhập số VIN hoặc màu..."
                  className="w-full bg-white border border-neutral-300 text-xs pl-9 pr-3 py-2.5 focus:outline-none focus:border-black rounded-none"
                />
              </div>
            </div>

            {/* Model filter */}
            <div>
              <label className="text-[10px] uppercase font-mono tracking-wider text-neutral-500 block mb-1">
                Dòng xe
              </label>
              <select
                value={modelFilter}
                onChange={(e) => setModelFilter(e.target.value)}
                className="w-full bg-white border border-neutral-300 text-xs px-3 py-2.5 focus:outline-none focus:border-black rounded-none"
              >
                <option value="Tất cả">Tất cả các dòng xe</option>
                <option value="nova-x5">NOVA X5 (SUV)</option>
                <option value="nova-s7">NOVA S7 (Sedan)</option>
                <option value="nova-e9">NOVA E9 (Điện)</option>
                <option value="nova-gt">NOVA GT Concept</option>
              </select>
            </div>

            {/* Location filter */}
            <div>
              <label className="text-[10px] uppercase font-mono tracking-wider text-neutral-500 block mb-1">
                Địa điểm trưng bày
              </label>
              <select
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="w-full bg-white border border-neutral-300 text-xs px-3 py-2.5 focus:outline-none focus:border-black rounded-none"
              >
                <option value="Tất cả">Tất cả các Showroom</option>
                <option value="Hồ Chí Minh">TP. Hồ Chí Minh</option>
                <option value="Hà Nội">Hà Nội</option>
                <option value="Đà Nẵng">Đà Nẵng</option>
              </select>
            </div>

            {/* Status filter */}
            <div>
              <label className="text-[10px] uppercase font-mono tracking-wider text-neutral-500 block mb-1">
                Tình trạng giao xe
              </label>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full bg-white border border-neutral-300 text-xs px-3 py-2.5 focus:outline-none focus:border-black rounded-none"
              >
                <option value="Tất cả">Tất cả tình trạng</option>
                <option value="Có sẵn giao ngay">Có sẵn giao ngay</option>
                <option value="Đang vận chuyển">Đang vận chuyển</option>
                <option value="Xe trưng bày">Xe trưng bày</option>
              </select>
            </div>
          </div>
        </div>

        {/* Counter */}
        <div className="py-6 flex items-center justify-between text-xs text-neutral-500 font-mono">
          <span>Tìm thấy {filteredItems.length} xe trong hệ thống</span>
          {(modelFilter !== 'Tất cả' || locationFilter !== 'Tất cả' || statusFilter !== 'Tất cả' || searchVin) && (
            <button
              onClick={() => {
                setModelFilter('Tất cả');
                setLocationFilter('Tất cả');
                setStatusFilter('Tất cả');
                setSearchVin('');
              }}
              className="text-black underline underline-offset-4"
            >
              Đặt lại bộ lọc
            </button>
          )}
        </div>

        {/* Inventory Cards */}
        {filteredItems.length === 0 ? (
          <div className="py-20 text-center bg-neutral-50 border border-neutral-200">
            <h3 className="text-xl font-display font-light text-neutral-800">
              Không tìm thấy xe phù hợp trong kho hiện tại
            </h3>
            <p className="text-xs text-neutral-500 mt-2">
              Quý khách có thể liên hệ hotline 1900 8899 để chuyên viên đặt hàng cấu hình xe riêng.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-neutral-50 border border-neutral-200 hover:border-neutral-400 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Photo & Status */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                    <img src={item.image} alt={item.modelName} className="w-full h-full object-cover" />
                    <div className="absolute top-3 left-3">
                      <span
                        className={`text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 ${
                          item.status === 'Có sẵn giao ngay'
                            ? 'bg-emerald-600 text-white'
                            : item.status === 'Đang vận chuyển'
                            ? 'bg-amber-600 text-white'
                            : 'bg-neutral-800 text-white'
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-mono text-neutral-300">
                      VIN: {item.vin}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <div className="flex items-baseline justify-between mb-1">
                      <h3 className="text-xl font-display font-medium text-black">
                        {item.modelName}
                      </h3>
                    </div>
                    <p className="text-xs text-neutral-500 font-mono mb-4">
                      Phiên bản: {item.trim} &bull; Năm SX: {item.manufactureYear}
                    </p>

                    <div className="space-y-2 text-xs border-t border-b border-neutral-200 py-3 mb-4">
                      <div className="flex justify-between">
                        <span className="text-neutral-500">Màu sơn:</span>
                        <span className="font-medium text-black">{item.exteriorColor}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-500">Nội thất:</span>
                        <span className="font-medium text-black">{item.interiorColor}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-500">Hiện đang ở:</span>
                        <span className="font-medium text-black text-right">{item.location}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-500">Odo hiện tại:</span>
                        <span className="font-mono text-black">{item.mileage}</span>
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-400 block">
                        Giá niêm yết
                      </span>
                      <span className="text-xl font-display font-medium text-nova-dark">
                        {item.priceVND.toLocaleString('vi-VN')} VNĐ
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 space-y-2">
                  {reservedVin === item.vin ? (
                    <div className="py-3 bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs text-center font-medium flex items-center justify-center gap-1.5 animate-fade-in">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Đã gửi yêu cầu giữ xe! Chuyên viên sẽ gọi lại ngay.</span>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleReserve(item.vin)}
                      className="w-full py-3 bg-nova-dark text-white text-xs uppercase tracking-widest font-medium hover:bg-neutral-800 transition-colors"
                    >
                      Yêu cầu báo giá lăn bánh & giữ xe
                    </button>
                  )}

                  <Link
                    to={`/models/${item.modelSlug}`}
                    className="w-full py-2.5 border border-neutral-300 text-neutral-700 text-xs uppercase tracking-widest font-medium hover:border-black hover:text-black transition-colors block text-center"
                  >
                    Xem chi tiết thông số mẫu xe
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

