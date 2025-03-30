const getPokemonById = require("./js-foundation/06-promises.js");

const info = getPokemonById(1)
  .then((pokemon) => console.log({ pokemon }))
  .catch((err) => console.log(err));

