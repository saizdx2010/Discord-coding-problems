const calcAverageAge = (arr) => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }

    return sum / arr.length;
}
const umur = [1,23,40,50]
console.log(calcAge(umur))