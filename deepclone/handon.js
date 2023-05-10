function deepClone(obj, cache = new WeakMap()) {
    if (typeof obj !== 'object') return obj
    if (cache.get(obj)) return cache.get(obj)
    const res = Array.isArray(obj) ? [] : {}
    for (const key in obj) {
        res[key] = deepClone(obj[key], cache)
        cache.set(obj[key], res[key])
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
