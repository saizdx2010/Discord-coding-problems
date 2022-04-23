function digitize(n) {
    //code here

    let string = String(n).split('').reverse()
    let numArr = []

    string.forEach(char => numArr.push(Number(char)))
    return numArr;
}