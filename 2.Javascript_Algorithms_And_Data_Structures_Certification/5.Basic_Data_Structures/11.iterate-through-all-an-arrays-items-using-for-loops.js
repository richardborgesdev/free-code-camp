function filteredArray(arr, elem) {
    let newArr = [];
    // change code below this line
    for (let x = 0; x < arr.length; x++) {
      if (arr[x].indexOf(elem)== -1) {
        newArr.push(arr[x]);
      }
    }
    // change code above this line
    return newArr;
  }

  // change code here to test different cases:
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));