function miniMaxSum(arr) {


    let firstNum = arr.sort().shift();
    let lastNum = arr.sort().pop();


    let miniSum = arr.reduce((prev, curr) => prev + curr) + firstNum;
    let maxSum = arr.reduce((prev, curr) => prev + curr) + lastNum;

    console.log(miniSum + " " + maxSum)

}

console.log(miniMaxSum([7, 69, 2, 221, 8974]))