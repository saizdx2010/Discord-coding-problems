function findMultiples(integer, limit) {
    //your code here
    let arr = [];
    if (integer >= limit) {
        return [integer]
    } else {

        for (let i = integer; i <= limit; i += integer) {
            arr.push(i)
        }
    }
    return arr;
}

console.log(findMultiples(5, 25))