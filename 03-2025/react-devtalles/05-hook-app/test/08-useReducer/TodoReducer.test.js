import { todoReducer } from "../../src/08-useReducer/todoReducer";
import { describe, test, expect } from "@jest/globals";

describe("Tests on todoReducer", () => {
  const initialState = [
    {
      id: 1,
      description: "Demo Todo",
      done: false,
    },
  ];

  test("should return the initial state", () => {
    const newState = todoReducer(initialState, {});
    expect(newState).toBe(initialState);
  });

  test("should add a new todo", () => {
    const newTodo = {
      id: 2,
      description: "Learn React",
      done: false,
    };

    const action = {
      type: "[TODO] Add Todo",
      payload: newTodo,
    };

    const newState = todoReducer(initialState, action);
    expect(newState).toHaveLength(2);
    expect(newState).toEqual([...initialState, newTodo]);
  });

  test("should remove a todo", () => {
    const action = {
      type: "[TODO] Remove Todo",
      payload: 1,
    };

    const newState = todoReducer(initialState, action);
    expect(newState).toHaveLength(0);
  });

  test("should toggle a todo", () => {
    const action = {
      type: "[TODO] Toggle Todo",
      payload: 1,
    };

    const newState = todoReducer(initialState, action);
    expect(newState[0].done).toBe;
  });
});
