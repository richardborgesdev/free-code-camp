function checkPositive(arr) {
    // Add your code below this line
    return arr.some(
      (ele) => {
        return ele > 0;
      }
    );
    // Add your code above this line
}
console.log(checkPositive([1, 2, 3, -4, 5]));