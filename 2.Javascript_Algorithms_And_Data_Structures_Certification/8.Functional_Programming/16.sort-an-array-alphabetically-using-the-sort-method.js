function alphabeticalOrder(arr) {
    // Add your code below this line
    return arr.sort(function(a,b) {
      return a.charCodeAt(0) - b.charCodeAt(0);
    });
    // Add your code above this line
  }
  console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));