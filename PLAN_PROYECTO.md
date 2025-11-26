# Plan de Proyecto: Dashboard de Dirección T1
## Frontend React con Datos Dummy para Vercel

---

## 1. Descripción del Proyecto

### 1.1 Objetivo
Desarrollar un **frontend simulado** del Dashboard de Dirección T1 que permita:
- Visualizar todas las métricas definidas en el documento de alcance funcional
- Interactuar con filtros, pestañas y componentes de forma funcional
- Servir como **prototipo navegable** para validar UX antes de conectar el backend
- Desplegarse en Vercel para fácil acceso y revisión

### 1.2 Alcance
- ✅ Frontend 100% funcional con React
- ✅ Datos dummy realistas hardcodeados
- ✅ Filtros que modifican la vista (simulado)
- ✅ Pestañas navegables
- ✅ Gráficas interactivas
- ✅ Tabla de Top Sellers con búsqueda
- ✅ Vista de detalle de seller
- ✅ Responsive design
- ❌ NO incluye backend
- ❌ NO incluye autenticación real
- ❌ NO incluye conexión a base de datos

---

## 2. Stack Tecnológico

| Tecnología | Uso | Justificación |
|------------|-----|---------------|
| **React 18** | Framework principal | Estándar de la industria, componentes reutilizables |
| **Vite** | Build tool | Más rápido que CRA, mejor DX |
| **TypeScript** | Tipado | Mejor mantenibilidad y documentación del código |
| **Tailwind CSS** | Estilos | Desarrollo rápido, consistencia visual |
| **Recharts** | Gráficas | Librería React nativa, fácil de usar |
| **Lucide React** | Iconos | Iconos modernos y ligeros |
| **date-fns** | Manejo de fechas | Funciones de fecha ligeras |
| **Vercel** | Hosting | Deploy automático desde Git |

---

## 3. Estructura de Carpetas

