import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";
import { heroes } from "../../src/data/heroes";

describe("Tests on 08-imp-exp", () => {
  const id = 1;

  const hero = getHeroeById(id);

  test("getHeroById must return a hero by id", () => {
    const result = {
      id: 1,
      name: "Batman",
      owner: "DC",
    };

    expect(result).toEqual(hero);
  });

  test("getHeroById must return a hero with an id, name and owner", () => {
    expect(hero.id).toBeTruthy();
    expect(hero.name).toBeTruthy();
    expect(hero.owner).toBeTruthy();
  });

  test("getHeroById must return a hero with an id, name and owner with the correct types", () => {
    expect(hero.id).toEqual(expect.any(Number));
    expect(hero.name).toEqual(expect.any(String));
    expect(hero.owner).toEqual(expect.any(String));
  });

  test("getHeroById must return an error if the hero does not exist", () => {
    const id = 100;

    const hero = getHeroeById(id);

    expect(hero).toBe(undefined);
    expect(hero).toBeFalsy();
  });

  //   Task create more test on the function getHeroByOwner

  test("getHeroesByOwner must return an array of heroes", () => {
    const testOwner = "Marvel";

    const heroesByOwner = getHeroesByOwner(testOwner);

    expect(heroesByOwner).toEqual(expect.any(Array));
  });

  test("getHeroesByOwner must return an array of heroes with the correct number of heroes", () => {
    const heroesMarvel = getHeroesByOwner("Marvel");
    const heroesDC = getHeroesByOwner("DC");

    expect(heroesMarvel.length).toBe(2);
    expect(heroesDC.length).toBe(3);

    expect(heroesDC).toEqual(heroes.filter((hero) => hero.owner === "DC"));
    expect(heroesMarvel).toEqual(
      heroes.filter((hero) => hero.owner === "Marvel")
    );
  });
});
