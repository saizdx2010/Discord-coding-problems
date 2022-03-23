const getEvenNumbers = numbersArray => {
    const filtered = numbersArray.filter(even => even % 2 === 0);
    return filtered;
}

console.log(getEvenNumbers([1, 2, 3, 4, 5]))