import { act } from "react";
import { useForm } from "../../src/hooks/useForm";
const { renderHook } = require("@testing-library/react");

describe("Tests on useForm", () => {
  const initialForm = {
    name: "Miguel",
    email: "migueldecode@gmail.com",
  };

  test("should return the default values", () => {
    const { result } = renderHook(() => useForm(initialForm));

    const { formState, handleChange, handleReset } = result.current;

    expect(formState).toEqual(initialForm);
    expect(typeof handleChange).toBe("function");
    expect(typeof handleReset).toBe("function");
  });

  test("should can change the default values", () => {
    const { result } = renderHook(() => useForm(initialForm));

    const { formState, handleChange } = result.current;
    const newEmail = "migueldecode@gmail.com";

    act(() => {
      handleChange({ target: { name: "email", value: newEmail } });
    });

    const { email } = formState;

    expect(email).toBe(newEmail);
  });

  test("should return after a reset the default values", () => {
    const { result } = renderHook(() => useForm(initialForm));

    const { formState, handleChange, handleReset } = result.current;
    const newEmail = "migueldecode@gmail.com";

    act(() => {
      handleChange({ target: { name: "email", value: newEmail } });
      handleReset();
    });

    const { email } = formState;

    expect(email).toBe(initialForm.email);
  });
});
