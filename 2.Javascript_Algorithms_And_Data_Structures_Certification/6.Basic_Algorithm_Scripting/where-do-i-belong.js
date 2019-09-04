function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    arr.sort((a, b) => {return a - b});
    let indexToIns = 0;

    for (let x = 0; x < arr.length; x++) {
      if (num > arr[x]) {
        indexToIns = x + 1;
      } else if (num == arr[x]) {
        indexToIns = x;
      }
    }
    console.log(indexToIns);
    return indexToIns;
}


getIndexToIns([10, 20, 30, 40, 50], 35);