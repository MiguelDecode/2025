import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe("Test on 06-deses-obj ", () => {
  test("usContext must be return an object", () => {
    const clave = "Ironman";
    const edad = 51;

    const testUser = {
      nombreClave: clave,
      anios: edad,
      latlng: {
        lat: 14.1232,
        lng: -12.3232,
      },
    };

    const userData = {
      clave: clave,
      nombre: "Tony",
      edad: edad,
      rango: "civil",
    };

    const user = usContext(userData);

    expect(testUser).toEqual(user);
  });
});
