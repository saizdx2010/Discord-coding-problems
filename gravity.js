const flip = (d, a) => {
    //TODO
    if (d === 'R') {
        return a.sort((a, b) => a - b)
    } else if (d === "L") {
        return a.sort((a, b) => b - a)
    }

}


console.log(flip('L', [3, 40, 1]));