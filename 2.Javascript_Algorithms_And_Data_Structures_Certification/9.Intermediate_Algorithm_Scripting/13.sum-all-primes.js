function sumPrimes(num) {
    let sum = 0;

    for (let x = 0; x <= num; x++) {
      if (isPrime(x)) {
        sum += x;
      }
    }
    return sum;
  }

  function isPrime(n) {
    if (n === 1) {
      return false;
    } else if(n === 2) {
      return true;
    } else {
      for (var x = 2; x < n; x++) {
        if (n % x === 0) {
          return false;
        }
      }
      return true;
    }
  }

  console.log(sumPrimes(977));