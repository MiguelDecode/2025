import GifGridItem from "../../../src/components/GifGridItem/GifGridItem";
import { render, screen } from "@testing-library/react";

describe("Tests on component <GifGridItem/>", () => {
  const testTitle = "Test title";
  const testUrl = "http://localhost/testing";

  test("should match with the snapshoot", () => {
    const { container } = render(
      <GifGridItem title={testTitle} url={testUrl} />
    );

    expect(container).toMatchSnapshot();
  });

  test("should title and url are required", () => {
    render(<GifGridItem title={testTitle} url={testUrl} />);

    // screen.debug();

    const { src, alt } = screen.getByRole("img");

    expect(src).toBe(testUrl);
    expect(alt).toBe(testTitle);
  });

  test("should show the title in the component", () => {
    render(<GifGridItem title={testTitle} url={testUrl} />);

    expect(screen.getByText(testTitle)).toBeTruthy;
  });
});

