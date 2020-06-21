function uniteUnique(...arr) {
    arr = arr.reduce(
      (accumulator, currenValue) => [...accumulator, ...currenValue]
    );

    return arr.filter(
      (item, pos) => {
        return arr.indexOf(item) == pos;
      }
    );
  }

  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
  uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);