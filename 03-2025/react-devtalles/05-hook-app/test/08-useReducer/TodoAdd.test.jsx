import { render, screen, fireEvent } from "@testing-library/react";
import { TodoAdd } from "../../src/08-useReducer/TodoAdd";

describe("Tests on <TodoAdd/>", () => {
  const newTodo = {
    id: 1,
    description: "Piedra del Alma",
    done: false,
  };
  const handleAddTodoMock = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test("should change the value of the input", () => {
    render(<TodoAdd handleAddTodo={handleAddTodoMock} />);

    const inputElement = screen.getByRole("textbox");
    fireEvent.input(inputElement, { target: { value: newTodo.description } });
    expect(inputElement.value).toBe(newTodo.description);
  });

  test("should call handleAddTodo with the new Todo", () => {
    render(<TodoAdd handleAddTodo={handleAddTodoMock} />);

    const inputElement = screen.getByRole("textbox");
    fireEvent.input(inputElement, { target: { value: newTodo.description } });

    screen.debug()
  });
});
