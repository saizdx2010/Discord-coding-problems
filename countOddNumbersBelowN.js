function oddCount(n) {
    // your code here
    let count = 0;

    for (let i = 1; i < n; i++) {
        if (i % 2 == 1) {
            count++
        }

    }


    return Math.floor(count);

}

console.log(oddCount(1500000000))