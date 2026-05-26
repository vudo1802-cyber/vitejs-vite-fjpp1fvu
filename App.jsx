import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  ShoppingCart,
  MessageCircle,
  Menu,
  X,
  Laptop,
  Cpu,
  ShieldCheck,
  Truck,
  CreditCard,
  Sparkles,
  Headphones,
  Star,
  Send,
  Bot,
  User,
  ChevronRight,
} from 'lucide-react';

const fallbackImage =
  'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=1200&auto=format&fit=crop';

const products = [
  {
    id: 1,
    brand: 'Acer',
    name: 'Acer Nitro V 15 ANV15-51',
    category: 'Gaming Laptop',
    price: 18990000,
    oldPrice: 21990000,
    tag: 'Hot Deal',
    stock: 'Còn hàng',
    warranty: 'Bảo hành 12 tháng',
    specs:
      'Intel Core i5-13420H • RTX 4050 6GB • 16GB RAM • 512GB SSD • 15.6 inch FHD 144Hz',
    shortDesc:
      'Laptop gaming tầm trung phù hợp chơi game, học tập, làm đồ họa cơ bản và livestream nhẹ.',
    suitableFor: 'Gaming, sinh viên công nghệ, thiết kế cơ bản',
    image:
      'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=1200&auto=format&fit=crop',
    rating: 4.8,
  },
  {
    id: 2,
    brand: 'ASUS',
    name: 'ASUS TUF Gaming A15 FA506',
    category: 'Gaming Laptop',
    price: 20990000,
    oldPrice: 23990000,
    tag: 'Bán Chạy',
    stock: 'Còn hàng',
    warranty: 'Bảo hành 24 tháng',
    specs:
      'AMD Ryzen 7 • RTX 3050 4GB • 16GB RAM • 512GB SSD • 15.6 inch FHD 144Hz',
    shortDesc:
      'Dòng laptop gaming bền bỉ, hiệu năng ổn định, phù hợp game thủ và người dùng cần máy khỏe.',
    suitableFor: 'Gaming, học đồ họa, làm việc đa nhiệm',
    image:
      'https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=1200&auto=format&fit=crop',
    rating: 4.8,
  },
  {
    id: 3,
    brand: 'Lenovo',
    name: 'Lenovo LOQ 15IRH8 Gaming',
    category: 'Gaming Laptop',
    price: 19990000,
    oldPrice: 22990000,
    tag: 'Ưu Đãi',
    stock: 'Còn hàng',
    warranty: 'Bảo hành 12 tháng',
    specs:
      'Intel Core i5-12450H • RTX 3050 6GB • 16GB RAM • 512GB SSD • 15.6 inch FHD 144Hz',
    shortDesc:
      'Mẫu gaming cân bằng giữa hiệu năng và giá bán, phù hợp khách cần máy mạnh trong tầm giá dễ tiếp cận.',
    suitableFor: 'Gaming phổ thông, học tập, edit video nhẹ',
    image:
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1200&auto=format&fit=crop',
    rating: 4.7,
  },
  {
    id: 4,
    brand: 'Apple',
    name: 'MacBook Air M2 13 inch',
    category: 'Laptop Văn Phòng',
    price: 23990000,
    oldPrice: 26990000,
    tag: 'Mỏng Nhẹ',
    stock: 'Còn hàng',
    warranty: 'Bảo hành 12 tháng',
    specs: 'Apple M2 • 8GB RAM • 256GB SSD • 13.6 inch Liquid Retina • Pin lâu',
    shortDesc:
      'Laptop mỏng nhẹ, pin tốt, hiệu năng mượt cho học tập, văn phòng, sáng tạo nội dung và di chuyển nhiều.',
    suitableFor: 'Văn phòng, sinh viên, content creator',
    image:
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop',
    rating: 4.9,
  },
  {
    id: 5,
    brand: 'Dell',
    name: 'Dell Inspiron 15 3530',
    category: 'Laptop Văn Phòng',
    price: 13990000,
    oldPrice: 15990000,
    tag: 'Tiết Kiệm',
    stock: 'Còn hàng',
    warranty: 'Bảo hành 12 tháng',
    specs: 'Intel Core i5-1335U • 16GB RAM • 512GB SSD • 15.6 inch FHD',
    shortDesc:
      'Laptop văn phòng ổn định, màn hình lớn, phù hợp làm việc, học online, kế toán và xử lý tài liệu.',
    suitableFor: 'Văn phòng, học sinh, sinh viên, kế toán',
    image:
      'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?q=80&w=1200&auto=format&fit=crop',
    rating: 4.6,
  },
  {
    id: 6,
    brand: 'HP',
    name: 'HP Pavilion 15',
    category: 'Laptop Văn Phòng',
    price: 14990000,
    oldPrice: 16990000,
    tag: 'Văn Phòng',
    stock: 'Còn hàng',
    warranty: 'Bảo hành 12 tháng',
    specs: 'Intel Core i5 • 16GB RAM • 512GB SSD • 15.6 inch FHD • Windows 11',
    shortDesc:
      'Thiết kế thanh lịch, dùng ổn định cho công việc hằng ngày, học tập, họp online và giải trí nhẹ.',
    suitableFor: 'Nhân viên văn phòng, sinh viên, làm việc tại nhà',
    image:
      'https://images.unsplash.com/photo-1663354027456-ce6a7e07d212?q=80&w=1074&auto=format&fit=crop',
    rating: 4.6,
  },
  {
    id: 7,
    brand: 'MSI',
    name: 'MSI Modern 14',
    category: 'Laptop Văn Phòng',
    price: 12990000,
    oldPrice: 14990000,
    tag: 'Gọn Nhẹ',
    stock: 'Còn hàng',
    warranty: 'Bảo hành 12 tháng',
    specs:
      'Intel Core i5 • 16GB RAM • 512GB SSD • 14 inch FHD • Thiết kế mỏng nhẹ',
    shortDesc:
      'Máy nhỏ gọn, dễ mang theo, phù hợp người cần laptop học tập và làm việc cơ bản với chi phí hợp lý.',
    suitableFor: 'Sinh viên, nhân viên văn phòng, học online',
    image:
      'https://i.pinimg.com/1200x/2a/3a/16/2a3a166e410de40aab6e353983cde76d.jpg',
    rating: 4.5,
  },
  {
    id: 8,
    brand: 'Máy Tính Vũ Dũng',
    name: 'PC Gaming Ryzen 5 RTX 4060',
    category: 'PC Gaming',
    price: 24990000,
    oldPrice: 28990000,
    tag: 'Build Sẵn',
    stock: 'Còn hàng',
    warranty: 'Bảo hành theo linh kiện',
    specs: 'Ryzen 5 5600 • RTX 4060 8GB • 32GB RAM • 1TB SSD • PSU 650W',
    shortDesc:
      'Bộ PC gaming hiệu năng cao, chơi mượt nhiều tựa game phổ biến ở độ phân giải Full HD và 2K.',
    suitableFor: 'Gaming, livestream, edit video cơ bản',
    image:
      'https://i.pinimg.com/736x/e9/97/4c/e9974c307fb5d9e3ba94c778d4d7c0fc.jpg',
    rating: 4.8,
  },
  {
    id: 9,
    brand: 'Máy Tính Vũ Dũng',
    name: 'PC Gaming Intel i5 RTX 3060',
    category: 'PC Gaming',
    price: 21990000,
    oldPrice: 24990000,
    tag: 'Giá Tốt',
    stock: 'Còn hàng',
    warranty: 'Bảo hành theo linh kiện',
    specs: 'Intel Core i5 • RTX 3060 12GB • 16GB RAM • 1TB SSD • Case RGB',
    shortDesc:
      'Cấu hình phù hợp game thủ cần PC mạnh, ổn định, dễ nâng cấp và có ngoại hình gaming bắt mắt.',
    suitableFor: 'Gaming Full HD, học IT, làm việc đa nhiệm',
    image:
      'https://i.pinimg.com/736x/28/d7/07/28d7079a65186eb90873ede6ddda9715.jpg',
    rating: 4.7,
  },
  {
    id: 10,
    brand: 'Máy Tính Vũ Dũng',
    name: 'PC Đồ Họa Creator Pro RTX 4070',
    category: 'PC Đồ Họa',
    price: 32990000,
    oldPrice: 36990000,
    tag: 'Creator',
    stock: 'Còn hàng',
    warranty: 'Bảo hành theo linh kiện',
    specs:
      'Intel Core i7 • RTX 4070 12GB • 32GB RAM • 2TB SSD • Tản nhiệt cao cấp',
    shortDesc:
      'Bộ PC chuyên cho thiết kế, dựng video, render, chỉnh ảnh, làm 3D và các tác vụ sáng tạo nặng.',
    suitableFor: 'Designer, editor, kiến trúc, 3D, studio',
    image:
      'https://nguyencongpc.vn/media/product/27778-pc-gaming-intel-core-i9-14900k-ram-32gb-rtx-4070-ti-16gb-7.jpg',
    rating: 4.9,
  },
  {
    id: 11,
    brand: 'Máy Tính Vũ Dũng',
    name: 'PC Văn Phòng Intel Core i5',
    category: 'PC Văn Phòng',
    price: 8990000,
    oldPrice: 10990000,
    tag: 'Văn Phòng',
    stock: 'Còn hàng',
    warranty: 'Bảo hành theo linh kiện',
    specs: 'Intel Core i5 • 16GB RAM • 512GB SSD • Case gọn • WiFi tùy chọn',
    shortDesc:
      'Máy bộ văn phòng ổn định, chạy nhanh, phù hợp doanh nghiệp, kế toán, bán hàng và học tập tại nhà.',
    suitableFor: 'Văn phòng, doanh nghiệp, học online',
    image:
      'https://maytinhthienloi.com/files/sanpham/588/1/jpg/pc-van-phong-do-hoa-nhe-core-i5-12400-ram-8gb-ssd-256gb-h610m-k-d4.jpg',
    rating: 4.6,
  },
  {
    id: 12,
    brand: 'Samsung',
    name: 'Màn Hình Samsung Odyssey G5 27 inch',
    category: 'Phụ Kiện',
    price: 5990000,
    oldPrice: 6990000,
    tag: 'Màn Hình',
    stock: 'Còn hàng',
    warranty: 'Bảo hành 24 tháng',
    specs: '27 inch • QHD • 144Hz • Tấm nền cong • Phù hợp gaming',
    shortDesc:
      'Màn hình gaming lớn, tần số quét cao, giúp trải nghiệm game và làm việc đa nhiệm thoải mái hơn.',
    suitableFor: 'Gaming, làm việc đa màn hình, giải trí',
    image:
      'https://product.hstatic.net/200000837185/product/vn-odyssey-g5-g50d-ls27dg502eexxv-540378887_28ad37f50a5f481d9a943527817234ba_master.png',
    rating: 4.7,
  },
];

