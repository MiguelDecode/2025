export const TodoItem = ({ todo, handleRemoveTodo, handleToggleTodo }) => {
  const { description, id } = todo;

  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        className={`align-self-center ${
          todo.done ? "text-decoration-line-through" : ""
        }`}
        onClick={() => handleToggleTodo(id)}
      >
        {description}
      </span>
      <button className="btn btn-danger" onClick={() => handleRemoveTodo(id)}>
        Borrar
      </button>
    </li>
  );
};
