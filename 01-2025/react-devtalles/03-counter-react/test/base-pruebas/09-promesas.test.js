import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe("Test on 09-promesas", () => {
  test("getHeroByIdAsync must be return a hero", (done) => {
    const id = 1;

    getHeroeByIdAsync(id).then((hero) => {
      expect(hero).toEqual({
        id: 1,
        name: "Batman",
        owner: "DC",
      });

      done();
    });
  });

  test("getHeroeByIdAsync must be return an error if the hero does not exist", (done) => {
    const id = 999;

    getHeroeByIdAsync(id)
      .then((hero) => {
        expect(hero).toBeFalsy();
        done();
      })
      .catch((err) => {
        expect(err).toBe("No se pudo encontrar el héroe");
        done();
      });
  });
});
