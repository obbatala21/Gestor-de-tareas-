import { TodoId, type Todo as TodoType } from "../types";

interface Props extends TodoType{
    onRemoveTodo: ({id}: TodoId) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo }) => {
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
        onChange={() => {}}
      />
      <label
        className={`flex-grow ml-4 text-lg ${
          completed ? "line-through text-gray-400" : "text-gray-100"
        }`}
      >
        {title}
      </label>
      <button
        className="text-red-500 hover:text-red-400 text-xl"
        onClick={() => {onRemoveTodo({id})}}
      >
        ✖
      </button>
    </div>
  );
};
