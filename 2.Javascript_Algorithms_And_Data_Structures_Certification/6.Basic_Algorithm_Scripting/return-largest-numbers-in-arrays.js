function largestOfFour(arr) {
    // You can do this!
    let largestNumbers = [];
    for (let x = 0; x < arr.length; x++) {
      let largest = arr[x][0];
      for (let y = 1; y < arr[x].length; y++){
        if (arr[x][y] > largest) {
          largest = arr[x][y];
        }
      }
      largestNumbers.push(largest);
    }
    console.log(largestNumbers);
    return largestNumbers;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);