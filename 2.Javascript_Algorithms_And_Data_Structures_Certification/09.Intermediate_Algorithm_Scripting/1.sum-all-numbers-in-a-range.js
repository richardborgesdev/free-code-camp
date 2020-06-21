function sumAll(arr) {
    let sum = 0;
    let startValue = arr[0];
    let endValue = arr[arr.length - 1];

    if (startValue > endValue) {
      startValue = arr[arr.length - 1];
      endValue = arr[0];
    }

    for (let x = startValue; x <= endValue; x++) {
      sum += x;
    }
    return sum;
}

console.log(sumAll([1, 4]));
console.log(sumAll([4, 1]));