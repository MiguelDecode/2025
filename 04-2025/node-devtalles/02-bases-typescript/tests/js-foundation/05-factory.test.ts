import { buildMakePerson } from "../../src/js-foundation/05-factory";

describe("Tests on file 05-factory.ts", () => {
  const getId = () => "1234";
  const getAge = () => 32;

  test("should return a function  ", () => {
    const makePerson = buildMakePerson({ getId, getAge });

    expect(typeof makePerson).toBe("function");
  });

  test("should return a person", () => {
    const makePerson = buildMakePerson({ getId, getAge });

    const person = makePerson({ name: "John", birthdate: "1985-10-21" });

    expect(person).toEqual({
      id: "1234",
      name: "John",
      birthdate: "1985-10-21",
      age: 32,
    });
  });
});
