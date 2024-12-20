import { FILTER_BUTTONS } from "../consts";
import { type FilterValue } from "../types";

interface Props {
  onFilterChange: (filter: FilterValue) => void;
  filterSelected: FilterValue;
}

export const Filters: React.FC<Props> = ({
  onFilterChange,
  filterSelected,
}) => {
  return (
    <ul className="flex space-x-4">
      {Object.entries(FILTER_BUTTONS).map(([key, { href, literal }]) => {
        const isSelected = key === filterSelected;
        const className = isSelected
          ? "text-blue-500 font-semibold underline"
          : "text-gray-500 hover:text-gray-700 transition-colors";
        return (
          <li key={key}>
            <a
              href={href}
              className={className}
              onClick={(event) => {
                event.preventDefault();
                onFilterChange(key as FilterValue);
              }}
            >
              {literal}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
