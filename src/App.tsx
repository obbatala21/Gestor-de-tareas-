import { useState } from "react";
import { Todos } from "./components/Todos";
import "./App.css";
import { FilterValue, TodoId, TodoIdAndCompleted } from "./types";
import { TODO_FILTERS } from "./consts";
import { Footer } from "./components/Footer";

const mockTodos = [
  {
    id: "1",
    title: "todo 1",
    completed: true,
  },
  {
    id: "2",
    title: "todo 2",
    completed: false,
  },
  {
    id: "3",
    title: "todo 3",
    completed: false,
  },
];

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos);
  const [filterSelected, setFilterSelected] = useState<FilterValue>(
    TODO_FILTERS.ALL
  );

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleCompleted = ({ id, completed }: TodoIdAndCompleted): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed,
        };
      }

      return todo;
    });

    setTodos(newTodos);
  };

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter);
  };

  const activeCount = todos.filter((todo) => !todo.completed).length;
  const completedCount = todos.length - activeCount;
  const filteredTodos = todos.filter((todo) => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed;
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed;
    return todo;
  });

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <Todos
          todos={filteredTodos}
          onRemoveTodo={handleRemove}
          onToggleCompletedTodo={handleCompleted}
        />
        <Footer
          activeCount={activeCount}
          completedCount={completedCount}
          handleFilterChange={handleFilterChange}
          onClearCompleted={() => {}}
          filterSelected={filterSelected}
        ></Footer>
      </div>
    </div>
  );
};

export default App;
