function* myGenerator() {
    yield* insideGenerator1();
    yield* insideGenerator2();
    yield* insideGenerator3();
}

function* insideGenerator1() {
    for (let x = 1; x < 6; x++) {
        yield x;
    }
}

function* insideGenerator2() {
    for (let x = 10; x <= 15; x++) {
        yield x;
    }
}

function* insideGenerator3() {
    for (let x = 6; x <= 9; x++) {
        yield x;
    }
}

const iterator = myGenerator();
const fifteenArray = [];

for (let i = 0; i < 16; i++) {
    let iter = iterator.next();
    fifteenArray[i] = iter.value + (iter.done ? "!" : "#");
}

console.log(fifteenArray.join(", "));


module.exports = { fifteenArray, myGenerator };