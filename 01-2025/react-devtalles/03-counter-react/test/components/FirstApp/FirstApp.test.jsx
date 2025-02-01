import { render } from "@testing-library/react";
import { FirstApp } from "../../../src/components/FirstApp/FirstApp";

describe("Tests on <FirstApp/>", () => {
  //   test("Should be match with the snapshot", () => {
  //     const title = "Hola, soy Goku.";
  //     const { container } = render(<FirstApp title={title} />);

  //     expect(container).toMatchSnapshot();
  //   });

  test("Must be show the title as a heading one", () => {
    const title = "Hola, soy Goku.";
    const { container, getByText, getByTestId } = render(
      <FirstApp title={title} />
    );

    expect(getByText(title)).toBeTruthy();
    expect(getByTestId("test-title").innerHTML).toContain(title);

    // const h1 = container.querySelector("h1");
    // expect(h1.textContent).toContain(title);
  });

  test("should has a subtitle", () => {
    const title = "Hola, soy Goku";
    const subtitle = "Hola, soy subtítulo";
    const { getAllByText } = render(
      <FirstApp title={title} subTitle={subtitle} />
    );

    expect(getAllByText(subtitle).length).toBe(2);
  });
});
