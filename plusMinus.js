function plusMinus(arr) {
    // Write your code here
    const positive = arr.filter(num => num > 0).length / arr.length;
    const negative = arr.filter(num => num < 0).length / arr.length;
    const zero = arr.filter(num => num === 0).length / arr.length;

    let array = [];

    let posVal = positive.toFixed(6);
    let negVal = negative.toFixed(6);
    let zerVal = zero.toFixed(6);

    array.push(posVal, negVal, zerVal)

    return array.join('\r\n');



}

console.log(plusMinus([5, -5, -12, 0]))