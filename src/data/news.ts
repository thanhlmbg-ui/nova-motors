import { NewsArticle } from '../types';

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'news-1',
    slug: 'nova-motors-gioi-thieu-suv-the-he-moi-viet-nam',
    title: 'NOVA MOTORS giới thiệu thế hệ SUV mới tại Việt Nam',
    category: 'Sản phẩm mới',
    date: '15 Tháng 10, 2026',
    author: 'Ban Truyền Thông NOVA',
    readTime: '4 phút đọc',
    excerpt: 'Mẫu SUV hạng sang NOVA X5 chính thức diện kiến khách hàng Việt Nam với ngôn ngữ thiết kế tối giản đỉnh cao và công nghệ vận hành mild-hybrid thông minh.',
    coverImage: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    content: [
      'Tại sự kiện ra mắt độc quyền diễn ra ở Trung tâm Hội nghị Quốc tế, NOVA MOTORS chính thức giới thiệu mẫu SUV hạng sang NOVA X5 – mẫu xe đầu tiên trong chiến lược dài hạn tại thị trường Việt Nam.',
      'Sở hữu kích thước bề thế với chiều dài gần 5 mét cùng chiều dài cơ sở tối ưu, NOVA X5 thể hiện phong thái đĩnh đạc và tinh tế. Từng chi tiết ngoại thất được giản lược tối đa, loại bỏ các chi tiết thừa thãi để tôn vinh sự mượt mà của bề mặt kim loại.',
      'Bên trong khoang lái, NOVA X5 ứng dụng triết lý "Trực quan & Tĩnh lặng" (Intuitive Silence), mang đến không gian tĩnh lặng vượt trội với kính cách âm hai lớp và công nghệ triệt tiêu tiếng ồn chủ động (Active Noise Cancellation). Màn hình cong NOVA Horizon 27 inch liền khối trở thành tâm điểm của mọi thao tác điều khiển.',
      'Mẫu xe hiện đã có mặt tại tất cả các showroom của NOVA MOTORS trên toàn quốc với mức giá khởi điểm từ 2.199.000.000 VNĐ cùng chính sách bảo hành 5 năm không giới hạn số km.'
    ]
  },
  {
    id: 'news-2',
    slug: 'trai-nghiem-cong-nghe-xe-dien-the-he-moi',
    title: 'Trải nghiệm công nghệ xe điện thế hệ mới cùng NOVA E9',
    category: 'Công nghệ',
    date: '08 Tháng 10, 2026',
    author: 'Kỹ sư trưởng Công nghệ Động lực',
    readTime: '6 phút đọc',
    excerpt: 'Hệ thống điện áp 800V Ultra-Fast, tầm hoạt động vượt mốc 620km và trợ lý lái tự hành cấp độ 3 định hình lại chuẩn mực di chuyển tương lai.',
    coverImage: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    content: [
      'Sự chuyển dịch sang di chuyển thuần điện không chỉ đơn thuần là thay thế động cơ đốt trong bằng động cơ điện, mà là sự tái cấu trúc toàn diện về cảm xúc lái và tiện nghi sống. NOVA E9 là minh chứng sắc nét nhất cho tầm nhìn đó.',
      'Được xây dựng trên nền tảng khung gầm phẳng thế hệ mới, khối pin dung lượng 102 kWh được đặt ở vị trí trọng tâm thấp nhất của thân xe, mang lại độ cân bằng ngang tuyệt đối khi vào cua ở tốc độ cao.',
      'Với kiến trúc điện 800V, NOVA E9 cho phép công suất sạc cực đại lên đến 250 kW. Khách hàng chỉ mất đúng 20 phút để nạp từ 10% lên 80% dung lượng pin — tương đương thời gian thưởng thức một tách espresso tại phòng chờ cao cấp NOVA Lounge.',
      'Hơn thế nữa, tính năng V2L (Vehicle-to-Load) cho phép biến NOVA E9 thành trạm phát điện di động công suất 3.6kW, sẵn sàng cung cấp nguồn điện cho các thiết bị cắm trại và sinh hoạt ngoài trời.'
    ]
  },
  {
    id: 'news-3',
    slug: 'khai-truong-showroom-flagship-tp-ho-chi-minh',
    title: 'Khai trương showroom flagship tại Thành phố Hồ Chí Minh',
    category: 'Sự kiện',
    date: '28 Tháng 09, 2026',
    author: 'NOVA MOTORS Vietnam',
    readTime: '3 phút đọc',
    excerpt: 'Không gian trải nghiệm đẳng cấp 5 sao tọa lạc tại trung tâm Quận 1 mang lại trải nghiệm cá nhân hóa Bespoke độc bản cho từng chủ nhân tương lai.',
    coverImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    content: [
      'NOVA MOTORS chính thức cắt băng khánh thành Showroom Flagship đầu tiên tại Việt Nam, tọa lạc tại vị trí đắc địa 29 Lê Duẩn, Quận 1, TP. Hồ Chí Minh.',
      'Showroom được thiết kế bởi studio kiến trúc tối giản danh tiếng, lấy cảm hứng từ sự giao thoa giữa ánh sáng tự nhiên, vật liệu bê tông mài, gỗ tự nhiên và đá marble nguyên khối. Tại đây, khách hàng không chỉ chiêm ngưỡng xe mà còn được đắm mình trong không gian nghệ thuật đương đại.',
      'Điểm nhấn đặc biệt của Flagship Lounge là khu vực "Bespoke Studio", nơi chủ nhân có thể chạm tay vào các mẫu da Nappa cao cấp nhất, ngắm nhìn mẫu ốp gỗ thật dưới các điều kiện ánh sáng khác nhau và tùy chỉnh chiếc xe của riêng mình trên màn hình 3D tương tác thực tế ảo.'
    ]
  },
  {
    id: 'news-4',
    slug: 'chien-luoc-phat-trien-ben-vung-zero-emission',
    title: 'Cam kết phát triển bền vững: Hướng tới Net-Zero năm 2035',
    category: 'Bền vững',
    date: '18 Tháng 09, 2026',
    author: 'Phòng Phát triển Bền vững',
    readTime: '5 phút đọc',
    excerpt: 'NOVA MOTORS cam kết 100% dây chuyền sản xuất sử dụng năng lượng tái tạo và vật liệu nội thất tái chế tuần hoàn.',
    coverImage: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=1200&q=80',
    content: [
      'Phát triển bền vững là nền tảng cốt lõi trong mọi quyết định thiết kế và sản xuất tại NOVA MOTORS. Đến năm 2030, chúng tôi cam kết giảm 65% lượng khí thải carbon trên toàn bộ vòng đời sản phẩm.',
      'Vải dệt Eco-Weave trên các mẫu xe điện NOVA E-Series được sản xuất từ 100% sợi polyester tái chế từ rác thải đại dương, mang lại cảm giác mềm mại cao cấp tương đương lụa tự nhiên nhưng có độ bền vượt trội.'
    ]
  },
  {
    id: 'news-5',
    slug: 'nghe-thuat-che-tac-noi-that-tinh-hoa',
    title: 'Kỹ nghệ chế tác nội thất xe sang: Tinh hoa thủ công gặp gỡ tương lai',
    category: 'Trải nghiệm',
    date: '02 Tháng 09, 2026',
    author: 'Xưởng Chế tác Bespoke',
    readTime: '4 phút đọc',
    excerpt: 'Hơn 40 giờ hoàn thiện thủ công cho từng chi tiết da và gỗ trên mỗi chiếc NOVA X5 và S7.',
    coverImage: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80',
    content: [
      'Mỗi đường kim mũi chỉ trên ghế da Nappa của NOVA MOTORS đều được hoàn thiện bởi những nghệ nhân có trên 15 năm kinh nghiệm. Từng mảnh da được kiểm định độ mịn và độ đàn hồi dưới kính hiển vi quang học trước khi được đưa vào xưởng may.'
    ]
  }
];

export const getArticleBySlug = (slug: string): NewsArticle | undefined => {
  return NEWS_ARTICLES.find(a => a.slug === slug);
};

