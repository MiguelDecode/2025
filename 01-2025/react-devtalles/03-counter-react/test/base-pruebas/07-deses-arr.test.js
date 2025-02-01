import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe("Test on 07-deses-arr", () => {
  test("retornaArreglo must be return an array", () => {
    const result = ["ABC", 123];

    expect(result).toEqual(retornaArreglo());
  });

  test("retornaArreglo must be return a number and a string", () => {
    const [letters, numbers] = retornaArreglo();

    expect(typeof letters).toBe("string");
    expect(typeof numbers).toBe("number");

    expect(letters).toEqual(expect.any(String))
    expect(numbers).toEqual(expect.any(Number))
  });
});
