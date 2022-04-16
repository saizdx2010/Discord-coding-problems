function countPositivesSumNegatives(input) {
    let positiveCount = 0;
    let negativeArr = [];

    if (input === null || input.length < 1) {
        return []
    }
    if (input.length > 0) {

        for (let i = 0; i < input.length; i++) {
            if (input[i] > 0) {
                positiveCount++;
            } else if (input[i] < 0) {
                negativeArr.push(input[i])
            }
        }
        if (negativeArr.length > 0) {

            let sumOfNegative = negativeArr.reduce((prev, curr) => prev + curr);
            return [positiveCount, sumOfNegative];
        } else {
            return [positiveCount, 0]
        }

    }

}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))