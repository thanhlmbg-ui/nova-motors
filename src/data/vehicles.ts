import { Vehicle } from '../types';

export const VEHICLES: Vehicle[] = [
  {
    id: 'nova-x5',
    slug: 'nova-x5',
    name: 'NOVA X5',
    tagline: 'Định nghĩa lại trải nghiệm SUV hạng sang',
    category: 'SUV',
    fuelType: 'Xăng Mild-Hybrid',
    priceVND: 2199000000,
    formattedPrice: '2.199.000.000 VNĐ',
    heroImage: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=2000&q=85', // Luxury dark SUV angle
    thumbnailImage: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80',
    sideImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80',
    rearImage: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1600&q=80',
    interiorImage: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=85',
    ],
    description: 'Công nghệ tiên tiến, thiết kế tinh tế và hiệu suất mạnh mẽ cho mọi hành trình.',
    longDescription: 'NOVA X5 là biểu tượng mới của phong cách sống thượng lưu. Sự kết hợp hoàn hảo giữa ngôn ngữ thiết kế tối giản đương đại, không gian nội thất công thái học đỉnh cao và hệ dẫn động 4 bánh toàn thời gian thông minh NOVA Intelligent AWD mang đến cảm giác làm chủ tuyệt đối trên mọi cung đường.',
    specs: {
      power: '340 HP / 250 kW',
      torque: '500 Nm @ 1,370 - 4,500 rpm',
      acceleration: '5.2 giây (0 - 100 km/h)',
      topSpeed: '250 km/h (Giới hạn điện tử)',
      fuelConsumption: '8.4 L / 100km (Hỗn hợp)',
      drivetrain: 'Hệ dẫn động 4 bánh thông minh NOVA AWD',
      transmission: 'Tự động 8 cấp Tiptronic thể thao',
      dimensions: '4,985 x 1,995 x 1,705 mm',
      weight: '2,185 kg',
      bootSpace: '650 L — mở rộng 1,780 L'
    },
    colors: [
      {
        name: 'Đen Obsidian Metallic',
        code: '#121316',
        image: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1800&q=85',
        description: 'Sâu thẳm, quyền uy và phản chiếu ánh sáng tinh tế.'
      },
      {
        name: 'Trắng Băng Glacier White',
        code: '#f0f3f6',
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1800&q=85',
        description: 'Thuần khiết, thanh lịch và làm nổi bật từng đường gân dập nổi.'
      },
      {
        name: 'Xám Titan Nardo Grey',
        code: '#6f747d',
        image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1800&q=85',
        description: 'Đậm chất thể thao công nghệ, mạnh mẽ và sắc sảo.'
      },
      {
        name: 'Đỏ Rượu Burgundy Royal',
        code: '#6b1426',
        image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1800&q=85',
        description: 'Quý phái, độc bản và thu hút mọi ánh nhìn.'
      }
    ],
    interiors: [
      {
        name: 'Da Nappa Đen Onyx & Ốp Hợp Kim Phay Xước',
        leatherColor: '#1a1a1a',
        trim: 'Nhôm chải mờ cao cấp',
        image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=80'
      },
      {
        name: 'Da Nappa Nâu Cognac & Gỗ Óc Chó Mở Lỗ Chân Lông',
        leatherColor: '#8a502c',
        trim: 'Gỗ Walnut tự nhiên mộc',
        image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1600&q=80'
      }
    ],
    highlights: [
      {
        title: 'Hệ thống treo khí nén chủ động NOVA Adaptive Air',
        description: 'Tự động hạ thấp trọng tâm 30mm khi vận hành ở tốc độ cao và nâng gầm vượt địa hình với 5 chế độ lái tùy biến.',
        image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80',
        tag: 'Khung gầm & Vận hành'
      },
      {
        title: 'Đèn pha ma trận NOVA Digital Matrix LED',
        description: 'Chiếu sáng thông minh hơn 1.3 triệu vi gương micromirror, tạo luồng sáng chính xác tuyệt đối mà không gây chói xe ngược chiều.',
        image: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=1200&q=80',
        tag: 'Hệ thống chiếu sáng'
      },
      {
        title: 'Màn hình vòm cong NOVA Horizon Curved Display',
        description: 'Màn hình OLED 27 inch liền khối với độ phân giải 4K, hỗ trợ điều khiển bằng cử chỉ và trợ lý ảo tiếng Việt AI thông minh.',
        image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80',
        tag: 'Khoang lái số'
      }
    ],
    status: 'Sẵn sàng giao'
  },
  {
    id: 'nova-s7',
    slug: 'nova-s7',
    name: 'NOVA S7',
    tagline: 'Cảm hứng thể thao, tinh thần tiên phong',
    category: 'Sedan',
    fuelType: 'Xăng Mild-Hybrid',
    priceVND: 1899000000,
    formattedPrice: '1.899.000.000 VNĐ',
    heroImage: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=2000&q=85', // Sleek luxury sports sedan
    thumbnailImage: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=80',
    sideImage: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=1600&q=80',
    rearImage: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=80',
    interiorImage: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1600&q=85'
    ],
    description: 'Mẫu sedan thể thao mang đường nét khí động học chuẩn mực, bứt phá mọi giới hạn tốc độ và sự sang trọng.',
    longDescription: 'NOVA S7 là mẫu sedan thể thao hạng sang kết hợp giữa tính thẩm mỹ quyến rũ và linh hồn thể thao thuần khiết. Sở hữu tỉ lệ thân xe cân xứng hoàn hảo cùng hệ thống đánh lái bánh sau linh hoạt, S7 mang lại phản hồi chân thực và phấn khích chưa từng có trong phân khúc sedan cao cấp.',
    specs: {
      power: '300 HP / 221 kW',
      torque: '450 Nm @ 1,400 - 4,800 rpm',
      acceleration: '4.9 giây (0 - 100 km/h)',
      topSpeed: '250 km/h (Giới hạn điện tử)',
      fuelConsumption: '7.2 L / 100km (Hỗn hợp)',
      drivetrain: 'Hệ dẫn động cầu sau thông minh RWD Sport / Tuỳ chọn AWD',
      transmission: 'Tự động 8 cấp ly hợp kép kép mượt mà',
      dimensions: '4,880 x 1,870 x 1,435 mm',
      weight: '1,780 kg',
      bootSpace: '480 L'
    },
    colors: [
      {
        name: 'Xanh Đêm Cobalt Deep Night',
        code: '#0f2744',
        image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1800&q=85',
        description: 'Huyền bí và mang hơi thở công nghệ tương lai.'
      },
      {
        name: 'Đen Bóng Carbon Black',
        code: '#101114',
        image: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=1800&q=85',
        description: 'Sự tối giản chuẩn mực toát lên phong thái doanh nhân hiện đại.'
      },
      {
        name: 'Bạc Kim Loại Liquid Silver',
        code: '#c8cbd1',
        image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1800&q=85',
        description: 'Tôn vinh trọn vẹn bề mặt dập uốn lượn khí động học.'
      }
    ],
    interiors: [
      {
        name: 'Da Đỏ Crimson Sport & Carbon Twill dệt mờ',
        leatherColor: '#7d1e2b',
        trim: 'Sợi Carbon cấu trúc 3D',
        image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1600&q=80'
      },
      {
        name: 'Da Trắng Kem Oyster & Hợp Kim Khắc Lazer',
        leatherColor: '#e5e1db',
        trim: 'Bạc bóng Titanium',
        image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1600&q=80'
      }
    ],
    highlights: [
      {
        title: 'Hệ thống đánh lái 4 bánh linh hoạt Dynamic All-Wheel Steering',
        description: 'Ở tốc độ thấp, bánh sau xoay ngược chiều bánh trước để thu gọn góc quay đầu; ở tốc độ cao, bánh sau xoay cùng chiều nhằm chuyển làn ổn định tuyệt đối.',
        image: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=1200&q=80',
        tag: 'Cảm giác lái'
      },
      {
        title: 'Hệ thống âm thanh High-End NOVA Acoustic 18 loa 3D',
        description: 'Công suất 850W với loa vòm tích hợp trên tựa đầu, mang đến âm thanh chân thực như trong phòng hòa nhạc thính phòng.',
        image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80',
        tag: 'Tiện nghi thượng lưu'
      }
    ],
    status: 'Sẵn sàng giao'
  },
  {
    id: 'nova-e9',
    slug: 'nova-e9',
    name: 'NOVA E9',
    tagline: 'Kỷ nguyên SUV thuần điện đỉnh cao',
    category: 'Electric',
    fuelType: 'Thuần điện (BEV)',
    priceVND: 2599000000,
    formattedPrice: '2.599.000.000 VNĐ',
    heroImage: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=2000&q=85', // Futuristic EV
    thumbnailImage: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80',
    sideImage: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1600&q=80',
    rearImage: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1600&q=80',
    interiorImage: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1600&q=85'
    ],
    description: 'Tầm hoạt động 620 km, sạc nhanh 10-80% trong 20 phút và 100% không phát thải khi vận hành.',
    longDescription: 'NOVA E9 đại diện cho đỉnh cao công nghệ di chuyển bền vững. Nền tảng khung gầm 800V Ultra-Charge chuyên dụng cho xe điện mang đến công suất tức thời 480 mã lực, khả năng sạc siêu tốc và không gian khoang hành khách rộng rãi chưa từng có nhờ sàn phẳng hoàn toàn.',
    specs: {
      power: '480 HP / 353 kW (Dual Motor)',
      torque: '720 Nm tức thì',
      acceleration: '3.8 giây (0 - 100 km/h)',
      topSpeed: '210 km/h (Giới hạn bảo vệ pin)',
      range: '620 km (Chuẩn WLTP)',
      batteryCapacity: '102 kWh Lithium-Ion Thế Hệ Mới',
      chargingTime: '20 phút (10% - 80% với trạm sạc DC 250 kW)',
      drivetrain: 'Hệ dẫn động 4 bánh điện tử Dual-Motor e-AWD',
      transmission: 'Hộp số 1 cấp truyền động trực tiếp',
      dimensions: '5,010 x 2,010 x 1,680 mm',
      weight: '2,390 kg',
      bootSpace: '680 L + Cốp trước Frunk 85 L'
    },
    colors: [
      {
        name: 'Trắng Bạc Tương Lai Aero Silver',
        code: '#d8dee9',
        image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1800&q=85',
        description: 'Tối ưu chỉ số cản gió Cd 0.24, biểu tượng của sự thanh thoát.'
      },
      {
        name: 'Xanh Băng Cyber Arctic',
        code: '#1e3852',
        image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1800&q=85',
        description: 'Lấy cảm hứng từ cực quang Bắc Cực và năng lượng sạch.'
      },
      {
        name: 'Xám Mờ Titan Matte',
        code: '#3b3e44',
        image: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1800&q=85',
        description: 'Sơn phủ mờ Satin cao cấp bảo vệ tuyệt đối và tạo hiệu ứng chiều sâu ánh sáng.'
      }
    ],
    interiors: [
      {
        name: 'Vật liệu tái chế cao cấp Eco-Weave & Gỗ Tái Sinh',
        leatherColor: '#30343a',
        trim: 'Gỗ phong tái sinh được chứng nhận FSC',
        image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=80'
      },
      {
        name: 'Da Vegan Trắng Tinh Khiết Cloud White',
        leatherColor: '#f1f1ed',
        trim: 'Nhôm tái chế thổi cát siêu mịn',
        image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1600&q=80'
      }
    ],
    highlights: [
      {
        title: 'Hệ thống sạc siêu nhanh 800V Ultra-Fast Architecture',
        description: 'Chỉ cần dừng 10 phút sạc có thể di chuyển thêm 250km tại hệ sinh thái trạm sạc siêu nhanh NOVA SuperCharge trên toàn quốc.',
        image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80',
        tag: 'Công nghệ Pin & Sạc'
      },
      {
        title: 'Trợ lý lái tự hành NOVA Pilot Cấp độ 3 (Level 3 Ready)',
        description: 'Trang bị cảm biến LiDAR 3D, 12 camera độ phân giải cao và 5 radar sóng milimet hỗ trợ tự động giữ làn, chuyển làn và tự đỗ xe thông minh từ xa qua smartphone.',
        image: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=1200&q=80',
        tag: 'An toàn chủ động'
      }
    ],
    status: 'Mới ra mắt'
  },
  {
    id: 'nova-gt-concept',
    slug: 'nova-gt',
    name: 'NOVA GT Concept',
    tagline: 'Tuyên ngôn hiệu suất siêu xe Grand Tourer',
    category: 'Sport',
    fuelType: 'Hi-Performance V8',
    priceVND: 3699000000,
    formattedPrice: '3.699.000.000 VNĐ',
    heroImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2000&q=85',
    thumbnailImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    sideImage: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=80',
    rearImage: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1600&q=80',
    interiorImage: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1600&q=85'
    ],
    description: 'Đỉnh cao cơ khí chế tác thủ công với động cơ V8 Twin-Turbo sản sinh 600 mã lực.',
    longDescription: 'NOVA GT kết tinh niềm đam mê tốc độ và kỹ nghệ chế tác tinh hoa. Khung gầm sợi carbon nguyên khối siêu nhẹ kết hợp cùng cánh gió khí động học chủ động mở tự động ở tốc độ 120km/h.',
    specs: {
      power: '600 HP / 441 kW @ 6,500 rpm',
      torque: '750 Nm @ 2,000 - 5,200 rpm',
      acceleration: '3.3 giây (0 - 100 km/h)',
      topSpeed: '315 km/h',
      fuelConsumption: '11.2 L / 100km',
      drivetrain: 'Hệ dẫn động thể thao NOVA Sport Differential Quattro',
      transmission: 'Hộp số 8 cấp ly hợp kép F1 Sequential',
      dimensions: '4,790 x 1,960 x 1,310 mm',
      weight: '1,620 kg',
      bootSpace: '320 L'
    },
    colors: [
      {
        name: 'Đỏ Burgundy Đua Cực Đại Apex Red',
        code: '#780c1d',
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1800&q=85',
        description: 'Màu đỏ trường đua độc bản chỉ dành riêng cho phân nhánh GT.'
      },
      {
        name: 'Xám Khói Stealth Grey',
        code: '#34383f',
        image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1800&q=85',
        description: 'Tối giản nhưng đầy đe dọa với chi tiết carbon trần.'
      }
    ],
    interiors: [
      {
        name: 'Ghế thể thao Bucket Seats bọc Alcantara & Sợi Carbon',
        leatherColor: '#111215',
        trim: 'Forged Carbon Fiber mờ',
        image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1600&q=80'
      }
    ],
    highlights: [
      {
        title: 'Hệ thống phanh gốm Carbon NOVA Ceramic Bremsen',
        description: 'Đĩa phanh gốm carbon 420mm chịu nhiệt độ tới 1.000°C, giảm trọng lượng xoay không treo và đảm bảo quãng đường phanh ngắn kỷ lục.',
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
        tag: 'Hiệu suất trường đua'
      }
    ],
    status: 'Đặt trước'
  }
];

export const getVehicleBySlug = (slug: string): Vehicle | undefined => {
  return VEHICLES.find(v => v.slug === slug);
};

