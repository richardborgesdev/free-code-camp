function diffArray(arr1, arr2) {
    var newArr = [];
    // Same, same; but different.
    for (let x = 0; x < arr1.length; x++) {
      if (arr2.indexOf(arr1[x]) == -1) {
        newArr.push(arr1[x]);
      }
    }
  
    for (let x = 0; x < arr2.length; x++) {
      if (arr1.indexOf(arr2[x]) == -1) {
        newArr.push(arr2[x]);
      }
    }
  
    console.log(newArr);
    return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);