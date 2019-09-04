function smallestCommons(arr) {
    let max = Math.max(arr[0], arr[1]);
    let min = Math.min(arr[0], arr[1]);
    let smallestCommon = leastCommonMultiple(min, min + 1);

    for (let x = min; x <= max; x++) {
      smallestCommon = leastCommonMultiple(smallestCommon, x);
    }

    return smallestCommon;
  }

  function greatestCommonDivisor(n1, n2)
  {
    while (n2 > 0) {
      let tmp = n1;
      n1 = n2;
      n2 = tmp % n2;
    }
    return n1;
  }

  function leastCommonMultiple(n1, n2) {
    return (n1 * n2 / greatestCommonDivisor(n1, n2));
  }

  console.log(smallestCommons([5, 1]));
  console.log(smallestCommons([23, 18]));