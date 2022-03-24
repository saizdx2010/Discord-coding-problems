function compareTriplets(a, b) {
    // Write your code here
    let points = [0, 0]

    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            points[0]++;
        } else if (a[i] < b[i]) {
            points[1]++
        }
    }

    return points;







}

console.log(compareTriplets([1, 2, 3], [3, 2, 1]))