const categories = [
  'Tất cả',
  'Gaming Laptop',
  'Laptop Văn Phòng',
  'PC Gaming',
  'PC Đồ Họa',
  'PC Văn Phòng',
  'Phụ Kiện',
];

function formatPrice(value) {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(value);
}

function Header({ cartCount }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const nav = ['Sản phẩm', 'Khuyến mãi', 'Tư vấn AI', 'Hướng dẫn mua hàng'];

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg">
            <Laptop size={24} />
          </div>
          <div>
            <h1 className="text-xl font-black tracking-tight text-slate-950">
              Máy Tính Vũ Dũng
            </h1>
            <p className="text-xs font-medium text-slate-500">
              Laptop • PC • Linh kiện
            </p>
          </div>
        </div>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-700 lg:flex">
          {nav.map((item) => (
            <a
              key={item}
              href={item === 'Tư vấn AI' ? '#ai-chat' : '#products'}
              className="transition hover:text-blue-600"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden rounded-2xl border border-slate-200 px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-blue-300 hover:text-blue-600 md:block">
            Hotline: 0900 123 456
          </button>
          <a
            href="#checkout"
            className="relative rounded-2xl bg-slate-950 p-3 text-white shadow-lg transition hover:bg-blue-600"
          >
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs font-black">
                {cartCount}
              </span>
            )}
          </a>
          <button
            className="rounded-2xl border border-slate-200 p-3 lg:hidden"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        >
          <div
            className="ml-auto h-full w-80 bg-white p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-8 flex items-center justify-between">
              <strong className="text-lg">Menu</strong>
              <button onClick={() => setMobileOpen(false)}>
                <X />
              </button>
            </div>
            <div className="space-y-4">
              {nav.map((item) => (
                <a
                  key={item}
                  href={item === 'Tư vấn AI' ? '#ai-chat' : '#products'}
                  className="block rounded-xl bg-slate-50 p-4 font-bold text-slate-700"
                  onClick={() => setMobileOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 opacity-30">
        <img
          src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1800&auto=format&fit=crop"
          alt="Computer setup"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-blue-950/40" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold backdrop-blur">
            <Sparkles size={18} /> Chọn máy phù hợp theo nhu cầu và ngân sách
          </div>
          <h2 className="max-w-3xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
            Mua laptop, PC và linh kiện dễ hơn tại Máy Tính Vũ Dũng.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Chuyên laptop văn phòng, laptop gaming, PC đồ họa, PC gaming và phụ
            kiện máy tính. Giá rõ ràng, cấu hình minh bạch, hỗ trợ đặt hàng
            online nhanh chóng.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-6 py-4 font-black text-white shadow-xl transition hover:bg-blue-500"
            >
              Xem sản phẩm <ChevronRight size={20} />
            </a>
            <a
              href="#ai-chat"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-4 font-black text-white backdrop-blur transition hover:bg-white/20"
            >
              Tư vấn AI <MessageCircle size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur-xl"
        >
          <div className="rounded-[1.5rem] bg-white p-5 text-slate-950">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-blue-600">
                  Flash Sale hôm nay
                </p>
                <h3 className="text-2xl font-black">Giảm đến 3.000.000đ</h3>
              </div>
              <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-black text-red-600">
                HOT
              </span>
            </div>
            <img
              className="h-56 w-full rounded-3xl object-cover"
              src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=1200&auto=format&fit=crop"
              alt="Laptop sale"
            />
            <div className="mt-5 grid grid-cols-3 gap-3 text-center">
              {['Gaming', 'Văn phòng', 'Đồ họa'].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-slate-100 p-3 text-sm font-black text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    {
      icon: ShieldCheck,
      title: 'Bảo hành rõ ràng',
      desc: 'Hỗ trợ đổi trả minh bạch',
    },
    { icon: Truck, title: 'Giao hàng toàn quốc', desc: 'Nhận hàng tại nhà' },
    {
      icon: CreditCard,
      title: 'Thanh toán linh hoạt',
      desc: 'COD hoặc chuyển khoản',
    },
    {
      icon: Headphones,
      title: 'Tư vấn nhanh',
      desc: 'Hỗ trợ chọn cấu hình phù hợp',
    },
  ];

  return (
    <section className="bg-white py-8">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {items.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="flex items-center gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-5"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
              <Icon size={24} />
            </div>
            <div>
              <h3 className="font-black text-slate-950">{title}</h3>
              <p className="text-sm text-slate-500">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProductCard({ product, onAdd, onAsk }) {
  return (
    <motion.article
      layout
      className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-2xl"
    >
      <div className="relative h-56 overflow-hidden bg-slate-100">
        <img
          src={product.image}
          alt={product.name}
          onError={(e) => {
            e.currentTarget.src = fallbackImage;
          }}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />
        <span className="absolute left-4 top-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-black text-white shadow-lg">
          {product.tag}
        </span>
      </div>
      <div className="p-5">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-600">
            {product.category}
          </span>
          <span className="flex items-center gap-1 text-sm font-bold text-amber-500">
            <Star size={16} fill="currentColor" /> {product.rating}
          </span>
        </div>

        <p className="mb-1 text-sm font-bold text-blue-600">{product.brand}</p>

        <h3 className="text-xl font-black tracking-tight text-slate-950">
          {product.name}
        </h3>

        <p className="mt-2 min-h-12 text-sm leading-6 text-slate-500">
          {product.specs}
        </p>

        <p className="mt-3 text-sm leading-6 text-slate-600">
          {product.shortDesc}
        </p>

        <div className="mt-4 flex flex-wrap gap-2 text-xs font-bold">
          <span className="rounded-full bg-green-100 px-3 py-1 text-green-700">
            {product.stock}
          </span>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-600">
            {product.warranty}
          </span>
        </div>

        <div className="mt-4 flex items-end gap-3">
          <strong className="text-2xl font-black text-blue-600">
            {formatPrice(product.price)}
          </strong>
          <span className="text-sm font-bold text-slate-400 line-through">
            {formatPrice(product.oldPrice)}
          </span>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <button
            onClick={() => onAdd(product)}
            className="rounded-2xl bg-slate-950 px-4 py-3 text-sm font-black text-white transition hover:bg-blue-600"
          >
            Thêm giỏ
          </button>
          <button
            onClick={() => onAsk(product)}
            className="rounded-2xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm font-black text-blue-700 transition hover:bg-blue-100"
          >
            Hỏi AI
          </button>
        </div>
      </div>
    </motion.article>
  );
}

function Products({ onAdd, onAsk }) {
  const [query, setQuery] = useState('');
  const [active, setActive] = useState('Tất cả');

  const filtered = useMemo(() => {
    return products.filter((item) => {
      const matchCategory = active === 'Tất cả' || item.category === active;
      const matchQuery = [item.name, item.category, item.specs, item.brand]
        .join(' ')
        .toLowerCase()
        .includes(query.toLowerCase());
      return matchCategory && matchQuery;
    });
  }, [active, query]);

  return (
    <section id="products" className="bg-slate-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="mb-2 font-black uppercase tracking-[0.2em] text-blue-600">
              Sản phẩm nổi bật
            </p>
            <h2 className="text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
              Chọn máy phù hợp với bạn
            </h2>
          </div>
          <div className="relative w-full lg:w-96">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={20}
            />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Tìm laptop, PC, RTX, RAM..."
              className="w-full rounded-2xl border border-slate-200 bg-white py-4 pl-12 pr-4 font-semibold outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
            />
          </div>
        </div>

        <div className="mb-8 flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-5 py-3 text-sm font-black transition ${
                active === cat
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-slate-700 hover:bg-blue-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAdd={onAdd}
              onAsk={onAsk}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function PromoSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-[2rem] bg-gradient-to-br from-blue-600 to-cyan-500 p-8 text-white shadow-xl lg:col-span-2">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] opacity-90">
              Khuyến mãi
            </p>
            <h2 className="max-w-2xl text-3xl font-black md:text-4xl">
              Mua laptop hôm nay, nhận ưu đãi phụ kiện và hỗ trợ cài đặt phần
              mềm cơ bản.
            </h2>
            <p className="mt-4 max-w-2xl text-blue-50">
              Áp dụng cho một số dòng laptop văn phòng, gaming và PC build sẵn.
              Liên hệ shop để kiểm tra sản phẩm đang có ưu đãi phù hợp với ngân
              sách của bạn.
            </p>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8">
            <Cpu className="mb-5 text-blue-600" size={42} />
            <h3 className="text-2xl font-black text-slate-950">
              Tư vấn cấu hình
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              Không biết chọn CPU, RAM, SSD hay VGA? Shop sẽ tư vấn cấu hình dễ
              hiểu theo nhu cầu sử dụng của bạn.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CartPanel({ cart, setCart }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  function removeItem(id) {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <section id="checkout" className="bg-slate-950 py-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="mb-2 font-black uppercase tracking-[0.2em] text-cyan-400">
            Giỏ hàng
          </p>
          <h2 className="text-3xl font-black md:text-5xl">
            Đặt hàng online nhanh
          </h2>
          <p className="mt-4 leading-8 text-slate-300">
            Khách có thể thêm sản phẩm vào giỏ, để lại thông tin và đội ngũ tư
            vấn sẽ liên hệ xác nhận đơn hàng.
          </p>

          <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/10 p-5 backdrop-blur">
            {cart.length === 0 ? (
              <p className="text-slate-300">Chưa có sản phẩm nào trong giỏ.</p>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4 text-slate-950"
                  >
                    <div>
                      <strong>{item.name}</strong>
                      <p className="text-sm text-slate-500">
                        Số lượng: {item.qty}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-black text-blue-600">
                        {formatPrice(item.price * item.qty)}
                      </p>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-sm font-bold text-red-500"
                      >
                        Xóa
                      </button>
                    </div>
                  </div>
                ))}
                <div className="flex justify-between border-t border-white/20 pt-4 text-xl font-black">
                  <span>Tổng tiền</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>
            )}
          </div>
        </div>

        <form className="rounded-[2rem] bg-white p-6 text-slate-950 shadow-2xl">
          <h3 className="mb-5 text-2xl font-black">Thông tin đặt hàng</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <input
              className="rounded-2xl border border-slate-200 p-4 font-semibold outline-none focus:border-blue-400"
              placeholder="Họ và tên"
            />
            <input
              className="rounded-2xl border border-slate-200 p-4 font-semibold outline-none focus:border-blue-400"
              placeholder="Số điện thoại"
            />
            <input
              className="rounded-2xl border border-slate-200 p-4 font-semibold outline-none focus:border-blue-400 md:col-span-2"
              placeholder="Email"
            />
            <input
              className="rounded-2xl border border-slate-200 p-4 font-semibold outline-none focus:border-blue-400 md:col-span-2"
              placeholder="Địa chỉ nhận hàng"
            />
            <select className="rounded-2xl border border-slate-200 p-4 font-semibold outline-none focus:border-blue-400 md:col-span-2">
              <option>Thanh toán khi nhận hàng</option>
              <option>Chuyển khoản ngân hàng</option>
              <option>Cần nhân viên gọi tư vấn trước</option>
            </select>
          </div>
          <button
            type="button"
            className="mt-5 w-full rounded-2xl bg-blue-600 px-6 py-4 font-black text-white shadow-xl transition hover:bg-blue-500"
          >
            Gửi yêu cầu đặt hàng
          </button>
          <p className="mt-4 text-center text-sm text-slate-500">
            Sau khi gửi thông tin, shop sẽ liên hệ để xác nhận sản phẩm, giá bán
            và phương thức giao hàng.
          </p>
        </form>
      </div>
    </section>
  );
}

function AIChat({ suggestedProduct }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'bot',
      text: 'Xin chào! Bạn cần máy để học tập, văn phòng, gaming hay đồ họa? Cho mình biết ngân sách, mình sẽ gợi ý cấu hình phù hợp.',
    },
  ]);
  const [text, setText] = useState('');

  React.useEffect(() => {
    if (suggestedProduct) {
      setOpen(true);
      setMessages((prev) => [
        ...prev,
        {
          role: 'user',
          text: `Tư vấn thêm cho tôi về ${suggestedProduct.name}`,
        },
        {
          role: 'bot',
          text: `${
            suggestedProduct.name
          } phù hợp nếu bạn cần ${suggestedProduct.category.toLowerCase()}. Cấu hình chính: ${
            suggestedProduct.specs
          }. Giá hiện tại ${formatPrice(
            suggestedProduct.price
          )}. Bạn muốn dùng máy cho công việc gì và ngân sách tối đa bao nhiêu?`,
        },
      ]);
    }
  }, [suggestedProduct]);

  function send() {
    if (!text.trim()) return;

    const userText = text.trim();
    setText('');

    setMessages((prev) => [
      ...prev,
      { role: 'user', text: userText },
      {
        role: 'bot',
        text: 'Mình đã nhận thông tin. Shop sẽ hỗ trợ tư vấn cấu hình, giá bán, khuyến mãi và cách đặt hàng phù hợp cho bạn.',
      },
    ]);
  }

  return (
    <div id="ai-chat" className="fixed bottom-5 right-5 z-50">
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-3 rounded-full bg-blue-600 px-5 py-4 font-black text-white shadow-2xl transition hover:bg-blue-500"
        >
          <MessageCircle /> Tư vấn AI
        </button>
      )}

      {open && (
        <div className="w-[calc(100vw-2.5rem)] max-w-sm overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-2xl">
          <div className="flex items-center justify-between bg-slate-950 p-4 text-white">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600">
                <Bot />
              </div>
              <div>
                <strong>Tư vấn AI</strong>
                <p className="text-xs text-slate-300">
                  Hỗ trợ chọn máy phù hợp
                </p>
              </div>
            </div>
            <button onClick={() => setOpen(false)}>
              <X size={20} />
            </button>
          </div>

          <div className="h-80 space-y-3 overflow-y-auto bg-slate-50 p-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex gap-2 ${
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {message.role === 'bot' && (
                  <Bot className="mt-2 shrink-0 text-blue-600" size={18} />
                )}
                <div
                  className={`max-w-[82%] rounded-2xl p-3 text-sm leading-6 ${
                    message.role === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-slate-700 shadow-sm'
                  }`}
                >
                  {message.text}
                </div>
                {message.role === 'user' && (
                  <User className="mt-2 shrink-0 text-slate-500" size={18} />
                )}
              </div>
            ))}
          </div>

          <div className="flex gap-2 border-t border-slate-200 p-3">
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && send()}
              placeholder="Nhập nhu cầu của bạn..."
              className="flex-1 rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold outline-none focus:border-blue-400"
            />
            <button
              onClick={send}
              className="rounded-2xl bg-blue-600 p-3 text-white"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-white py-10">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-4 text-sm text-slate-500 md:flex-row lg:px-8">
        <p>
          © 2026 Máy Tính Vũ Dũng. Website bán laptop, PC, linh kiện và phụ kiện
          máy tính.
        </p>
        <p>
          Địa chỉ demo: Hà Nội • Hotline: 0900 123 456 • Email:
          support@computerstore.vn
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  const [cart, setCart] = useState([]);
  const [suggestedProduct, setSuggestedProduct] = useState(null);

  function addToCart(product) {
    setCart((prev) => {
      const found = prev.find((item) => item.id === product.id);

      if (found) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }

      return [...prev, { ...product, qty: 1 }];
    });
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-950">
      <Header cartCount={cart.reduce((sum, item) => sum + item.qty, 0)} />
      <Hero />
      <TrustBar />
      <Products onAdd={addToCart} onAsk={setSuggestedProduct} />
      <PromoSection />
      <CartPanel cart={cart} setCart={setCart} />
      <Footer />
      <AIChat suggestedProduct={suggestedProduct} />
    </div>
  );
}
