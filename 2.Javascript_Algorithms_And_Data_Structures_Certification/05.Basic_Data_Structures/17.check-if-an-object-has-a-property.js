let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };

  function isEveryoneHere(obj) {
    // change code below this line
    if ('Alan' in obj
      && 'Jeff' in obj
      && 'Sarah' in obj
      && 'Ryan' in obj
    ) {
      return true;
    }
    return false;
    // change code above this line
}

console.log(isEveryoneHere(users));