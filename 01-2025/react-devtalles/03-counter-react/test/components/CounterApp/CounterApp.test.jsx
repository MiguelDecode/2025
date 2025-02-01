import { render, screen, fireEvent } from "@testing-library/react";
import { CounterApp } from "../../../src/components/CounterApp/CounterApp";

describe("Tests on component <CounterApp/>", () => {
  const initialValue = 100;

  test("should do match with the snapshot", () => {
    const { container } = render(<CounterApp initialValue={initialValue} />);

    expect(container).toMatchSnapshot();
  });

  test("should show a initial value", () => {
    render(<CounterApp initialValue={initialValue} />);

    expect(screen.getByText(100)).toBeTruthy();
    expect(screen.getByRole("heading", { level: 5 }).innerHTML).toContain(
      String(initialValue)
    );
  });

  test("should increment with the button +1", () => {
    render(<CounterApp initialValue={initialValue} />);

    fireEvent.click(screen.getByText("+1"));

    expect(screen.getByRole("heading", { level: 5 }).innerHTML).toContain(
      String(initialValue + 1)
    );
  });

  test("should substract with the button -1", () => {
    render(<CounterApp initialValue={initialValue} />);

    fireEvent.click(screen.getByText("-1"));

    expect(screen.getByRole("heading", { level: 5 }).innerHTML).toContain(
      String(initialValue - 1)
    );
  });

  test("should reset with the button reset", () => {
    render(<CounterApp initialValue={initialValue} />);

    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));

    // fireEvent.click(screen.getByText("Reset"));
    fireEvent.click(screen.getByLabelText("btn-reset"));

    expect(screen.getByRole("heading", { level: 5 }).innerHTML).toContain(
      String(initialValue)
    );
  });
});