```
dashboard-direccion/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx              # Header con logo T1
│   │   │   ├── Sidebar.tsx             # (opcional) navegación lateral
│   │   │   ├── TabNavigation.tsx       # Pestañas: Dirección, Uso, Negocio
│   │   │   └── FilterBar.tsx           # Filtros globales
│   │   │
│   │   ├── common/
│   │   │   ├── KPICard.tsx             # Tarjeta KPI reutilizable
│   │   │   ├── TrendIndicator.tsx      # Indicador ▲▼ de tendencia
│   │   │   ├── SemaphoreIndicator.tsx  # 🟢🟡🔴
│   │   │   ├── DateRangePicker.tsx     # Selector de fechas
│   │   │   ├── Select.tsx              # Dropdown reutilizable
│   │   │   ├── SearchInput.tsx         # Input de búsqueda
│   │   │   ├── DataTable.tsx           # Tabla genérica
│   │   │   └── Modal.tsx               # Modal reutilizable
│   │   │
│   │   ├── charts/
│   │   │   ├── FunnelChart.tsx         # Embudo de conversión
│   │   │   ├── BarChartHorizontal.tsx  # Barras horizontales
│   │   │   ├── BarChartStacked.tsx     # Barras apiladas (NPS)
│   │   │   ├── HistogramChart.tsx      # Histograma (distribución)
│   │   │   ├── LineChart.tsx           # Línea de tendencia
│   │   │   └── MiniSparkline.tsx       # Mini línea para KPIs
│   │   │
│   │   ├── sections/
│   │   │   ├── phase1/
│   │   │   │   ├── ExecutiveSummary.tsx      # Fila 1: KPIs grandes
│   │   │   │   ├── FunnelSection.tsx         # Fila 2: Funnel IA
│   │   │   │   ├── ActivationSection.tsx     # Fila 3: Config & Activación
│   │   │   │   ├── PerformanceSection.tsx    # Fila 4: Conversión & TTFS
│   │   │   │   ├── StoreStructure.tsx        # Fila 5: Tiendas y sellers
│   │   │   │   ├── SatisfactionSection.tsx   # Fila 6: NPS/CSAT/CES
│   │   │   │   ├── OmnichannelSection.tsx    # Fila 7: Canales
│   │   │   │   └── TopSellersSection.tsx     # Fila 8: Top sellers
│   │   │   │
│   │   │   ├── phase2/
│   │   │   │   ├── ActivityMetrics.tsx       # DAU/WAU/MAU
│   │   │   │   ├── RetentionChart.tsx        # Retención 30d
│   │   │   │   ├── GMVByChannel.tsx          # GMV por canal
│   │   │   │   ├── AOVSection.tsx            # Ticket promedio
│   │   │   │   ├── PageSpeedIndicator.tsx    # Velocidad de carga
│   │   │   │   └── ChurnPortal.tsx           # Churn de uso
│   │   │   │
│   │   │   └── phase3/
│   │   │       ├── SubscriptionChurn.tsx     # Churn de suscripción
│   │   │       ├── MRRARRChart.tsx           # Ingresos recurrentes
│   │   │       ├── CohortAnalysis.tsx        # Análisis de cohortes
│   │   │       ├── UnitEconomics.tsx         # CAC, LTV
│   │   │       └── NPSByTenure.tsx           # NPS por antigüedad
│   │   │
│   │   └── seller/
│   │       ├── SellerSearchModal.tsx   # Modal de búsqueda
│   │       └── SellerDetailModal.tsx   # Modal con detalle del seller
│   │
│   ├── pages/
│   │   └── Dashboard.tsx               # Página principal
│   │
│   ├── data/
│   │   ├── mockData.ts                 # Datos dummy principales
│   │   ├── mockSellers.ts              # Lista de sellers dummy
│   │   ├── mockChannels.ts             # Datos de canales
│   │   ├── mockSatisfaction.ts         # Datos NPS/CSAT/CES
│   │   └── mockTimeSeries.ts           # Series de tiempo
│   │
│   ├── hooks/
│   │   ├── useFilters.ts               # Estado de filtros globales
│   │   ├── useDateRange.ts             # Manejo de rango de fechas
│   │   └── useFilteredData.ts          # Datos filtrados (simulado)
│   │
│   ├── types/
│   │   ├── index.ts                    # Tipos principales
│   │   ├── seller.ts                   # Tipos de seller
│   │   ├── metrics.ts                  # Tipos de métricas
│   │   └── filters.ts                  # Tipos de filtros
│   │
│   ├── utils/
│   │   ├── formatters.ts               # Formateo de números, fechas
│   │   ├── calculations.ts             # Cálculos de métricas
│   │   └── constants.ts                # Constantes (colores, metas)
│   │
│   ├── styles/
│   │   └── globals.css                 # Estilos globales + Tailwind
│   │
│   ├── App.tsx                         # Componente raíz
│   └── main.tsx                        # Entry point
│
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 4. Componentes Principales

### 4.1 Layout

#### FilterBar (Filtros Globales)
```
┌────────────────────────────────────────────────────────────────────┐
│  📅 Últimos 30 días ▼  │  Plan: Todos ▼  │  Tipo: Todos ▼        │
└────────────────────────────────────────────────────────────────────┘
```

**Funcionalidad**:
- Selector de rango de fechas con opciones rápidas
- Dropdown de tipo de plan (Todos/Free/Básico/Avanzado)
- Dropdown de tipo de seller (Todos/Solo tienda/Solo marketplaces/Omnicanal)
- Al cambiar cualquier filtro, se actualiza todo el dashboard (simulado con datos diferentes)

#### TabNavigation (Pestañas)
```
┌──────────────────────┬────────────────────┬─────────────────────┐
│  Dirección (Día 1)   │  Uso & Crecimiento │  Negocio & Retención│
│       ▀▀▀▀▀▀         │                    │                     │
└──────────────────────┴────────────────────┴─────────────────────┘
```

**Funcionalidad**:
- 3 pestañas clickeables
- Indicador visual de pestaña activa
- Cambio de contenido al hacer clic

---

### 4.2 Componentes de Datos

#### KPICard
```
┌─────────────────────────┐
│  Tiendas totales        │
│                         │
│      15,234             │  ← Valor grande
│    ▲ +12.5%             │  ← Tendencia (verde/rojo)
│                         │
│  ───/\──/\───           │  ← Mini sparkline (opcional)
└─────────────────────────┘
```

**Props**:
- `title`: string
- `value`: number | string
- `change`: number (porcentaje)
- `changeLabel`: string (ej: "vs periodo anterior")
- `sparklineData`: number[] (opcional)
- `format`: 'number' | 'currency' | 'percent'

#### FunnelChart
```
    ┌─────────────────────────────────┐
    │      PROMPTS INICIADOS          │
    │          12,450                 │
    └───────────────┬─────────────────┘
                    │ 52%
    ┌───────────────▼─────────────────┐
    │    REGISTROS COMPLETADOS        │
    │          6,474                  │
    └───────────────┬─────────────────┘
                    │ 78%
    ┌───────────────▼─────────────────┐
    │      TIENDAS GENERADAS          │
    │          5,050                  │
    └─────────────────────────────────┘
