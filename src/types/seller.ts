// Seller types
export type PlanName = 'Free' | 'Básico' | 'Avanzado';

export interface Store {
  id: string;
  name: string;
  domain: string;
  status: 'active' | 'inactive';
  plan: PlanName;
  gmv: number;
  orders: number;
  products: number;
  conversionRate: number;
  createdAt: string;
}

export interface SellerSatisfaction {
  lastNPS?: number;
  lastNPSType?: string;
  lastNPSDate?: string;
  lastCSAT?: number;
  lastCSATType?: string;
  lastCSATDate?: string;
}

export interface Seller {
  id: string;
  name: string;
  email: string;
  plan: PlanName;
  registrationDate: string;
  storeCount: number;
  gmv: number;
  orders: number;
  products: number;
  channels: number;
  channelsList: string[];
  conversionRate: number;
  lastActivity: string;
  stores: Store[];
  satisfaction: SellerSatisfaction;
}

export interface SellerTableRow {
  rank: number;
  id: string;
  name: string;
  email: string;
  plan: PlanName;
  registrationDate: string;
  storeCount: number;
  gmv: number;
  orders: number;
  products: number;
  channels: number;
  conversionRate: number;
  lastActivity: string;
}
