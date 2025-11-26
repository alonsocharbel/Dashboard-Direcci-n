import { BarChart3, Store } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 bg-primary-600 rounded-lg">
              <span className="text-white font-bold text-lg">T1</span>
            </div>
            <div>
              <h1 className="text-lg font-semibold text-gray-900">Dashboard Tienda en Línea</h1>
              <p className="text-xs text-gray-500">Panel ejecutivo T1</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-lg border border-blue-200">
              <Store className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">Solo Tienda en Línea</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <BarChart3 className="w-4 h-4" />
              <span>Datos actualizados hace 5 min</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
