// src/models/product.ts

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

export const products: Product[] = [
  // 1. ĐIỆN THOẠI THÔNG MINH
  {
    id: 1,
    title: "iPhone 15 Pro Max 256GB - Titan Tự Nhiên",
    price: 34990000,
    description:
      "Chip A17 Bionic mạnh mẽ, hệ thống camera Pro tiên tiến, và khung viền Titan siêu bền. Màn hình ProMotion 120Hz.",
    category: "Điện thoại thông minh",
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_2__5_2_1_1_1_1_1.jpg",
    rating: { rate: 4.8, count: 5200 },
  },
  {
    id: 2,
    title: "Samsung Galaxy S24 Ultra 512GB",
    price: 30990000,
    description:
      "Tích hợp Galaxy AI, Camera 200MP, và bút S Pen. Thiết kế phẳng, tối ưu cho năng suất và chụp ảnh chuyên nghiệp.",
    category: "Điện thoại thông minh",
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/s/ss-s24-ultra-den-600_1.png",
    rating: { rate: 4.6, count: 4100 },
  },
  {
    id: 3,
    title: "Xiaomi 14 Ultra - Camera Leica 50MP",
    price: 24990000,
    description:
      "Hệ thống ống kính Leica Vario-Summilux. Sạc siêu nhanh 90W và pin lớn 5000mAh. Hiệu năng Snapdragon 8 Gen 3.",
    category: "Điện thoại thông minh",
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/x/i/xiaomi-14-ultra_3.png",
    rating: { rate: 4.7, count: 3500 },
  },
  {
    id: 4,
    title: "Oppo Reno 10 Pro 5G",
    price: 12990000,
    description:
      "Chuyên gia Chân dung với camera tele 32MP. Thiết kế mỏng nhẹ, sạc SuperVOOC 80W.",
    category: "Điện thoại thông minh",
    image: "https://cdn.tgdd.vn/Products/Images/42/306979/oppo-reno10-pro-tim-thumbnew-600x600.jpg",
    rating: { rate: 4.4, count: 1800 },
  },

  // 5. PHỤ KIỆN BẮT BUỘC (ÂM THANH & SẠC)
  {
    id: 5,
    title: "Tai nghe Bluetooth Samsung Galaxy Buds 3",
    price: 3500000,
    description:
      "Chất lượng âm thanh tuyệt đỉnh, chống ồn chủ động (ANC) hiệu quả. Thời lượng pin lên đến 24 giờ.",
    category: "Phụ kiện âm thanh",
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQp_gZBIs8feqzvC8YydAE3dAiKGExYLGK72V2O0crV9rnaiTr9Hk4ujCekVWb8L7q-6OOt4ggCPbuwQlM5v4uZD9RhGHOEiVgQdU00p2ICIPcVhTqgMRSYyw",
    rating: { rate: 4.5, count: 400 },
  },
  {
    id: 6,
    title: "Củ sạc nhanh 65W GaN (USB-C)",
    price: 490000,
    description:
      "Sử dụng công nghệ GaN tiên tiến, kích thước nhỏ gọn nhưng cung cấp công suất sạc 65W cho điện thoại và laptop.",
    category: "Phụ kiện sạc",
    image: "https://product.hstatic.net/1000152881/product/z3749002839384_b103f166d0774723bcccba7d936311a6_4db74d9094b7445abacfa3f4ebf79817.jpg",
    rating: { rate: 4.9, count: 700 },
  },
  {
    id: 7,
    title: "Ốp lưng Silicone cho iPhone 15 Pro",
    price: 199000,
    description:
      "Chất liệu silicone mềm mại, chống sốc tốt và bảo vệ camera khỏi trầy xước. Thiết kế mỏng nhẹ, nhiều màu sắc.",
    category: "Phụ kiện bảo vệ",
    image: "https://cdn.tgdd.vn/Products/Images/60/315050/op-lung-magsafe-iphone-15-pro-silicone-apple-mt1e3-thumbnew-600x600.jpg",
    rating: { rate: 4.5, count: 890 },
  },
  {
    id: 8,
    title: "Dây cáp sạc nhanh Type C to C 1m",
    price: 99000,
    description:
      "Hỗ trợ sạc nhanh PD 60W, truyền dữ liệu tốc độ cao. Chất liệu bện nylon bền bỉ, chống đứt gãy.",
    category: "Phụ kiện sạc",
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/c/a/cap-type-c-to-type-c-baseus-dynamic-1m-100w-sieu-nhanh.1_1.png",
    rating: { rate: 4.3, count: 1200 },
  },

  // 9. THIẾT BỊ LIÊN QUAN & PHỤ KIỆN KHÁC
  {
    id: 9,
    title: "Đồng hồ thông minh Apple Watch SE (Thế hệ 2)",
    price: 6990000,
    description:
      "Theo dõi sức khỏe, thể chất và giấc ngủ. Tích hợp GPS, chống nước. Đồng bộ hoàn hảo với iPhone.",
    category: "Thiết bị đeo thông minh",
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/r/group_653.png",
    rating: { rate: 4.7, count: 2030 },
  },
  {
    id: 10,
    title: "Máy tính bảng Samsung Galaxy Tab S9 FE",
    price: 10990000,
    description:
      "Màn hình lớn 10.9 inch, tần số quét 90Hz. Kèm bút S Pen, lý tưởng cho ghi chú và giải trí. Pin dung lượng lớn.",
    category: "Máy tính bảng",
    image: "https://cdn.tgdd.vn/Products/Images/522/309818/galaxy-tab-s9-fe-grey-thumb-600x600.jpg",
    rating: { rate: 4.4, count: 470 },
  },
  {
    id: 11,
    title: "Sạc dự phòng Anker PowerCore 20000mAh",
    price: 750000,
    description:
      "Dung lượng lớn, sạc được 4-5 lần điện thoại. Hỗ trợ sạc nhanh PowerIQ 3.0. Thiết kế gọn nhẹ.",
    category: "Phụ kiện sạc",
    image: "https://cdn2.cellphones.com.vn/x/media/catalog/product/7/h/7h56.png",
    rating: { rate: 4.8, count: 3190 },
  },
  {
    id: 12,
    title: "Giá đỡ điện thoại để bàn xoay 360°",
    price: 120000,
    description:
      "Chất liệu hợp kim nhôm, chắc chắn. Điều chỉnh góc nhìn linh hoạt, hỗ trợ xem video và livestream.",
    category: "Phụ kiện khác",
    image: "https://bizweb.dktcdn.net/100/443/479/products/48d894d4-3cf3-4883-a7bc-eff38988f852.jpg?v=1718052719060",
    rating: { rate: 4.2, count: 680 },
  },
];