```

**Props**:
- `stages`: Array<{ name: string, value: number }>
- `showConversionRates`: boolean

#### BarChartHorizontal
```
Mercado Libre    ████████████████████  2,450
Amazon           ██████████████        1,890
Shopify          ██████████            1,420
```

**Props**:
- `data`: Array<{ label: string, value: number }>
- `goalLine`: number (opcional, línea de meta)
- `color`: string

---

### 4.3 Secciones de Fase 1

| Sección | Componentes que usa | Datos dummy necesarios |
|---------|--------------------|-----------------------|
| ExecutiveSummary | 8 × KPICard | KPIs principales con tendencia |
| FunnelSection | FunnelChart | 3 etapas del funnel |
| ActivationSection | KPICard + BarChartHorizontal | Tiempo config + 4 barras de % |
| PerformanceSection | KPICard + HistogramChart | Conversión + TTFS |
| StoreStructure | DataTable | 5 métricas de tiendas |
| SatisfactionSection | KPICard + BarChartStacked + BarChartHorizontal | NPS/CSAT/CES |
| OmnichannelSection | BarChartHorizontal + KPICard | Canales + omnicanal |
| TopSellersSection | DataTable + SearchInput + Modal | Lista de sellers |

---

## 5. Datos Dummy

### 5.1 Estructura de datos principales

```typescript
// types/metrics.ts
interface ExecutiveKPIs {
  totalStores: number;
  paidStores: number;
  sellersWithStore: number;
  activeSellers: number;
  activePaidSellers: number;
  gmv: number;
  gmvGrowth: number;
  revenue: number;
  nps: number;
}

// data/mockData.ts
export const executiveKPIs: ExecutiveKPIs = {
  totalStores: 15234,
  paidStores: 2340,
  sellersWithStore: 12100,
  activeSellers: 4520,
  activePaidSellers: 1890,
  gmv: 45600000,
  gmvGrowth: 12.5,
  revenue: 2340000,
  nps: 42
};
```

### 5.2 Datos de sellers (Top 50)

```typescript
// types/seller.ts
interface Seller {
  id: string;
  name: string;
  email: string;
  plan: 'Free' | 'Básico' | 'Avanzado';
  registrationDate: string;
  storeCount: number;
  gmv: number;
  orders: number;
  products: number;
  channels: number;
  conversionRate: number;
  lastActivity: string;
  stores: Store[];
  satisfaction: {
    lastNPS: number;
    lastCSAT: number;
  };
}

