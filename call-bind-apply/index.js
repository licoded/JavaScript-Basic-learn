console.log('This is from "call、bind and apply!"');

function add(x, y) {
    console.log(`add(${x}, ${y})`);
    return x + y;
}

const applyRes = add.apply(null, [1, 2])
console.log(`applyRes: ${applyRes}`);

const callRes = add.call(null, 1, 2);
console.log(`callRes: ${callRes}`);

const bindRes = add.bind(null, 1, 2);
console.log(`bindRes: ${bindRes()}`);