import { getUserById } from "../../src/js-foundation/03-callbacks";

describe("Tests on file 03-callbacks", () => {
  const mockUser = { id: 1, name: "John Doe" };

  test("should return an error if user with id not exist", (done) => {
    const testId = 99;

    getUserById(testId, (error, user) => {
      expect(error).toBe(`User not found with id: ${testId}`);
      expect(user).toBeUndefined();

      done();
    });
  });

  test("should return an user by id", (done) => {
    const testId = 1;

    getUserById(testId, (error, user) => {
      expect(error).toBeUndefined();
      expect(user).toBeTruthy();
      expect(user).toEqual(mockUser);

      done();
    });
  });
});
