import { getPokemonById } from "../../src/js-foundation/06-promises";

describe("Tests on file 06-promises.ts", () => {
  test("should return a pokemon name", async () => {
    const testId = 1;
    const pokemonName = await getPokemonById(testId);

    expect(typeof pokemonName).toBe("string");
    expect(pokemonName).toBe("bulbasaur");
  });

  test("should return an error if pokemon id does not exist", async () => {
    const testId = "100000000000";

    try {
      await getPokemonById(testId);
    } catch (err) {
      expect(err).toBe(`Pokemon not found with id ${testId}`);
    }
  });
});
