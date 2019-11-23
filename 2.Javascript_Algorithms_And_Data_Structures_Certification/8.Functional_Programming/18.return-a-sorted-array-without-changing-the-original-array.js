var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Add your code below this line
  let sortedArr = [].concat(arr);

  return sortedArr.sort(
    (a, b) => {
      return a - b;
    }
  );

  // Add your code above this line
}
nonMutatingSort(globalArray);