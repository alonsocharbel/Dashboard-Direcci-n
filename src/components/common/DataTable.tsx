import { ReactNode } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

// Support both old and new column formats
interface BaseColumn<T> {
  header: string | (() => ReactNode);
  align?: 'left' | 'center' | 'right';
  width?: string;
}

interface KeyRenderColumn<T> extends BaseColumn<T> {
  key: string;
  render: (item: T) => ReactNode;
}

interface AccessorColumn<T> extends BaseColumn<T> {
  accessor: string | ((item: T, index?: number) => ReactNode);
  cell?: (value: unknown) => ReactNode;
}

type Column<T> = KeyRenderColumn<T> | AccessorColumn<T>;

function isKeyRenderColumn<T>(col: Column<T>): col is KeyRenderColumn<T> {
  return 'key' in col && 'render' in col;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  onRowClick?: (item: T) => void;
  sortKey?: string;
  sortOrder?: 'asc' | 'desc';
  onSort?: (key: string) => void;
  emptyMessage?: string;
  compact?: boolean;
}

export function DataTable<T>({
  data,
  columns,
  onRowClick,
  sortKey,
  sortOrder,
  onSort,
  emptyMessage = 'No hay datos disponibles',
  compact = false,
}: DataTableProps<T>) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const renderHeader = (col: Column<T>) => {
    if (typeof col.header === 'function') {
      return col.header();
    }
    return col.header;
  };

  const renderCell = (col: Column<T>, item: T, index: number) => {
    if (isKeyRenderColumn(col)) {
      return col.render(item);
    }

    // Handle accessor column
    if (typeof col.accessor === 'function') {
      return col.accessor(item, index);
    }

    // String accessor
    const value = (item as Record<string, unknown>)[col.accessor];
    if (col.cell) {
      return col.cell(value);
    }
    return value as ReactNode;
  };

  const getColumnKey = (col: Column<T>, index: number) => {
    if (isKeyRenderColumn(col)) {
      return col.key;
    }
    if (typeof col.accessor === 'string') {
      return col.accessor;
    }
    return `col-${index}`;
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200">
            {columns.map((col, index) => (
              <th
                key={getColumnKey(col, index)}
                className={`
                  px-4 ${compact ? 'py-2' : 'py-3'} text-xs font-semibold text-gray-500 uppercase tracking-wider
                  ${alignClasses[col.align || 'left']}
                  ${onSort ? 'cursor-pointer hover:text-gray-700' : ''}
                `}
                style={{ width: col.width }}
                onClick={() => {
                  if (onSort && isKeyRenderColumn(col)) {
                    onSort(col.key);
                  }
                }}
              >
                <div className="flex items-center gap-1">
                  {renderHeader(col)}
                  {isKeyRenderColumn(col) && sortKey === col.key && (
                    sortOrder === 'asc' ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className="px-4 py-8 text-center text-gray-500"
              >
                {emptyMessage}
              </td>
            </tr>
          ) : (
            data.map((item, rowIndex) => (
              <tr
                key={rowIndex}
                className={`
                  ${onRowClick ? 'cursor-pointer hover:bg-gray-50' : ''}
                  transition-colors
                `}
                onClick={() => onRowClick && onRowClick(item)}
              >
                {columns.map((col, colIndex) => (
                  <td
                    key={getColumnKey(col, colIndex)}
                    className={`px-4 ${compact ? 'py-2' : 'py-3'} text-sm ${alignClasses[col.align || 'left']}`}
                  >
                    {renderCell(col, item, rowIndex)}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
