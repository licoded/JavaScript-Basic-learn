Function.prototype.myCall = function(thisObj, ...argArray) {
    if(typeof thisObj !== 'object' || thisObj === null) return this(...argArray);
    const fnSymbol = Symbol('fn');
    thisObj[fnSymbol] = this;
    const res = thisObj[fnSymbol](...argArray);
    delete thisObj[fnSymbol]
    // console.log(thisObj[fnSymbol]);
    return res;
}

Function.prototype.myBind = function(thisObj, ...argArray) {
    if(typeof thisObj !== 'object' || thisObj === null) {
        const _this = this;
        const resFunction = function() {
            return _this(...argArray);
        }
        return resFunction;
    }
    const fnSymbol = Symbol('fn');
    thisObj[fnSymbol] = this;
    const resFunction = function(){
        const res = thisObj[fnSymbol](...argArray);
        delete thisObj[fnSymbol]
        // console.log(thisObj[fnSymbol]);
        return res;
    };
    return resFunction;
}

function add(x, y) {
    console.log(`add(${x}, ${y})`);
    return x + y;
}

// {
//     const callRes = add.call(null, 1, 2)
//     console.log(`callRes: ${callRes}`);

//     const myCallRes = add.myCall(null, 1, 2)
//     console.log(`myCallRes: ${myCallRes}`);
// }


function getAge() {
    return this.age;
}

// console.log('===========================');

// console.log(`getAge: ${getAge()}`);
// var age = 1;
// console.log(`getAge: ${getAge()}`);

// {
//     const callRes = getAge.call({age: 16})
//     console.log(`callRes: ${callRes}`);

//     const myCallRes = getAge.myCall({age: 16})
//     console.log(`myCallRes: ${myCallRes}`);
// }

// {
//     const callRes = getAge.call()
//     console.log(`callRes: ${callRes}`);

//     const myCallRes = getAge.myCall()
//     console.log(`myCallRes: ${myCallRes}`);
// }

console.log('===========================');

{
    const bindRes = add.bind(null, 1, 2);
    console.log(`bindRes: ${bindRes()}`);
    const myBindRes = add.myBind(null, 1, 2);
    console.log(`myBindRes: ${myBindRes()}`);
}

{
    const bindRes = getAge.bind({age: 16})
    console.log(`bindRes: ${bindRes()}`);

    const myBindRes = getAge.myBind({age: 16})
    console.log(`myBindRes: ${myBindRes()}`);
}

function getThis() {
    if(typeof this === 'object' && this !== null)
        return JSON.stringify(this);
    return this.toString();
}

{
    const bindRes = getThis.bind({age: 16})
    console.log(`bindRes: ${bindRes()}`);

    const myBindRes = getThis.myBind({age: 16})
    console.log(`myBindRes: ${myBindRes()}`);
}