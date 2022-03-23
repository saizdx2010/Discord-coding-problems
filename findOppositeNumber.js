const opposite = (val) => {
    if (val < 0) {
        return val - val * 2;
    } else {
        return val + (val * -2)
    }

}

console.log(opposite())