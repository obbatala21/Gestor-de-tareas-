import { useState } from "react";
import { TodoId, TodoIdAndCompleted, TodoTitle, type Todo as TodoType } from "../types";

interface Props extends TodoType {
  onRemoveTodo: ({ id }: TodoId) => void;
  onToggleCompletedTodo: ({ id, completed }: TodoIdAndCompleted) => void;
  onEditTodo: ({id, title} : TodoId & TodoTitle) => void;
}

export const Todo: React.FC<Props> = ({
  id,
  title,
  completed,
  onRemoveTodo,
  onToggleCompletedTodo,
  onEditTodo,
}) => {

  const [isEditing, setIsEditing] = useState(false);
  const [editingValue, setEditingValue] = useState(title);

  const handleDoubleClick = () =>{
    setIsEditing(true);
  }


  const handleEditChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditingValue(event.target.value);
  };

  const handleEditSubmit = () => {
    if (editingValue.trim() !== "") {
      onEditTodo({ id, title: editingValue.trim() });
    }
    setIsEditing(false);
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleEditSubmit();
    } else if (event.key === "Escape") {
      setIsEditing(false);
    }
  };

return (
    <div
      className={`flex items-center justify-between py-2 px-4 border-b ${
        completed ? "bg-gray-700" : "bg-gray-800"
      }`}
    >
      <input
        className={`w-6 h-6 rounded-full border-2 focus:ring ${
          completed
            ? "bg-green-500 border-green-500"
            : "bg-gray-800 border-gray-500"
        }`}
        type="checkbox"
        checked={completed}
        onChange={(e) => {
          onToggleCompletedTodo({ id, completed: e.target.checked });
        }}
      />
      {isEditing ? (
        <input
          type="text"
          value={editingValue}
          onChange={handleEditChange}
          onBlur={handleEditSubmit}
          onKeyDown={handleKeyDown}
          autoFocus
          className="flex-grow ml-4 p-1 text-lg text-gray-900 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      ) : (
        <label
          onDoubleClick={handleDoubleClick}
          className={`flex-grow ml-4 text-lg cursor-pointer ${
            completed ? "line-through text-gray-400" : "text-gray-100"
          }`}
        >
          {title}
        </label>
      )}
      <button
        className="text-red-500 hover:text-red-400 text-xl"
        onClick={() => {
          onRemoveTodo({ id });
        }}
      >
        ❌
      </button>
    </div>
  );
};
