// the global variable
var globalTitle = "Winter Is Coming";

// Add your code below this line
function urlSlug(title) {
  let words = title.toLowerCase().split(" ");

  words = words.filter(
    (ele) => {
      return ele != ""
    }
  );

  return words.join("-");
}
// Add your code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
console.log(winterComing);