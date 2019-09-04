// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  var newArray = [];

  // Add your code below this line
  for (let x = 0; x < this.length; x++) {
    newArray.push(callback(this[x]));
  }
  // Add your code above this line
  return newArray;

};

var new_s = s.myMap(function(item){
  return item * 2;
});
console.log(new_s);