// data/mockSellers.ts
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
    conversionRate: 3.2,
    lastActivity: '2024-11-24T10:30:00',
    stores: [...],
    satisfaction: { lastNPS: 9, lastCSAT: 4 }
  },
  // ... 49 más
];
```

### 5.3 Datos por rango de fecha (simulación)

Para simular el cambio de filtros, tendremos múltiples conjuntos de datos:

```typescript
// data/mockTimeSeries.ts
export const dataByPeriod = {
  '7d': {
    executiveKPIs: { ... },
    funnelData: { ... },
    // etc.
  },
  '30d': {
    executiveKPIs: { ... },
    funnelData: { ... },
  },
  '90d': {
    executiveKPIs: { ... },
    funnelData: { ... },
  }
};
```

---

## 6. Plan de Implementación

### Fase A: Setup y Layout (Día 1)
1. ✅ Inicializar proyecto Vite + React + TypeScript
2. ✅ Configurar Tailwind CSS
3. ✅ Crear estructura de carpetas
4. ✅ Implementar Header y TabNavigation
5. ✅ Implementar FilterBar con dropdowns funcionales
6. ✅ Crear hook useFilters para estado global

### Fase B: Componentes Base (Día 2)
1. ✅ KPICard con TrendIndicator
2. ✅ SemaphoreIndicator
3. ✅ DataTable genérica
4. ✅ Modal reutilizable
5. ✅ SearchInput

### Fase C: Gráficas (Día 3)
1. ✅ FunnelChart
2. ✅ BarChartHorizontal
3. ✅ BarChartStacked
4. ✅ HistogramChart
5. ✅ MiniSparkline

### Fase D: Secciones Fase 1 (Días 4-5)
1. ✅ ExecutiveSummary (8 KPIs)
2. ✅ FunnelSection
3. ✅ ActivationSection
4. ✅ PerformanceSection
5. ✅ StoreStructure
6. ✅ SatisfactionSection
7. ✅ OmnichannelSection
8. ✅ TopSellersSection + SellerDetailModal

### Fase E: Secciones Fase 2 y 3 (Día 6)
1. ✅ Todas las secciones de Fase 2
2. ✅ Todas las secciones de Fase 3

### Fase F: Polish y Deploy (Día 7)
1. ✅ Responsive design
2. ✅ Animaciones sutiles
3. ✅ Testing manual
4. ✅ Deploy a Vercel
5. ✅ Documentación README

---

## 7. Interacciones Simuladas

### 7.1 Cambio de filtros
Cuando el usuario cambia un filtro:
1. Se actualiza el estado global de filtros
2. Se selecciona el conjunto de datos dummy correspondiente
3. Todos los componentes se re-renderizan con nuevos datos
4. Se muestra un pequeño "loading" simulado (300ms) para dar sensación de carga

### 7.2 Búsqueda de seller
1. Usuario escribe en el buscador (mínimo 3 caracteres)
2. Se filtra la lista de sellers dummy por nombre/email
3. Se muestran hasta 10 resultados en dropdown
4. Al seleccionar, se abre el modal de detalle

### 7.3 Click en Top Sellers
1. Al hacer clic en una fila de la tabla
2. Se abre el modal SellerDetailModal
3. Se muestra toda la información del seller
4. Se puede cerrar con X o click fuera

### 7.4 Cambio de pestaña
1. Click en pestaña
2. Transición suave del contenido
3. Se mantienen los filtros activos

---

## 8. Estilo Visual

### 8.1 Paleta de colores
```css
/* Colores principales */
--primary: #2563eb;      /* Azul T1 */
--primary-dark: #1d4ed8;

/* Semáforo */
--success: #22c55e;      /* Verde */
--warning: #eab308;      /* Amarillo */
--danger: #ef4444;       /* Rojo */

/* Neutrales */
--bg-primary: #ffffff;
--bg-secondary: #f8fafc;
--text-primary: #0f172a;
--text-secondary: #64748b;
--border: #e2e8f0;
```

### 8.2 Tipografía
- Font family: Inter (Google Fonts)
- Títulos: font-semibold
- Números grandes: font-bold text-3xl
- Labels: text-sm text-gray-500

### 8.3 Espaciado
- Cards: padding 24px, border-radius 12px
- Entre secciones: margin-bottom 32px
- Entre filas de KPIs: gap 16px

---

## 9. Entregables

| Entregable | Descripción |
|------------|-------------|
| **Repositorio Git** | Código fuente completo |
| **URL Vercel** | Dashboard desplegado y accesible |
| **README.md** | Instrucciones de instalación y uso |
| **Este documento** | Plan de proyecto como referencia |

---

## 10. Notas para el Desarrollador

1. **Los datos son 100% dummy** - No hay API, todo está en archivos .ts
2. **Los filtros simulan cambios** - Hay 3-4 conjuntos de datos para dar variedad
3. **El buscador funciona** - Filtra sobre el array de sellers en memoria
4. **Las gráficas son interactivas** - Hover muestra tooltips con valores
5. **Es responsive** - Funciona en desktop y tablet (móvil es bonus)
6. **El código está tipado** - TypeScript estricto para mejor mantenibilidad

---

## 11. Próximos Pasos (Post-Prototipo)

Una vez validado el prototipo:
1. Definir API endpoints necesarios
2. Crear backend con base de datos real
3. Reemplazar datos dummy por llamadas a API
4. Implementar autenticación
5. Conectar a datos de producción

---

*Plan de proyecto v1.0*
*Dashboard de Dirección T1 - Frontend Simulado*
