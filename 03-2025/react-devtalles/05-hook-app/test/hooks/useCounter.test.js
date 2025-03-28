import { renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";
import { act } from "react";

describe("Tests on useCounter", () => {
  test("should return the default values", () => {
    const { result } = renderHook(() => useCounter());

    const { counter, handleAdd, handleSubstract, handleReset } = result.current;

    expect(counter).toBe(10);
    expect(typeof handleAdd).toBe("function");
    expect(typeof handleSubstract).toBe("function");
    expect(typeof handleReset).toBe("function");
  });

  test("should generate a counter with a intial value of hundred", () => {
    const { result } = renderHook(() => useCounter(100));

    const { counter } = result.current;

    expect(counter).toBe(100);
  });

  test("should return a counter incremented by a value", () => {
    const { result } = renderHook(() => useCounter(100));
    const { handleAdd } = result.current;

    act(() => handleAdd(10));

    const { counter } = result.current;

    expect(counter).toBe(110);
  });

  test("should return a counter decremented by a value", () => {
    const { result } = renderHook(() => useCounter(100));
    const { handleSubstract } = result.current;

    act(() => handleSubstract(10));

    const { counter } = result.current;

    expect(counter).toBe(90);
  });

  test("should return the counter with the initial value after reset", () => {
    const { result } = renderHook(() => useCounter(100));
    const { handleAdd, handleReset } = result.current;

    act(() => {
      handleAdd(10);
      handleReset();
    });

    const { counter } = result.current;

    expect(counter).toBe(100);
  });
});
