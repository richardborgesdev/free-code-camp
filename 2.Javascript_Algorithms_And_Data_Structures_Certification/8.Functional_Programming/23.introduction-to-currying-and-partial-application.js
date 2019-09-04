function add(x) {
    // Add your code below this line
    return (y) => {
      return (z) => {
        return x + y +z;
      }
    }
    // Add your code above this line
}
console.log(add(10)(20)(30));