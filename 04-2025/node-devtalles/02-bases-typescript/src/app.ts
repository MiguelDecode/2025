// const getPokemonById = require("./js-foundation/06-promises.js");
import { getPokemonById } from "./js-foundation/06-promises";
import { buildLogger } from "./plugins/logger.plugin";

/* const info = getPokemonById(1)
  .then((pokemon) => console.log({ pokemon }))
  .catch((err) => console.log(err))
  .finally(() => console.log('Finally')) */

const logger = buildLogger("app.js");

// logger.log("Hola Mundo");

// logger.error("Error in Winston");

