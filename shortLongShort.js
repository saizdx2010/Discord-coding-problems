const shortLongShort = (a, b) => {
    if (a.length < b.length) {
        return `${a}${b}${a}`;
    } else if (b.length < a.length) {
        return `${b}${a}${b}`;
    }
}

console.log(shortLongShort("1", "22"))