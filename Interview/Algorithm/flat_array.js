const a = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, [11]]]]
function flat(array) {
    const result = []
    array.forEach(item => {
        if (Array.isArray(item)) {
            result.push(...flat(item))
        } else {
            result.push(item);
        }
    })

    return result
}

console.log(flat(a));