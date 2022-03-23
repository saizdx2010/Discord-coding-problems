function same(arr1, arr2) {
    arr2.sort()
    const sqArr = [];
    for (let i = 0; i < arr1.length; i++) {
        let num = arr1[i] ** 2;
        sqArr.push(num)
    }
    return answer = sqArr.every((element, index) => {
        if (element === arr2[index]) return true
        else return false

    });

}

