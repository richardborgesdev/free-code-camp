function steamrollArray(arr) {
    // I'm a steamroller, baby
    let result = [];
    getLastLevelArrValues(arr, result);

    return result;
  }

  const getLastLevelArrValues = (arr, lastLevels) => {
    for (let x = 0; x < arr.length; x++) {
      if (Array.isArray(arr[x])) {
        getLastLevelArrValues(arr[x], lastLevels);
      } else {
        lastLevels.push(arr[x]);
      }
    }
  }

  console.log(steamrollArray([1, [2], [3, [[4]]]]));
  console.log(steamrollArray([1, {}, [3, [[4]]]]));