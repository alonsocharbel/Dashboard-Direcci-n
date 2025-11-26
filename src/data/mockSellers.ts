import type { Seller, PlanName } from '../types';

// Helper to generate random date in the past
function randomDate(daysAgo: number): string {
  const date = new Date();
  date.setDate(date.getDate() - Math.floor(Math.random() * daysAgo));
  return date.toISOString();
}

// Helper to generate random stores for a seller
function generateStores(count: number, sellerPlan: PlanName): Seller['stores'] {
  const stores: Seller['stores'] = [];
  const planOptions: PlanName[] = ['Free', 'Básico', 'Avanzado'];
  
  for (let i = 0; i < count; i++) {
    const isFirst = i === 0;
    stores.push({
      id: `store_${Math.random().toString(36).substr(2, 9)}`,
      name: isFirst ? 'Tienda Principal' : `Tienda ${i + 1}`,
      domain: `tienda${i + 1}.t1.mx`,
      status: Math.random() > 0.2 ? 'active' : 'inactive',
      plan: isFirst ? sellerPlan : planOptions[Math.floor(Math.random() * planOptions.length)],
      gmv: Math.floor(Math.random() * 500000) + 50000,
      orders: Math.floor(Math.random() * 2000) + 100,
      products: Math.floor(Math.random() * 500) + 20,
      conversionRate: Math.random() * 4 + 1,
      createdAt: randomDate(365),
    });
  }
  
  return stores;
}

// Channel options
const allChannels = [
  'Mercado Libre',
  'Amazon',
  'Shopify',
  'Walmart',
  'TikTok Shop',
  'WooCommerce',
  'Shein',
  'AliExpress',
];

