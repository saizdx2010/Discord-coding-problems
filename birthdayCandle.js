function birthdayCakeCandles(candles) {
    // Write your code here
    let maxNum = Math.max(...candles);
    let numOfCandles = candles.filter(candle => candle == maxNum);

    return numOfCandles.length

}

console.log(birthdayCakeCandles([1, 2, 3, 3]))