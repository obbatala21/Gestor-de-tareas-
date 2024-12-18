import { useState } from "react";
import { Todos } from "./components/Todos";
import "./App.css";
import { TodoId } from "./types";

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

  const handleRemove = ({id}: TodoId) : void => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <Todos 
        todos={todos} 
        onRemoveTodo={handleRemove}
        />
      </div>
    </div>
  );
};

export default App;
