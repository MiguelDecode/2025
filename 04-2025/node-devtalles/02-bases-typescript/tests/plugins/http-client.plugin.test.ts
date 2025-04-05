import { httpClientPlugin } from "../../src/plugins/http-client.plugin";

describe("Tests on file http-client.plugin", () => {
  test("should return a string", async () => {
    const data = await httpClientPlugin.get(
      "https://pokeapi.co/api/v2/pokemon/ditto"
    );

    expect(data.name).toBe("ditto");
  });

  test("should have POST,PUT and DELETE methods", () => {
    expect(httpClientPlugin.post).toBeDefined();
    expect(httpClientPlugin.put).toBeDefined();
    expect(httpClientPlugin.delete).toBeDefined();
  });
});
