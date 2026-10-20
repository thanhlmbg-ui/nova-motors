# NOVA MOTORS — Luxury Automotive Digital Showroom

Website showroom ô tô hạng sang chính thức cho thương hiệu hư cấu **NOVA MOTORS**, lấy cảm hứng từ phong cách thiết kế hiện đại, tối giản và tinh tế mang đẳng cấp quốc tế.

---

## 🌟 Tổng Quan Dự Án

- **Thương hiệu**: NOVA MOTORS
- **Triết lý thiết kế**: *Minimalist Luxury & Editorial Automotive Design* — Tối giản, thanh lịch, nhiều khoảng trắng, hình ảnh lớn sắc nét, typography tương phản cao và hiệu ứng tương tác mượt mà.
- **Tone màu chủ đạo**: Trắng băng (Glacier White), Đen Obsidian, Xám Than (Charcoal), Bạc Kim Loại (Liquid Silver) cùng điểm nhấn Đỏ Rượu (Burgundy Royal) và Xanh Cobalt rất tiết chế.

---

## 🛠️ Công Nghệ Sử Dụng

- **Frontend Framework**: React 18 & TypeScript
- **Styling**: Tailwind CSS với custom luxury automotive theme & utility classes
- **Routing**: React Router DOM v6 (hỗ trợ đầy đủ 13 routes chuyên biệt)
- **Icons**: Lucide React
- **Build Tool**: Vite (tốc độ biên dịch cực nhanh, HMR tức thì)

---

## 🚘 Danh Mục Dòng Xe (Vehicles)

1. **NOVA X5** — *Flagship Luxury SUV* (Giá từ 2.199.000.000 VNĐ)
2. **NOVA S7** — *Executive Sports Sedan* (Giá từ 1.899.000.000 VNĐ)
3. **NOVA E9** — *Pure Electric Flagship SUV* (Giá từ 2.599.000.000 VNĐ)
4. **NOVA GT Concept** — *Grand Tourer V8 Twin-Turbo* (Giá từ 3.699.000.000 VNĐ)

---

## 🧭 Cấu Trúc Các Tuyến Đường (Routes)

| Tuyến đường (Route) | Chức năng |
| :--- | :--- |
| `/` | Trang chủ toàn diện: Hero Carousel 3 banner, Quick Actions, Bộ sưu tập xe, Trải nghiệm công nghệ, Khu vực xe điện, Tin tức & Sự kiện, Đại lý & Bản đồ, Form Đăng ký lái thử. |
| `/models` | Toàn bộ danh mục xe với bộ lọc kiểu dáng (SUV, Sedan, Electric, Sport), động cơ và thanh trượt mức giá. |
| `/models/nova-x5` | Chi tiết SUV: Gallery ảnh, Studio đổi màu sơn và nội thất trực tiếp, bảng thông số kỹ thuật chi tiết, tính năng nổi bật. |
| `/models/nova-s7` | Chi tiết mẫu sedan thể thao hạng sang NOVA S7. |
| `/models/nova-e9` | Chi tiết mẫu SUV thuần điện NOVA E9 với thông số pin 800V và trạm sạc. |
| `/test-drive` | Quy trình đăng ký lái thử 3 bước chuyên nghiệp kèm mã đặt hẹn tự động. |
| `/inventory` | Kho xe có sẵn giao ngay, tra cứu theo số VIN, màu sơn, showroom và chức năng giữ xe. |
| `/service` | Đặt lịch dịch vụ bảo dưỡng, bảng giá các gói Essential/Prestige/EV Care và Accordion FAQ. |
| `/dealers` | Mạng lưới showroom chính hãng (TP.HCM, Hà Nội, Đà Nẵng, Hải Phòng, Cần Thơ), chỉ đường Google Maps. |
| `/news` | Bản tin thương hiệu, bài viết ra mắt xe, chiến lược Net-Zero với trình đọc toàn màn hình. |
| `/about` | Giới thiệu thương hiệu, câu chuyện sáng lập, tầm nhìn, sứ mệnh và 4 giá trị cốt lõi. |
| `/careers` | Trang tuyển dụng các vị trí cấp cao và form nộp CV trực tuyến. |
| `/privacy` | Chính sách bảo vệ dữ liệu cá nhân theo Nghị định 13/2023/NĐ-CP. |
| `*` | Trang 404 phong cách tối giản sang trọng. |

---

## ⚡ Hướng Dẫn Khởi Chạy

```bash

# 1. Cài đặt các gói phụ thuộc (nếu chưa cài)
npm.cmd install

# 2. Chạy môi trường phát triển (Dev Server)
npm.cmd run dev

# 3. Hoặc biên dịch & xem bản phân phối tối ưu (Production Preview)
npm.cmd run build
npm.cmd run preview -- --port 3000 --host
```

Truy cập website tại: **`http://localhost:3000/`**

