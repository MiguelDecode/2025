import { getAge } from "../../src/plugins/get-age.plugin";

describe("Tests on file get-age.plugin.ts", () => {
  test("should return a number", () => {
    const testBirthdate = "1986-04-11";

    const age = getAge(testBirthdate);

    expect(typeof age).toBe("number");
  });

  test("should return zero if birthdate is today", () => {
    const testBirthdate = new Date().toISOString();

    const age = getAge(testBirthdate);

    expect(age).toBe(0);
  });

  test("should return zero years", () => {
    const spy = jest.spyOn(Date.prototype, "getFullYear").mockReturnValue(1995);

    const birthdate = "1995-10-21";
    const age = getAge(birthdate);

    expect(age).toBe(0);
    expect(spy).toHaveBeenCalled()
  });
});

