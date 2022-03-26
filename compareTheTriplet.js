function compareTriplets(a, b) {
    // Write your code here
    let points1 = [0]
    let points2 = [0]

    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            points1[0]++;
        } else if (a[i] < b[i]) {
            points2[0]++;
        }
    }

    return points1.concat(points2);







}

console.log(compareTriplets([1, 2, 3], [3, 2, 1]))