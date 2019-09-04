function dropElements(arr, func) {
    // Drop them elements.
    for (let x = 0; x < arr.length; x++) {
      if (func(arr[x])) {
        console.log(x)
        return arr.slice(x, arr.length);
      }
    }

    return [];
  }

  console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));
  console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}));
  console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}));