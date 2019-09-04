function truthCheck(collection, pre) {
    // Is everyone being true?
    let preExist = false;

    for (let x = 0; x < collection.length; x++) {
      preExist = false;
      console.log('------');
      for (let y = 0; y < Object.keys(collection[x]).length; y++) {
        console.log(Object.keys(collection[x])[y] + ': ' + collection[x][pre]);
        if (Object.keys(collection[x])[y] == pre && collection[x][pre]) {
          preExist = true;
          continue;
        }
      }

      if (!preExist) {
        return false;
      }
    }

    return preExist;
  }

  truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
  truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age");