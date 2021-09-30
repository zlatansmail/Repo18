let one = new Set([1, 2, 3, 4, 5]);
let two = new Set([6, 4, 3, 2]);

unionSet = new Set([...one, ...two]);
intersectionSet = new Set(
    [...one].filter(x => two.has(x)));
differenceSet = new Set(
    [...one].filter(x => !two.has(x)));

console.log(unionSet);
console.log(intersectionSet);
console.log(differenceSet);

module.exports = { unionSet, intersectionSet, differenceSet };