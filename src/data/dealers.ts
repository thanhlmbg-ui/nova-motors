import { Dealer } from '../types';

export const DEALERS: Dealer[] = [
  {
    id: 'd-hcm-flagship',
    name: 'NOVA MOTORS Flagship Lounge — TP. Hồ Chí Minh',
    city: 'TP. Hồ Chí Minh',
    address: 'Toà nhà NOVA Tower, 29 Lê Duẩn, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh',
    phone: '028 3822 8899',
    email: 'saigon.flagship@novamotors.vn',
    hours: 'Thứ Hai – Chủ Nhật: 08:30 – 20:00',
    services: [
      'Trưng bày xe & Phòng cá nhân hóa Bespoke Studio',
      'Đăng ký & Trải nghiệm lái thử',
      'Khu vực sạc siêu nhanh NOVA 800V SuperCharge',
      'Phòng chờ VIP Executive Lounge'
    ],
    latitude: 10.7818,
    longitude: 106.7009,
    isFlagship: true
  },
  {
    id: 'd-hcm-pmh',
    name: 'NOVA MOTORS Phú Mỹ Hưng',
    city: 'TP. Hồ Chí Minh',
    address: 'Số 105 Nguyễn Văn Linh, Phường Tân Phong, Quận 7, TP. Hồ Chí Minh',
    phone: '028 5411 6688',
    email: 'phumyhung@novamotors.vn',
    hours: 'Thứ Hai – Thứ Bảy: 08:00 – 19:00 | Chủ Nhật: 09:00 – 18:00',
    services: [
      'Showroom trưng bày xe hoàn chỉnh',
      'Xưởng dịch vụ kỹ thuật cao cấp 5 sao',
      'Cung cấp phụ tùng chính hãng',
      'Bảo dưỡng định kỳ & sửa chữa thân vỏ'
    ],
    latitude: 10.7302,
    longitude: 106.7088
  },
  {
    id: 'd-hn-flagship',
    name: 'NOVA MOTORS Flagship Showroom — Hà Nội',
    city: 'Hà Nội',
    address: 'Số 68 Liễu Giai, Phường Cống Vị, Quận Ba Đình, Hà Nội',
    phone: '024 3766 9900',
    email: 'hanoi.flagship@novamotors.vn',
    hours: 'Thứ Hai – Chủ Nhật: 08:30 – 20:00',
    services: [
      'Trưng bày xe & Phòng cá nhân hóa Bespoke Studio',
      'Đăng ký & Trải nghiệm lái thử',
      'Trạm sạc siêu nhanh Ultra-Fast Charge',
      'Khu dịch vụ tiếp nhận khách hàng ưu tiên'
    ],
    latitude: 21.0333,
    longitude: 105.8145,
    isFlagship: true
  },
  {
    id: 'd-hn-longbien',
    name: 'NOVA MOTORS Long Biên Service Center',
    city: 'Hà Nội',
    address: 'Số 1 Đường Nguyễn Văn Linh, Phường Gia Thụy, Quận Long Biên, Hà Nội',
    phone: '024 3875 5566',
    email: 'longbien.service@novamotors.vn',
    hours: 'Thứ Hai – Thứ Bảy: 08:00 – 18:00',
    services: [
      'Trung tâm đại tu và sửa chữa thân vỏ chuyên sâu',
      'Chẩn đoán điện tử công nghệ cao',
      'Bảo dưỡng định kỳ nhanh 60 phút',
      'Phụ tùng và phụ kiện chính hãng'
    ],
    latitude: 21.0494,
    longitude: 105.8927
  },
  {
    id: 'd-danang',
    name: 'NOVA MOTORS Đà Nẵng',
    city: 'Đà Nẵng',
    address: 'Số 356 Đường 2 Tháng 9, Phường Hòa Cường Bắc, Quận Hải Châu, TP. Đà Nẵng',
    phone: '0236 368 8899',
    email: 'danang@novamotors.vn',
    hours: 'Thứ Hai – Thứ Bảy: 08:00 – 19:00 | Chủ Nhật: 08:30 – 17:30',
    services: [
      'Showroom trưng bày tất cả các dòng xe',
      'Đăng ký lái thử cung đường biển',
      'Xưởng dịch vụ kỹ thuật tiêu chuẩn quốc tế',
      'Trạm sạc nhanh công cộng cho khách hàng'
    ],
    latitude: 16.0372,
    longitude: 108.2231
  },
  {
    id: 'd-haiphong',
    name: 'NOVA MOTORS Hải Phòng',
    city: 'Hải Phòng',
    address: 'Khu Đô Thị Vinhomes Imperia, Phường Thượng Lý, Quận Hồng Bàng, TP. Hải Phòng',
    phone: '0225 385 7788',
    email: 'haiphong@novamotors.vn',
    hours: 'Thứ Hai – Chủ Nhật: 08:30 – 19:00',
    services: [
      'Showroom trưng bày xe sang & Xe điện',
      'Dịch vụ tiếp đón khách VIP',
      'Tiếp nhận bảo dưỡng & giao xe tận nhà'
    ],
    latitude: 20.8651,
    longitude: 106.6713
  },
  {
    id: 'd-cantho',
    name: 'NOVA MOTORS Cần Thơ',
    city: 'Cần Thơ',
    address: 'Số 12 Đại lộ Hòa Bình, Phường An Cư, Quận Ninh Kiều, TP. Cần Thơ',
    phone: '0292 381 2233',
    email: 'cantho@novamotors.vn',
    hours: 'Thứ Hai – Chủ Nhật: 08:30 – 19:00',
    services: [
      'Showroom trưng bày đại lý Mekong Delta',
      'Đăng ký lái thử xe',
      'Trung tâm dịch vụ chăm sóc khách hàng Tây Nam Bộ'
    ],
    latitude: 10.0357,
    longitude: 105.7825
  }
];

