import { TodoApp } from "../../src/08-useReducer/TodoApp";
import { render, screen } from "@testing-library/react";
import { useTodo } from "../../src/hooks/useTodo";

jest.mock("../../src/hooks/useTodo");

describe("Tests on <TodoApp/>", () => {
  useTodo.mockReturnValue({
    todos: [
      {
        id: 1,
        description: "Todo #1",
        done: false,
      },
      {
        id: 2,
        description: "Todo #2",
        done: true,
      },
    ],
    handleNewTodo: jest.fn(),
    handleRemoveTodo: jest.fn(),
    handleToggleTodo: jest.fn(),
    totalTodos: 2,
    pendingTodos: 1,
  });

  test("should show the component", () => {
    render(<TodoApp />);

    expect(screen.getByText("Todo #1")).toBeTruthy;
    expect(screen.getByText("Todo #2")).toBeTruthy;
    expect(screen.getByRole("textbox")).toBeTruthy;
  });
});
