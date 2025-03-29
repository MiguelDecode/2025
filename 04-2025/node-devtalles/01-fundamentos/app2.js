const fs = require("fs");

const data = fs.readFileSync("README.md", "utf8");

const newData = data.replaceAll(/React/g, "Angular");

fs.writeFileSync("README.md", newData, "utf8");
