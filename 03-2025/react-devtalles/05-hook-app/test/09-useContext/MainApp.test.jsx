import { MemoryRouter } from "react-router";
import { MainApp } from "../../src/09-useContext/MainApp";
import { screen, render } from "@testing-library/react";

describe("Tests on component MainApp", () => {
  test("should show the HomePage", () => {
    render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    );

    expect(screen.getByText("Home Page")).toBeTruthy();
  });

  test("should show the LoginPage", () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <MainApp />
      </MemoryRouter>
    );

    expect(screen.getByText("Login Page")).toBeTruthy();
  });

  test("should show the AboutPage", () => {
    render(
      <MemoryRouter initialEntries={["/about"]}>
        <MainApp />
      </MemoryRouter>
    );

    expect(screen.getByText("About Page")).toBeTruthy();
  });
});
