// Filter types
export type DateRangeOption = '7d' | '30d' | '90d' | 'today' | 'yesterday' | 'this_month' | 'last_month' | 'custom';

export type PlanType = 'all' | 'free' | 'basic' | 'advanced';

export type SellerType = 'all' | 'online_only' | 'marketplace_only' | 'omnichannel';

export interface DateRange {
  start: Date;
  end: Date;
}

export interface Filters {
  dateRange: DateRangeOption;
  customDateRange?: DateRange;
  planType: PlanType;
  sellerType: SellerType;
}

export interface FilterOption<T> {
  value: T;
  label: string;
}
