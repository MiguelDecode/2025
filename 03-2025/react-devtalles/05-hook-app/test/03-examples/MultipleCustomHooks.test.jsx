import { render, screen, fireEvent } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock("../../src/hooks/useFetch");

describe("Tests on component <MultipleCustomHooks", () => {
  const mockIncrement = jest.fn();

  useCounter.mockReturnValue({
    counter: 1,
    handleAdd: mockIncrement,
  });

  beforeEach(() => {
    jest.clearAllMocks;
  });

  test("should show the default component", () => {
    useFetch.mockReturnValue({ data: null, isLoading: true, hasError: null });
    render(<MultipleCustomHooks />);

    expect(screen.getByText("Cargando..."));
    expect(screen.getByText("Información del Pokémon"));

    const nextButton = screen.getByRole("button", { name: "Siguiente" });
    expect(nextButton.disable).toBeFalsy();

    // screen.debug();
  });

  test("should display a pokemon", async () => {
    useFetch.mockReturnValue({
      data: {
        id: 1,
        name: "bulbasaur",
        sprites: {
          img: {
            front_shiny: "https://shiny/1.png",
            front_default: "https://shiny/1.png",
            back_shiny: "https://shiny/1.png",
            back_default: "https://shiny/1.png",
          },
        },
        isLoading: false,
        hasError: null,
        error: null,
      },
    });

    render(<MultipleCustomHooks />);

    expect(screen.getByText("Información del Pokémon"));
  });

  test("should call the incremental function", () => {
    useFetch.mockReturnValue({
      data: {
        id: 1,
        name: "bulbasaur",
        sprites: {
          img: {
            front_shiny: "https://shiny/1.png",
            front_default: "https://shiny/1.png",
            back_shiny: "https://shiny/1.png",
            back_default: "https://shiny/1.png",
          },
        },
        isLoading: false,
        hasError: null,
        error: null,
      },
    });

    render(<MultipleCustomHooks />);

    const nextButton = screen.getByRole("button", { name: "Siguiente" });
    fireEvent.click(nextButton);

    expect(mockIncrement).toHaveBeenCalled();
  });
});
