function factorial(n) {
    // Calculate the factorial here
    for (let i = n - 1; i >= 1; i--) {
        n = n * i;
    }
    return n;
}

console.log(factorial(12))

