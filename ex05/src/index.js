let shoppingList = new Map([
    ["Banana", 1],
    ["Pineapple", 2],
    ["Pear", 3],
    ["Carrot", 55],
    ["Apple", 44]
]);

let arrKey = [];
for (let key of shoppingList.keys()) {
    arrKey.push(key);
}

arrKey.forEach((key) => {
    console.log("groceries: ", key);
});

let arrValue = [];
for (let value of shoppingList.values()) {
    arrValue.push(value);
}

arrValue.forEach((value) => {
    console.log("amount: ", value);
});

for (let [key, value] of shoppingList.entries()) {
    console.log(`[ '${key}', ${value} ]`);
}

module.exports = { shoppingList, arrKey, arrValue };