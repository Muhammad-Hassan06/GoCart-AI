import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding GoCart AI database...');

  // 1. Create Dummy User
  const user = await prisma.user.upsert({
    where: { id: 'user_default_seller' },
    update: {},
    create: {
      id: 'user_default_seller',
      name: 'Happy Shop Owner',
      email: 'happyshop@example.com',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500',
    },
  });

  // 2. Create Dummy Store
  const store = await prisma.store.upsert({
    where: { id: 'store_happy_shop' },
    update: {
      status: 'approved',
      isActive: true,
    },
    create: {
      id: 'store_happy_shop',
      userId: user.id,
      name: 'Happy Shop',
      description: 'At Happy Shop, we believe shopping should be simple, smart, and satisfying. Top-notch electronics, accessories & home lifestyle products.',
      username: 'happyshop',
      address: '123 Tech Avenue, Silicon Valley, CA',
      status: 'approved',
      isActive: true,
      logo: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500',
      email: 'happyshop@example.com',
      contact: '+1 800-555-0199',
    },
  });

  // 3. Sample Products Data
  const sampleProducts = [
    {
      id: 'prod_1',
      name: 'Modern Table Lamp',
      description: 'Modern table lamp with a sleek minimalist design. Perfect for any ambient office or bedroom desk lighting.',
      mrp: 49.99,
      price: 29.99,
      images: [
        'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600',
        'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600',
      ],
      category: 'Decoration',
      inStock: true,
    },
    {
      id: 'prod_2',
      name: 'Smart Speaker Gray',
      description: 'High-definition voice controlled smart speaker with immersive 360-degree deep bass acoustics.',
      mrp: 59.99,
      price: 39.99,
      images: [
        'https://images.unsplash.com/photo-1589003077984-894e133dabab?w=600',
      ],
      category: 'Speakers',
      inStock: true,
    },
    {
      id: 'prod_3',
      name: 'Smart Watch White Edition',
      description: 'Water-resistant fitness smart watch featuring real-time heart rate monitoring, OLED display & long battery life.',
      mrp: 89.99,
      price: 59.99,
      images: [
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600',
      ],
      category: 'Watch',
      inStock: true,
    },
    {
      id: 'prod_4',
      name: 'Wireless Noise Canceling Headphones',
      description: 'Premium over-ear wireless Bluetooth headphones with active noise cancellation and 40 hours battery backup.',
      mrp: 129.99,
      price: 89.99,
      images: [
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600',
      ],
      category: 'Headphones',
      inStock: true,
    },
    {
      id: 'prod_5',
      name: 'Pro Smart Watch Black',
      description: 'Advanced sports tracker smartwatch with GPS navigation, blood oxygen sensor and custom watch faces.',
      mrp: 99.99,
      price: 69.99,
      images: [
        'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600',
      ],
      category: 'Watch',
      inStock: true,
    },
    {
      id: 'prod_6',
      name: 'Smart Security Camera HD',
      description: '1080p indoor Wi-Fi smart security camera with night vision, motion detection and 2-way audio communication.',
      mrp: 69.99,
      price: 44.99,
      images: [
        'https://images.unsplash.com/photo-1557862921-37829c790f19?w=600',
      ],
      category: 'Decoration',
      inStock: true,
    },
    {
      id: 'prod_7',
      name: 'Precision Smart Stylus Pen',
      description: 'Ultra-responsive active digital pen for tablets & touchscreen devices with palm rejection and magnetic snap.',
      mrp: 79.99,
      price: 49.99,
      images: [
        'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=600',
      ],
      category: 'Decoration',
      inStock: true,
    },
    {
      id: 'prod_8',
      name: 'RGB Wireless Gaming Mouse',
      description: 'Ergonomic 16,000 DPI optical wireless gaming mouse with customizable RGB lighting and programmable side buttons.',
      mrp: 49.99,
      price: 34.99,
      images: [
        'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600',
      ],
      category: 'Mouse',
      inStock: true,
    },
    {
      id: 'prod_9',
      name: 'True Wireless Earbuds ANC',
      description: 'Compact wireless earbuds with touch control, low-latency gaming mode and IPX5 sweat resistance.',
      mrp: 69.99,
      price: 42.99,
      images: [
        'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600',
      ],
      category: 'Earbuds',
      inStock: true,
    },
  ];

  for (const item of sampleProducts) {
    await prisma.product.upsert({
      where: { id: item.id },
      update: {
        name: item.name,
        description: item.description,
        mrp: item.mrp,
        price: item.price,
        images: item.images,
        category: item.category,
        inStock: item.inStock,
      },
      create: {
        id: item.id,
        name: item.name,
        description: item.description,
        mrp: item.mrp,
        price: item.price,
        images: item.images,
        category: item.category,
        inStock: item.inStock,
        storeId: store.id,
      },
    });
  }

  console.log('Successfully seeded products into Neon PostgreSQL database!');
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
