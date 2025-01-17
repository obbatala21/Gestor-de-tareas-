import { FilterValue } from "../types";
import { Filters } from "./Filters";

interface Props {
  activeCount: number;
  completedCount: number;
  filterSelected: FilterValue;
  handleFilterChange: (filter: FilterValue) => void;
  onClearCompleted: () => void;
}

export const Footer: React.FC<Props> = ({
  activeCount = 0,
  completedCount = 0,
  filterSelected,
  handleFilterChange,
  onClearCompleted,
}) => {
  return (
    <footer className={`flex items-center justify-evenly p-4`}>
      <span className="text-sm text-gray-600">
        <strong>{activeCount}</strong> Tareas pendientes
      </span>
      <Filters
        filterSelected={filterSelected}
        onFilterChange={handleFilterChange}
      />
      {completedCount > 0 && (
        <button
          className="bg-red-500 text-white text-sm font-medium px-4 py-2 rounded hover:bg-red-600 transition-colors"
          onClick={onClearCompleted}
        >
          Borrar Completadas
        </button>
      )}
    </footer>
  );
};
