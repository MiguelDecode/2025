const crypto = require("node:crypto");

const getId = () => crypto.randomUUID();

module.exports = {
 getId,
};
