const { readFileSync, writeFileSync } = require("fs");

const read = () => {
  const list = readFileSync("./todos.json", "utf8");
  return JSON.parse(list);
};

const write = (data) => {
  writeFileSync("./todos.json", `${JSON.stringify(data)}`);
};

module.exports = { read, write };
