function checkPositive(arr) {
    // Add your code below this line
    return arr.every(
        (ele) => {
            return ele > -1;
        }
    );
    // Add your code above this line
}
checkPositive([1, 2, 3, -4, 5]);