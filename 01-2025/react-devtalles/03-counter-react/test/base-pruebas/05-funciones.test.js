import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe("Test on 05-funciones", () => {
  test("getUser must be return an object", () => {
    const testUser = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();

    expect(testUser).toEqual(user);
  });

  test("getUsuarioActivo must be return an object", () => {
    const name = "Miguel";

    const testUser = {
      uid: "ABC567",
      username: name,
    };

    expect(testUser).toEqual(getUsuarioActivo(name));
  });
});
