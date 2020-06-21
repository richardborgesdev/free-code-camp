const squareList = (arr) => {
  // only change code below this line
  return arr
    .filter((v) => v > 0 && Number.isInteger(v))
    .map((v) => v * v);
  // only change code above this line
};

// test your code
const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
