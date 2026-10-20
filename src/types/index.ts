export interface VehicleSpec {
  power: string; // e.g. "340 HP"
  torque: string; // e.g. "500 Nm"
  acceleration: string; // e.g. "4.8 giây (0-100 km/h)"
  topSpeed: string; // e.g. "250 km/h"
  fuelConsumption?: string; // e.g. "8.2 L/100km"
  range?: string; // e.g. "620 km (WLTP)"
  batteryCapacity?: string; // e.g. "100 kWh"
  chargingTime?: string; // e.g. "20 phút (10-80% DC 250kW)"
  drivetrain: string; // e.g. "NOVA All-Wheel Drive (AWD)"
  transmission: string; // e.g. "Tự động 8 cấp thể thao"
  dimensions: string; // e.g. "4,950 x 1,980 x 1,690 mm"
  weight: string; // e.g. "2,150 kg"
  bootSpace: string; // e.g. "650 - 1,750 L"
}

export interface ColorOption {
  name: string;
  code: string; // hex
  image: string; // vehicle image in this color
  description?: string;
}

export interface InteriorOption {
  name: string;
  leatherColor: string;
  trim: string;
  image: string;
}

export interface VehicleHighlight {
  title: string;
  description: string;
  image: string;
  tag: string;
}

export interface Vehicle {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: 'SUV' | 'Sedan' | 'Electric' | 'Sport';
  fuelType: 'Xăng Mild-Hybrid' | 'Thuần điện (BEV)' | 'Plug-in Hybrid' | 'Hi-Performance V8';
  priceVND: number;
  formattedPrice: string;
  heroImage: string;
  thumbnailImage: string;
  sideImage: string;
  rearImage: string;
  interiorImage: string;
  gallery: string[];
  description: string;
  longDescription: string;
  specs: VehicleSpec;
  colors: ColorOption[];
  interiors: InteriorOption[];
  highlights: VehicleHighlight[];
  status: 'Sẵn sàng giao' | 'Đặt trước' | 'Mới ra mắt';
}

export interface Dealer {
  id: string;
  name: string;
  city: 'Hà Nội' | 'TP. Hồ Chí Minh' | 'Đà Nẵng' | 'Hải Phòng' | 'Cần Thơ';
  address: string;
  phone: string;
  email: string;
  hours: string;
  services: string[];
  latitude: number;
  longitude: number;
  isFlagship?: boolean;
}

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  category: 'Sản phẩm mới' | 'Công nghệ' | 'Sự kiện' | 'Bền vững' | 'Trải nghiệm';
  date: string;
  author: string;
  readTime: string;
  excerpt: string;
  content: string[];
  coverImage: string;
  featured?: boolean;
}

export interface InventoryItem {
  id: string;
  vin: string;
  modelSlug: string;
  modelName: string;
  trim: string;
  exteriorColor: string;
  interiorColor: string;
  manufactureYear: number;
  priceVND: number;
  location: string;
  status: 'Có sẵn giao ngay' | 'Đang vận chuyển' | 'Xe trưng bày';
  image: string;
  mileage: string;
}

export interface ServicePackage {
  id: string;
  title: string;
  description: string;
  interval: string;
  priceEstimated: string;
  features: string[];
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  deadline: string;
  description: string;
  requirements: string[];
}