// Generate random channels
function generateChannels(): string[] {
  const count = Math.floor(Math.random() * 5);
  const shuffled = [...allChannels].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// Top 50 sellers data
export const topSellers: Seller[] = [
  {
    id: 'seller_001',
    name: 'MegaStore MX',
    email: 'ventas@megastore.mx',
    plan: 'Avanzado',
    registrationDate: '2024-01-15',
    storeCount: 3,
    gmv: 2400000,
    orders: 8450,
    products: 1240,
    channels: 4,
    channelsList: ['Mercado Libre', 'Amazon', 'Shopify', 'Walmart'],
    conversionRate: 3.2,
    lastActivity: '2024-11-24T10:30:00',
    stores: generateStores(3, 'Avanzado'),
    satisfaction: { lastNPS: 9, lastNPSType: 'Primer pedido', lastNPSDate: '2024-08-15', lastCSAT: 4, lastCSATType: 'Soporte', lastCSATDate: '2024-11-18' },
  },
  {
    id: 'seller_002',
    name: 'Fashion Hub',
    email: 'admin@fashionhub.com',
    plan: 'Avanzado',
    registrationDate: '2024-03-03',
    storeCount: 1,
    gmv: 1800000,
    orders: 6230,
    products: 890,
    channels: 3,
    channelsList: ['Mercado Libre', 'Amazon', 'TikTok Shop'],
    conversionRate: 3.8,
    lastActivity: '2024-11-24T09:15:00',
    stores: generateStores(1, 'Avanzado'),
    satisfaction: { lastNPS: 10, lastNPSType: 'Ciclo de vida', lastNPSDate: '2024-10-20' },
  },
  {
    id: 'seller_003',
    name: 'TechGadgets',
    email: 'info@techgadgets.mx',
    plan: 'Básico',
    registrationDate: '2024-05-22',
    storeCount: 2,
    gmv: 1200000,
    orders: 4120,
    products: 456,
    channels: 2,
    channelsList: ['Amazon', 'Mercado Libre'],
    conversionRate: 2.9,
    lastActivity: '2024-11-23T18:45:00',
    stores: generateStores(2, 'Básico'),
    satisfaction: { lastNPS: 8, lastNPSType: 'Tienda creada', lastNPSDate: '2024-06-01' },
  },
  {
    id: 'seller_004',
    name: 'Casa Bella Decoración',
    email: 'contacto@casabella.com',
    plan: 'Avanzado',
    registrationDate: '2024-02-10',
    storeCount: 2,
    gmv: 980000,
    orders: 3890,
    products: 678,
    channels: 3,
    channelsList: ['Mercado Libre', 'Amazon', 'WooCommerce'],
    conversionRate: 3.5,
    lastActivity: '2024-11-24T08:00:00',
    stores: generateStores(2, 'Avanzado'),
    satisfaction: { lastNPS: 9, lastNPSType: 'Primer pedido', lastNPSDate: '2024-03-15' },
  },
  {
    id: 'seller_005',
    name: 'Deportes Total',
    email: 'ventas@deportestotal.mx',
    plan: 'Básico',
    registrationDate: '2024-04-18',
    storeCount: 1,
    gmv: 850000,
    orders: 3210,
    products: 345,
    channels: 2,
    channelsList: ['Mercado Libre', 'Amazon'],
    conversionRate: 2.7,
    lastActivity: '2024-11-24T11:20:00',
    stores: generateStores(1, 'Básico'),
    satisfaction: { lastNPS: 7, lastNPSType: 'Canal conectado', lastNPSDate: '2024-05-10' },
  },
  {
    id: 'seller_006',
    name: 'Juguetería Mágica',
    email: 'info@jugueteriamagica.com',
    plan: 'Avanzado',
    registrationDate: '2024-01-28',
    storeCount: 3,
    gmv: 780000,
    orders: 4560,
    products: 1120,
    channels: 4,
    channelsList: ['Mercado Libre', 'Amazon', 'Walmart', 'TikTok Shop'],
    conversionRate: 4.1,
    lastActivity: '2024-11-23T16:30:00',
    stores: generateStores(3, 'Avanzado'),
    satisfaction: { lastNPS: 10, lastNPSType: 'Ciclo de vida', lastNPSDate: '2024-09-01' },
  },
  {
    id: 'seller_007',
    name: 'Farmacia Online Plus',
    email: 'admin@farmaciaonlineplus.mx',
    plan: 'Básico',
    registrationDate: '2024-06-05',
    storeCount: 1,
    gmv: 720000,
    orders: 5670,
    products: 234,
    channels: 1,
    channelsList: ['Mercado Libre'],
    conversionRate: 2.4,
    lastActivity: '2024-11-24T07:45:00',
    stores: generateStores(1, 'Básico'),
    satisfaction: { lastCSAT: 5, lastCSATType: 'Soporte', lastCSATDate: '2024-10-15' },
  },
  {
    id: 'seller_008',
    name: 'Electrónica Global',
    email: 'ventas@electronicaglobal.com',
    plan: 'Avanzado',
    registrationDate: '2024-02-20',
    storeCount: 2,
    gmv: 680000,
    orders: 2340,
    products: 567,
    channels: 3,
    channelsList: ['Amazon', 'Mercado Libre', 'Shopify'],
    conversionRate: 3.3,
    lastActivity: '2024-11-24T10:00:00',
    stores: generateStores(2, 'Avanzado'),
    satisfaction: { lastNPS: 8, lastNPSType: 'Primer pedido', lastNPSDate: '2024-04-01' },
  },
  {
    id: 'seller_009',
    name: 'Belleza Natural',
    email: 'contacto@bellezanatural.mx',
    plan: 'Básico',
    registrationDate: '2024-07-12',
    storeCount: 1,
    gmv: 620000,
    orders: 3890,
    products: 189,
    channels: 2,
    channelsList: ['TikTok Shop', 'Mercado Libre'],
    conversionRate: 3.9,
    lastActivity: '2024-11-23T22:15:00',
    stores: generateStores(1, 'Básico'),
    satisfaction: { lastNPS: 9, lastNPSType: 'Tienda creada', lastNPSDate: '2024-07-20' },
  },
  {
    id: 'seller_010',
    name: 'Muebles Express',
    email: 'info@mueblesexpress.com',
    plan: 'Avanzado',
    registrationDate: '2024-03-15',
    storeCount: 2,
    gmv: 590000,
    orders: 1890,
    products: 423,
    channels: 2,
    channelsList: ['Mercado Libre', 'Amazon'],
    conversionRate: 2.1,
    lastActivity: '2024-11-24T09:30:00',
    stores: generateStores(2, 'Avanzado'),
    satisfaction: { lastNPS: 7, lastNPSType: 'Canal conectado', lastNPSDate: '2024-04-20' },
  },
];

// Generate 40 more sellers dynamically
const companyNames = [
  'Tienda Digital', 'Mundo Tech', 'Casa del Hogar', 'Estilo Único', 'Productos Premium',
  'Outlet Express', 'Mega Ofertas', 'Shop Online MX', 'Bazar Digital', 'Comercio Plus',
  'Tienda 360', 'Market Place', 'Venta Express', 'Comercio Digital', 'Tienda Virtual',
  'Shop Master', 'Venta Online', 'Digital Store', 'E-Commerce Pro', 'Tienda Elite',
  'Mega Shop', 'Super Tienda', 'Online Market', 'Tienda Express', 'Venta Total',
  'Shop Digital', 'Mercado Online', 'Tienda Pro', 'Comercio Online', 'Shop Express',
  'Digital Market', 'Tienda Master', 'Online Shop', 'Mega Tienda', 'Super Shop',
  'E-Shop Pro', 'Tienda Plus', 'Market Online', 'Shop Total', 'Digital Commerce',
];

const plans: PlanName[] = ['Free', 'Básico', 'Avanzado'];

for (let i = 11; i <= 50; i++) {
  const plan = plans[Math.floor(Math.random() * plans.length)];
  const storeCount = Math.floor(Math.random() * 3) + 1;
  const channels = generateChannels();
  
  topSellers.push({
    id: `seller_${String(i).padStart(3, '0')}`,
    name: companyNames[i - 11] || `Tienda ${i}`,
    email: `contacto@tienda${i}.mx`,
    plan,
    registrationDate: randomDate(365).split('T')[0],
    storeCount,
    gmv: Math.floor(Math.random() * 500000) + 50000,
    orders: Math.floor(Math.random() * 3000) + 100,
    products: Math.floor(Math.random() * 800) + 50,
    channels: channels.length,
    channelsList: channels,
    conversionRate: Math.random() * 3 + 1,
    lastActivity: randomDate(30),
    stores: generateStores(storeCount, plan),
    satisfaction: Math.random() > 0.3 ? {
      lastNPS: Math.floor(Math.random() * 5) + 6,
      lastNPSType: ['Cuenta creada', 'Tienda creada', 'Primer pedido', 'Ciclo de vida'][Math.floor(Math.random() * 4)],
      lastNPSDate: randomDate(180).split('T')[0],
    } : {},
  });
}

// Sort by GMV descending
topSellers.sort((a, b) => b.gmv - a.gmv);

// Search sellers function
export function searchSellers(query: string): Seller[] {
  const lowerQuery = query.toLowerCase();
  return topSellers.filter(
    seller =>
      seller.name.toLowerCase().includes(lowerQuery) ||
      seller.email.toLowerCase().includes(lowerQuery) ||
      seller.id.toLowerCase().includes(lowerQuery)
  ).slice(0, 10);
}

// Get seller by ID
export function getSellerById(id: string): Seller | undefined {
  return topSellers.find(seller => seller.id === id);
}
