import { ServicePackage } from '../types';

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: 'pkg-essential',
    title: 'Gói Bảo Dưỡng NOVA Essential Care',
    description: 'Chăm sóc định kỳ tiêu chuẩn giúp xe luôn vận hành êm ái và chuẩn xác nhất.',
    interval: 'Mỗi 10.000 km hoặc 12 tháng',
    priceEstimated: 'Từ 3.500.000 VNĐ',
    features: [
      'Thay dầu động cơ tổng hợp toàn phần chính hãng & lọc dầu',
      'Kiểm tra toàn diện 45 hạng mục an toàn NOVA Multi-Point Check',
      'Kiểm tra hệ thống phanh, lốp xe và cân bằng động',
      'Chẩn đoán phần mềm điện tử và cập nhật ECU mới nhất',
      'Vệ sinh khoang động cơ và rửa xe cao cấp tiêu chuẩn'
    ]
  },
  {
    id: 'pkg-comprehensive',
    title: 'Gói Bảo Dưỡng Toàn Diện NOVA Prestige Care',
    description: 'Giải pháp chăm sóc chuyên sâu toàn bộ hệ thống động lực, khung gầm và hệ thống điện tử.',
    interval: 'Mỗi 30.000 km hoặc 24 tháng',
    priceEstimated: 'Từ 8.900.000 VNĐ',
    features: [
      'Bao gồm toàn bộ quyền lợi gói Essential Care',
      'Thay lọc gió động cơ, lọc gió cabin kháng khuẩn nano',
      'Thay dầu phanh chuyên dụng và vệ sinh hệ thống phanh 4 bánh',
      'Căn chỉnh góc đặt bánh xe 3D điện tử độ chính xác cao',
      'Kiểm tra và hiệu chỉnh hệ thống radar/camera hỗ trợ lái ADAS',
      'Bảo dưỡng và vệ sinh hệ thống điều hòa khí hậu ion âm'
    ]
  },
  {
    id: 'pkg-ev',
    title: 'Gói Chuyên Biệt Xe Điện NOVA Electric Shield',
    description: 'Quy trình kiểm tra hệ thống pin cao áp 800V và động cơ điện bởi kỹ thuật viên chứng chỉ quốc tế.',
    interval: 'Mỗi 20.000 km hoặc 12 tháng',
    priceEstimated: 'Từ 2.900.000 VNĐ',
    features: [
      'Kiểm định dung lượng tế bào pin (State of Health - SOH)',
      'Kiểm tra hệ thống tản nhiệt chất lỏng làm mát pin & Inverter',
      'Kiểm tra độ cách điện cao áp đạt chuẩn an toàn quốc tế UN ECE R100',
      'Cập nhật firmware quản trị năng lượng BMS thế hệ mới',
      'Kiểm tra hệ thống phanh tái sinh Regenerative Braking'
    ]
  }
];

export const SERVICE_FAQS = [
  {
    question: 'Chính sách bảo hành tiêu chuẩn của NOVA MOTORS tại Việt Nam như thế nào?',
    answer: 'Tất cả các dòng xe NOVA MOTORS phân phối chính hãng đều được hưởng chính sách bảo hành 5 năm không giới hạn số km lăn bánh. Riêng cụm pin cao áp trên dòng xe điện NOVA E-Series được bảo hành 8 năm hoặc 160.000 km (tùy điều kiện nào đến trước), cam kết duy trì dung lượng pin tối thiểu 75%.'
  },
  {
    question: 'Tôi có thể đặt lịch hẹn bảo dưỡng trước bao lâu?',
    answer: 'Quý khách có thể đặt hẹn trước từ 1 đến 30 ngày thông qua website hoặc ứng dụng NOVA Connect. Khách hàng đã đặt hẹn trước sẽ được bố trí kỹ thuật viên riêng biệt và khu vực tiếp nhận ưu tiên mà không phải chờ đợi.'
  },
  {
    question: 'Showroom có cung cấp dịch vụ xe đưa đón hoặc giao nhận xe tận nhà không?',
    answer: 'Có. Với chương trình NOVA Concierge Service, chúng tôi cung cấp dịch vụ giao nhận xe bảo dưỡng tận nhà miễn phí trong bán kính 30 km đối với khách hàng sở hữu xe NOVA X5, S7 và E9.'
  },
  {
    question: 'Phụ tùng thay thế có đảm bảo 100% nhập khẩu chính hãng?',
    answer: 'Hoàn toàn chính xác. Mọi phụ tùng và phụ kiện tại tất cả xưởng dịch vụ NOVA MOTORS đều được nhập khẩu nguyên chiếc từ nhà máy, có tem niêm phong và bảo hành phụ tùng chính hãng 24 tháng.'
  }
];

