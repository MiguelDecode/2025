import { render, screen, fireEvent } from "@testing-library/react";
import AddCategory from "../../../src/components/AddCategory/AddCategory";

describe("Tests on component <AddCategory/>", () => {
  test("should change the value of the text box", () => {
    render(<AddCategory handleAddCategory={() => {}} />);

    const input = screen.getByRole("textbox");

    fireEvent.input(input, { target: { value: "Saitama" } });

    expect(input.value).toBe("Saitama");
  });

  test("should call handleSubmit if the input has a value", () => {
    const inputValue = "Saitama";
    const handleAddCategory = jest.fn();

    render(<AddCategory handleAddCategory={handleAddCategory} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    // screen.debug();

    expect(input.value).toBe("");

    expect(handleAddCategory).toHaveBeenCalled();
    expect(handleAddCategory).toHaveBeenCalledTimes(1);
    expect(handleAddCategory).toHaveBeenCalledWith(inputValue);
  });
});
