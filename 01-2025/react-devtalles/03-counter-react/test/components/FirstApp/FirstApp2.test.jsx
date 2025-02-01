import { render, screen } from "@testing-library/react";
import { FirstApp } from "../../../src/components/FirstApp/FirstApp";

describe("Tests on <FirstApp/>", () => {
  const title = "Hola, soy Goku";
  const subtitle = "Soy un subtítulo";

  test("should must match with the snapshot", () => {
    const { container } = render(<FirstApp title={title} />);

    expect(container).toMatchSnapshot();
  });

  test('should show the message "Hola, soy Goku"', () => {
    render(<FirstApp title={title} />);

    expect(screen.getByText(title)).toBeTruthy();
  });

  test("should show the title inside a h1", () => {
    render(<FirstApp title={title} />);

    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      title
    );
  });

  test("should show a subtitle send as a prop", () => {
    render(<FirstApp title={title} subTitle={subtitle} />);

    expect(screen.getAllByText(subtitle).length).toBe(2);
  });
});
