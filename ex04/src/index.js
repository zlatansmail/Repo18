let arena = new Map();

arena.set("author", "Gigi");
arena.set("publisher", "Mistral");
arena.set("numberOfPages", 28);
arena.set("year", 2021);

for (let value of arena) console.log(value);
module.exports = arena;