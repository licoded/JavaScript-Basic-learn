function deepClone(obj) {
    if (typeof obj !== 'object') return obj
    const res = Array.isArray(obj) ? [] : {}
    for (const key in obj) {
        res[key] = deepClone(obj[key])
    }
    return res
}

const num = 10
const obj = { a: 1 }

console.log(num, deepClone(num))
console.log('num === deepClone(num)', num === deepClone(num))
console.log('num == deepClone(num)', num == deepClone(num))

console.log(obj, deepClone(obj))
console.log('obj === deepClone(obj)', obj === deepClone(obj))
console.log('obj == deepClone(obj)', obj == deepClone(obj))
console.log('Object.is(obj, deepClone(obj))', Object.is(obj, deepClone(obj)))
