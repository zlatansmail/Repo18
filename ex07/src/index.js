let numberArray = [9, 5, 4, 11, 5, 12, 12, 15, 4, 2, 5];
let uniqueArray = [...new Set(numberArray.sort())];
console.log(uniqueArray.sort((function(a, b) { return a - b })));


module.exports = { numberArray, uniqueArray };