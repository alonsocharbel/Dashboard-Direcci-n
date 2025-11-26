import React, { useState, useCallback, useMemo, createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import type { Filters, DateRangeOption, PlanType, SellerType } from '../types';
import { getDataByPeriod } from '../data/mockData';
import { getPhase2Data, getPhase3Data } from '../data/mockPhases';

interface FilterContextValue {
  filters: Filters;
  setDateRange: (range: DateRangeOption) => void;
  setPlanType: (plan: PlanType) => void;
  setSellerType: (type: SellerType) => void;
  resetFilters: () => void;
  isLoading: boolean;
  data: ReturnType<typeof getDataByPeriod>;
  phase2Data: ReturnType<typeof getPhase2Data>;
  phase3Data: ReturnType<typeof getPhase3Data>;
}

const defaultFilters: Filters = {
  dateRange: '30d',
  planType: 'all',
  sellerType: 'all',
};

const FilterContext = createContext<FilterContextValue | undefined>(undefined);

interface FilterProviderProps {
  children: ReactNode;
}

export function FilterProvider(props: FilterProviderProps) {
  const [filters, setFilters] = useState<Filters>(defaultFilters);
  const [isLoading, setIsLoading] = useState(false);

  const simulateLoading = useCallback(function() {
    setIsLoading(true);
    setTimeout(function() { setIsLoading(false); }, 300);
  }, []);

  const setDateRange = useCallback(function(range: DateRangeOption) {
    setFilters(function(prev) { return { ...prev, dateRange: range }; });
    simulateLoading();
  }, [simulateLoading]);

  const setPlanType = useCallback(function(plan: PlanType) {
    setFilters(function(prev) { return { ...prev, planType: plan }; });
    simulateLoading();
  }, [simulateLoading]);

  const setSellerType = useCallback(function(type: SellerType) {
    setFilters(function(prev) { return { ...prev, sellerType: type }; });
    simulateLoading();
  }, [simulateLoading]);

  const resetFilters = useCallback(function() {
    setFilters(defaultFilters);
    simulateLoading();
  }, [simulateLoading]);

  const data = useMemo(function() {
    return getDataByPeriod(filters.dateRange);
  }, [filters.dateRange]);

  const phase2Data = useMemo(function() {
    return getPhase2Data(filters.dateRange);
  }, [filters.dateRange]);

  const phase3Data = useMemo(function() {
    return getPhase3Data(filters.dateRange);
  }, [filters.dateRange]);

  const contextValue: FilterContextValue = {
    filters: filters,
    setDateRange: setDateRange,
    setPlanType: setPlanType,
    setSellerType: setSellerType,
    resetFilters: resetFilters,
    isLoading: isLoading,
    data: data,
    phase2Data: phase2Data,
    phase3Data: phase3Data,
  };

  return React.createElement(
    FilterContext.Provider,
    { value: contextValue },
    props.children
  );
}

export function useFilters(): FilterContextValue {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error('useFilters must be used within a FilterProvider');
  }
  return context;
}
