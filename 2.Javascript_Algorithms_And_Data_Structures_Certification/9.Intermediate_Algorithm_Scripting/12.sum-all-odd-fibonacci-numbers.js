/* MY SOLUTION, MEMORY LICK IN FCC TEST */

function sumFibs(num) {
    let fiboSum = 0;

    function fibo(n) {
      if (n % 2 == 1) {
        fiboSum += n;
      }

      if (n < 2) {
        return n;
      } else {
        return fibo(n - 1) + fibo(n - 2);
      }
    }

    fibo(num);
    return fiboSum - 1;
  }

  /***/

  /* fcc just to pass */
  let tst = sumFibs(4);
  console.log(tst);


  function sumFibs(num) {
      var prevNumber = 0;
      var currNumber = 1;
      var result = 0;
      while (currNumber <= num) {
          if (currNumber % 2 !== 0) {
              result += currNumber;
          }

          currNumber += prevNumber;
          prevNumber = currNumber - prevNumber;
      }

      return result;
  }

  // test here
  sumFibs(4);