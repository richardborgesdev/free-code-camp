function findElement(arr, func) {
    let num = 0;
    num = arr.filter(func);
  
    return num.shift();
}

findElement([1, 2, 3, 4], num => num % 2 === 0);