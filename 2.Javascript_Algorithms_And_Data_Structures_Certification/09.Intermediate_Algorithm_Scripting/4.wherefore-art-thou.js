function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    let props = Object.keys(source);
    let values = Object.values(source);
  
    console.log(props);
    // Only change code below this line
    for (let x = 0; x < collection.length; x++) {
      let hasAllSource = true;
  
      for (let y = 0; y < props.length; y++) {
        if (collection[x][props[y]] != values[y]) {
          hasAllSource = false;
        }
      }
  
      if (hasAllSource) {
        arr.push(collection[x]);
      }
    }
    // Only change code above this line
    console.log(arr);
    return arr;
  }
  
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" }, 
      { first: "Mercutio", last: null }, 
      { first: "Tybalt", last: "Capulet" }
    ], 
    { last: "Capulet" }
  );
  whatIsInAName(
    [
      { "apple": 1, "bat": 2 }, 
      { "apple": 1 }, 
      { "apple": 1, "bat": 2, "cookie": 2 }, 
      { "bat":2 }
    ], 
    { "apple": 1, "bat": 2 }
  );