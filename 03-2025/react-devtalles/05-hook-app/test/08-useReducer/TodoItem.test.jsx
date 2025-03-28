import { render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe("Tests on <TodoItem/>", () => {
  const todo = {
    id: 1,
    description: "Piedra del Alma",
    done: false,
  };

  const handleRemoveTodoMock = jest.fn();
  const handleToggleTodoMock = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test("should show the undone Todo", () => {
    const todo = {
      id: 1,
      description: "Piedra del Alma",
      done: false,
    };

    render(
      <TodoItem
        todo={todo}
        handleRemoveTodo={handleRemoveTodoMock}
        handleToggleTodo={handleToggleTodoMock}
      />
    );

    const liElement = screen.getByRole("listitem");

    expect(liElement.className).toBe(
      "list-group-item d-flex justify-content-between"
    );

    const spanElement = screen.getByText(todo.description);
    expect(spanElement.className).toBe("align-self-center ");
  });

  test("should show the done Todo", () => {
    const todo = {
      id: 1,
      description: "Piedra del Alma",
      done: true,
    };

    render(
      <TodoItem
        todo={todo}
        handleRemoveTodo={handleRemoveTodoMock}
        handleToggleTodo={handleToggleTodoMock}
      />
    );

    const liElement = screen.getByRole("listitem");

    expect(liElement.className).toBe(
      "list-group-item d-flex justify-content-between"
    );

    const spanElement = screen.getByText(todo.description);
    expect(spanElement.className).toContain("text-decoration-line-through");
  });

  test("The span should call the handleToggleTodo when click over the description", () => {
    render(
      <TodoItem
        todo={todo}
        handleRemoveTodo={handleRemoveTodoMock}
        handleToggleTodo={handleToggleTodoMock}
      />
    );

    const spanElement = screen.getByText(todo.description);
    spanElement.click();
    expect(handleToggleTodoMock).toHaveBeenCalled();
    expect(handleToggleTodoMock).toHaveBeenCalledWith(todo.id);
  });

  test("The button should call the handleDeleteTodo when click over the button", () => {
    render(
      <TodoItem
        todo={todo}
        handleRemoveTodo={handleRemoveTodoMock}
        handleToggleTodo={handleToggleTodoMock}
      />
    );

    const buttonElement = screen.getByRole("button");
    buttonElement.click();
    expect(handleRemoveTodoMock).toHaveBeenCalled();
  });
});
