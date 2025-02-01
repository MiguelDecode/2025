import { getImagen } from "../../src/base-pruebas/11-async-await";

describe("Test on 11-async-await", () => {
  test("getImagen must be return an url of the image", async () => {
    const url = await getImagen();

    expect(typeof url).toBe("string");
    // expect(url).not.toBe("No se encontro la imagen");
  });

  test("getImagen must be return an error if can not obtain the image", async () => {
    const url = await getImagen();

    expect(url).toBe("No se encontro la imagen");
  });
});
