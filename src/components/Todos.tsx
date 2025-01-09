import { TodoId, TodoIdAndCompleted, type ListOfTodos, TodoTitle } from "../types";
import { Todo } from "./Todo";

interface Props {
  todos: ListOfTodos;
  onRemoveTodo: ({ id }: TodoId) => void;
  onToggleCompletedTodo: ({ id, completed }: TodoIdAndCompleted) => void;
  onEditTodo: ({id, title} : TodoId & TodoTitle) => void
}

export const Todos: React.FC<Props> = ({
  todos,
  onRemoveTodo,
  onToggleCompletedTodo,
  onEditTodo
}) => {

  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`${
            todo.completed ? "bg-gray-100" : "bg-white"
          } rounded-md`}
        >
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onRemoveTodo={onRemoveTodo}
            onToggleCompletedTodo={onToggleCompletedTodo}
            onEditTodo={onEditTodo}
          />
        </li>
      ))}
    </ul>
  );
};
