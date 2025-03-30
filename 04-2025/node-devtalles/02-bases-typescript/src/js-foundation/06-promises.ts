const { httpClientPlugin } = require("../plugins/http-client.plugin");

export const getPokemonById = async (id: number | string): Promise<string> => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const pokemon = await httpClientPlugin.get(url);

  return pokemon.name;
};

