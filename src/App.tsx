import { FilterProvider } from './hooks/useFilters';
import { Dashboard } from './pages/Dashboard';

function App() {
  return (
    <FilterProvider>
      <Dashboard />
    </FilterProvider>
  );
}

export default App;
