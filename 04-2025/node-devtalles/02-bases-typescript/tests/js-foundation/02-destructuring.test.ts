import { characters } from "../../src/js-foundation/02-destructuring";

describe("Tests on file 02-destructuring", () => {

  test("should be an array", () => {
    expect(characters instanceof Array).toBeTruthy();
  });

  test("should contain the heroes Flash and Superman", () => {
    expect(characters.includes("Flash")).toBeTruthy();
    expect(characters.includes("Superman")).toBeTruthy();
  });

  test("should has a length of four", () => {
    
    expect(characters.length).toBe(4);
  });
});
