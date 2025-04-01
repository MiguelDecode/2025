import { render, screen } from "@testing-library/react";
import { HomePage } from "../../src/09-useContext/HomePage";
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe("Tests on component <HomePage/>", () => {
  const mockUser = {
    id: 1,
    name: "Miguel",
  };

  test("should show the component without the user", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText("pre");
    expect(preTag.innerHTML).toBe("null");
  });

  test("should show the component with a mock user", () => {
    render(
      <UserContext.Provider value={{ user: mockUser }}>
        <HomePage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText("pre");
    expect(preTag.innerHTML).toContain("name");
    expect(preTag.innerHTML).toContain("Miguel");
    expect(preTag.innerHTML).toContain("id");
    expect(preTag.innerHTML).toContain("1");
  });
});
