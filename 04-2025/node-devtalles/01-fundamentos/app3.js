const fs = require("fs");

const data = fs.readFileSync("README.md", "utf8");

const words = data.split(" ");

const angularWordCount = data.match(/Angular/gi ?? []).length;

console.log("Total de palabras: ", words.length);
console.log("Total de Angular: ", angularWordCount);
