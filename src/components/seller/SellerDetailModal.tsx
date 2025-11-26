import { Modal } from '../common/Modal';
import type { Seller } from '../../types';
import { formatCurrency, formatNumber, formatPercent, formatDate } from '../../utils/formatters';
import { Calendar, ShoppingBag, Package, TrendingUp, Store, CheckCircle2, XCircle } from 'lucide-react';

interface SellerDetailModalProps {
  seller: Seller | null;
  isOpen: boolean;
  onClose: () => void;
}

export function SellerDetailModal({ seller, isOpen, onClose }: SellerDetailModalProps) {
  if (!seller) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={seller.name} size="large">
      <div className="space-y-6">
        {/* Información General */}
        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-gray-500 mb-1">Email</div>
              <div className="text-sm font-medium text-gray-900">{seller.email}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">ID</div>
              <div className="text-sm font-mono text-gray-900">{seller.id}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Plan Actual</div>
              <div className="text-sm">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  seller.plan === 'Avanzado' ? 'bg-purple-100 text-purple-800' :
                  seller.plan === 'Básico' ? 'bg-blue-100 text-blue-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {seller.plan}
                </span>
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Registrado</div>
              <div className="text-sm font-medium text-gray-900">
                {formatDate(seller.registrationDate)}
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Última Actividad</div>
              <div className="text-sm font-medium text-gray-900">
                {formatDate(seller.lastActivity)}
              </div>
            </div>
          </div>
        </div>

        {/* KPIs del Seller */}
        <div className="grid grid-cols-5 gap-4">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border border-blue-200">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-blue-600" />
              <div className="text-xs font-medium text-blue-900">GMV</div>
            </div>
            <div className="text-xl font-bold text-blue-900">{formatCurrency(seller.gmv)}</div>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 border border-green-200">
            <div className="flex items-center gap-2 mb-2">
              <ShoppingBag className="w-4 h-4 text-green-600" />
              <div className="text-xs font-medium text-green-900">Pedidos</div>
            </div>
            <div className="text-xl font-bold text-green-900">{formatNumber(seller.orders)}</div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 border border-purple-200">
            <div className="flex items-center gap-2 mb-2">
              <Package className="w-4 h-4 text-purple-600" />
              <div className="text-xs font-medium text-purple-900">Productos</div>
            </div>
            <div className="text-xl font-bold text-purple-900">{formatNumber(seller.products)}</div>
          </div>
          
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4 border border-orange-200">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-orange-600" />
              <div className="text-xs font-medium text-orange-900">Conversión</div>
            </div>
            <div className="text-xl font-bold text-orange-900">{formatPercent(seller.conversionRate)}</div>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg p-4 border border-indigo-200">
            <div className="flex items-center gap-2 mb-2">
              <Store className="w-4 h-4 text-indigo-600" />
              <div className="text-xs font-medium text-indigo-900">Canales</div>
            </div>
            <div className="text-xl font-bold text-indigo-900">{seller.channels}</div>
          </div>
        </div>

        {/* Tiendas */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <Store className="w-5 h-5" />
            Tiendas ({seller.storeCount})
          </h3>
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nombre</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Estado</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Plan</th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">GMV</th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Conversión</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {seller.stores.map(store => (
                  <tr key={store.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">{store.name}</td>
                    <td className="px-4 py-3 text-sm">
                      {store.status === 'active' ? (
                        <span className="inline-flex items-center gap-1 text-green-700">
                          <CheckCircle2 className="w-4 h-4" />
                          Activa
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-gray-500">
                          <XCircle className="w-4 h-4" />
                          Inactiva
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                        store.plan === 'Avanzado' ? 'bg-purple-100 text-purple-800' :
                        store.plan === 'Básico' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {store.plan}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-right font-medium text-gray-900">
                      {formatCurrency(store.gmv)}
                    </td>
                    <td className="px-4 py-3 text-sm text-right text-gray-900">
                      {formatPercent(store.conversionRate)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Canales Conectados */}
        {seller.channelsList && seller.channelsList.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Canales Conectados ({seller.channels})
            </h3>
            <div className="flex flex-wrap gap-2">
              {seller.channelsList.map(channel => (
                <span
                  key={channel}
                  className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                >
                  ✓ {channel}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Satisfacción */}
        {(seller.satisfaction.lastNPS || seller.satisfaction.lastCSAT) && (
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Satisfacción
            </h3>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 space-y-3">
              {seller.satisfaction.lastNPS && (
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-gray-900">Último NPS</div>
                    <div className="text-xs text-gray-500 mt-0.5">
                      {seller.satisfaction.lastNPSType} • {formatDate(seller.satisfaction.lastNPSDate || '')}
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">
                    {seller.satisfaction.lastNPS}/10
                  </div>
                </div>
              )}
              {seller.satisfaction.lastCSAT && (
                <div className="flex items-center justify-between border-t border-gray-200 pt-3">
                  <div>
                    <div className="text-sm font-medium text-gray-900">Último CSAT</div>
                    <div className="text-xs text-gray-500 mt-0.5">
                      {seller.satisfaction.lastCSATType} • {formatDate(seller.satisfaction.lastCSATDate || '')}
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-green-600">
                    {seller.satisfaction.lastCSAT}/5
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
}
