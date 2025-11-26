# Dashboard de Dirección T1

Dashboard ejecutivo para la plataforma T1, diseñado para ofrecer una vista completa del negocio a Dirección y CEO.

## 🚀 Inicio Rápido

### Prerrequisitos
- Node.js 18+ 
- npm 9+

### Instalación

```bash
# Navegar al directorio del proyecto
cd dashboard-direccion

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

El dashboard estará disponible en `http://localhost:5173`

### Compilar para producción

```bash
npm run build
```

## 📊 Características

### Fase 1 - Dirección (MVP Día 1)
- **Resumen Ejecutivo**: 8 KPIs principales con sparklines y tendencias
- **Funnel de Creación**: Visualización del embudo Prompt → Registro → Tienda
- **Configuración y Activación**: Métricas de onboarding de sellers
- **Performance de Tiendas**: Conversión y Time to First Sale
- **Estructura de Tiendas**: Relación sellers/tiendas
- **Satisfacción**: NPS, CSAT, CES con gráficos por momento y funcionalidad
- **Omnicanal**: Sellers por canal y métricas de integración
- **Top Sellers**: Tabla interactiva con búsqueda y detalle de seller

### Fase 2 - Uso & Crecimiento
- DAU/WAU/MAU con tendencias
- Retención a 30 días por cohorte
- GMV por canal
- AOV (Average Order Value)
- Page Speed con indicador visual
- Churn Portal y conversión por canal

### Fase 3 - Negocio & Retención
- Churn de suscripción con motivos
- MRR/ARR con evolución
- Análisis de cohortes con heatmap
- Unit Economics (CAC, LTV, Ratio)
- NPS por antigüedad del seller

## 🎛 Filtros Globales

Todos los datos responden a los filtros:
- **Rango de fechas**: 7d, 30d, 90d
- **Tipo de plan**: Todos, Free, Básico, Avanzado
- **Tipo de seller**: Todos, Solo tienda, Solo marketplaces, Omnicanal

## 🛠 Stack Tecnológico

- **React 18** + **TypeScript**
- **Vite** (Build tool)
- **Tailwind CSS** (Estilos)
- **Recharts** (Gráficas)
- **Lucide React** (Iconos)
- **date-fns** (Fechas)

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── charts/          # Componentes de gráficas
│   ├── common/          # Componentes reutilizables
│   ├── layout/          # Layout (Header, Tabs, Filters)
│   ├── sections/        # Secciones por fase
│   └── seller/          # Modal de detalle de seller
├── data/                # Datos mock
├── hooks/               # Custom hooks (useFilters)
├── pages/               # Página principal
├── styles/              # Estilos globales
├── types/               # Tipos TypeScript
└── utils/               # Utilidades y constantes
```

## 📝 Notas

- Este es un **frontend con datos dummy** para validación de UX
- Los datos cambian al modificar los filtros para simular interactividad
- El buscador de sellers filtra sobre datos en memoria
- Preparado para conectar con backend real

## 🚀 Deploy a Vercel

```bash
npm run build
# El directorio 'dist' contiene los archivos para desplegar
```

O conecta el repositorio directamente a Vercel para deploy automático.
