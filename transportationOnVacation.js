function rentalCarCost(d) {
    // Your solution here
    let cost;
    if (d < 3) {
        cost = 40 * d;
    } else if (d >= 3 && d < 7) {
        cost = 40 * d - 20;
    } else if (d >= 7) {
        cost = 40 * d - 50;
    }
    return cost
}