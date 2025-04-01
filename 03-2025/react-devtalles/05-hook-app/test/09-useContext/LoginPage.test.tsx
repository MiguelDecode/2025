import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";
import { render, screen, fireEvent } from "@testing-library/react";

const mockUser = {
  id: 1,
  name: "Miguel",
  email: "migueldecode@gmail.com",
};

describe("Tests on component <LoginPage/>", () => {
  test("should show the component at default status", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText("pre");
    expect(preTag.innerHTML).toBe("null");
  });

  test("should call the setUser when click on the button", () => {
    const setUserMock = jest.fn();

    render(
      <UserContext.Provider value={{ user: mockUser, setUser: setUserMock}}>
        <LoginPage />
      </UserContext.Provider>
    );

    const button = screen.getByText("Set User");

    fireEvent.click(button);

    expect(setUserMock).toHaveBeenCalled();
    expect(setUserMock).toHaveBeenCalledWith(mockUser);
  });
});
