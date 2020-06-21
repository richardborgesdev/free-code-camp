//Only change code below this line
function countdown(myArray, n){
  if (n < 1) {
    return myArray;
  } else {
    myArray.push(n);
    return countdown(myArray, n - 1);
  }
}

console.log(countdown([], 5));