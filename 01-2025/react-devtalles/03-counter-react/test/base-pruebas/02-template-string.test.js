import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe("Testing on 02-template-string", () => {
  test("getsaludo must be return a message with a name", () => {
    const name = "Miguel";

    const msg = getSaludo(name);

    expect(msg).toBe(`Hola ${name}`);
  });
});

