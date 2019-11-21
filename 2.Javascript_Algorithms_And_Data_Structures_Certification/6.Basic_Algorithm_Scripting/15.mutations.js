function mutation(arr) {
    let mainStr = arr[0];
    let lettersToFind = arr[1].split('');

    for (let x = 0; x < lettersToFind.length; x++) {
      if (mainStr.indexOf(lettersToFind[x].toLowerCase()) == -1
        && mainStr.indexOf(lettersToFind[x].toUpperCase()) == -1
      ) {
        return false;
      }
    }

    return true;
}

mutation(["hello", "hey"]);