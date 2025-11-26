import { useState } from 'react';
import { SectionCard, SearchInput, DataTable } from '../../common';
import { SellerDetailModal } from '../../seller/SellerDetailModal';
import { topSellers, searchSellers } from '../../../data/mockSellers';
import type { Seller } from '../../../types';
import { formatCurrency, formatNumber, formatPercent, formatDate } from '../../../utils/formatters';

type SortField = 'gmv' | 'orders' | 'products' | 'conversionRate';
type SortOrder = 'asc' | 'desc';

export function TopSellersSection() {
  const [selectedSeller, setSelectedSeller] = useState<Seller | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Seller[]>([]);
  const [sortField, setSortField] = useState<SortField>('gmv');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');
  const [showCount, setShowCount] = useState(20);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.length >= 3) {
      const results = searchSellers(query);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const handleSellerClick = (seller: Seller) => {
    setSelectedSeller(seller);
    setIsModalOpen(true);
    setSearchQuery('');
    setSearchResults([]);
  };

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('desc');
    }
  };

  // Sort sellers
  const sortedSellers = [...topSellers].sort((a, b) => {
    const multiplier = sortOrder === 'asc' ? 1 : -1;
    return (a[sortField] - b[sortField]) * multiplier;
  });

  const displayedSellers = sortedSellers.slice(0, showCount);

  const columns = [
    {
      header: '#',
      accessor: (_: Seller, index: number) => (
        <span className="font-mono text-sm text-gray-500">{index + 1}</span>
      ),
      width: '50px',
    },
    {
      header: 'Seller',
      accessor: (seller: Seller) => (
        <div>
          <div className="font-medium text-gray-900">{seller.name}</div>
          <div className="text-xs text-gray-500">{seller.email}</div>
        </div>
      ),
      width: '250px',
    },
    {
      header: 'Plan',
      accessor: (seller: Seller) => (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
          seller.plan === 'Avanzado' ? 'bg-purple-100 text-purple-800' :
          seller.plan === 'Básico' ? 'bg-blue-100 text-blue-800' :
          'bg-gray-100 text-gray-800'
        }`}>
          {seller.plan}
        </span>
      ),
    },
    {
      header: 'Registro',
      accessor: (seller: Seller) => (
        <span className="text-sm text-gray-600">{formatDate(seller.registrationDate)}</span>
      ),
    },
    {
      header: 'Tiendas',
      accessor: (seller: Seller) => (
        <span className="text-sm font-medium text-gray-900">{seller.storeCount}</span>
      ),
    },
    {
      header: () => (
        <button
          onClick={() => handleSort('gmv')}
          className="flex items-center gap-1 text-xs font-medium text-gray-500 uppercase hover:text-gray-700"
        >
          GMV
          {sortField === 'gmv' && (
            <span className="text-blue-600">{sortOrder === 'asc' ? '↑' : '↓'}</span>
          )}
        </button>
      ),
      accessor: (seller: Seller) => (
        <span className="text-sm font-semibold text-gray-900">{formatCurrency(seller.gmv)}</span>
      ),
      align: 'right' as const,
    },
    {
      header: () => (
        <button
          onClick={() => handleSort('orders')}
          className="flex items-center gap-1 text-xs font-medium text-gray-500 uppercase hover:text-gray-700"
        >
          Pedidos
          {sortField === 'orders' && (
            <span className="text-blue-600">{sortOrder === 'asc' ? '↑' : '↓'}</span>
          )}
        </button>
      ),
      accessor: (seller: Seller) => (
        <span className="text-sm text-gray-900">{formatNumber(seller.orders)}</span>
      ),
      align: 'right' as const,
    },
    {
      header: () => (
        <button
          onClick={() => handleSort('products')}
          className="flex items-center gap-1 text-xs font-medium text-gray-500 uppercase hover:text-gray-700"
        >
          Productos
          {sortField === 'products' && (
            <span className="text-blue-600">{sortOrder === 'asc' ? '↑' : '↓'}</span>
          )}
        </button>
      ),
      accessor: (seller: Seller) => (
        <span className="text-sm text-gray-900">{formatNumber(seller.products)}</span>
      ),
      align: 'right' as const,
    },
    {
      header: 'Canales',
      accessor: (seller: Seller) => (
        <span className="text-sm text-gray-900">{seller.channels}</span>
      ),
      align: 'center' as const,
    },
    {
      header: () => (
        <button
          onClick={() => handleSort('conversionRate')}
          className="flex items-center gap-1 text-xs font-medium text-gray-500 uppercase hover:text-gray-700"
        >
          Conv.
          {sortField === 'conversionRate' && (
            <span className="text-blue-600">{sortOrder === 'asc' ? '↑' : '↓'}</span>
          )}
        </button>
      ),
      accessor: (seller: Seller) => (
        <span className="text-sm text-gray-900">{formatPercent(seller.conversionRate)}</span>
      ),
      align: 'right' as const,
    },
  ];

  return (
    <>
      <SectionCard
        title="Top Sellers"
        subtitle="Sellers con mejor performance ordenados por GMV"
      >
        <div className="space-y-4">
          {/* Buscador */}
          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <SearchInput
                value={searchQuery}
                onChange={handleSearch}
                placeholder="Buscar seller por nombre, email o ID..."
              />
              {searchResults.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-96 overflow-y-auto">
                  {searchResults.map(seller => (
                    <button
                      key={seller.id}
                      onClick={() => handleSellerClick(seller)}
                      className="w-full px-4 py-3 text-left hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
                    >
                      <div className="font-medium text-gray-900">{seller.name}</div>
                      <div className="text-sm text-gray-500">{seller.email}</div>
                      <div className="text-xs text-gray-400 mt-1">
                        GMV: {formatCurrency(seller.gmv)} • {seller.orders} pedidos
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="flex items-center gap-2">
              <label className="text-sm text-gray-600">Mostrar:</label>
              <select
                value={showCount}
                onChange={(e) => setShowCount(Number(e.target.value))}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value={10}>Top 10</option>
                <option value={20}>Top 20</option>
                <option value={50}>Top 50</option>
              </select>
            </div>
          </div>

          {/* Tabla */}
          <DataTable
            data={displayedSellers}
            columns={columns}
            onRowClick={handleSellerClick}
          />

          {showCount < topSellers.length && (
            <div className="text-center pt-4">
              <button
                onClick={() => setShowCount(Math.min(showCount + 20, topSellers.length))}
                className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
              >
                Cargar más sellers ({topSellers.length - showCount} restantes)
              </button>
            </div>
          )}
        </div>
      </SectionCard>

      {/* Modal de detalle */}
      <SellerDetailModal
        seller={selectedSeller}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedSeller(null);
        }}
      />
    </>
  );
}
