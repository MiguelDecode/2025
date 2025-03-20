import { TodoItem } from "./TodoItem";

export const TodoList = ({
  todos = [],
  handleRemoveTodo,
  handleToggleTodo,
}) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          handleRemoveTodo={handleRemoveTodo}
          handleToggleTodo={handleToggleTodo}
        />
      ))}
    </ul>
  );
};
