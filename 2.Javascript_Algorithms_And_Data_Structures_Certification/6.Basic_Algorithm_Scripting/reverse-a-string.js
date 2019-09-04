function reverseString(str) {
    let newStr = [];
    for (let x = str.length - 1; x >= 0; x--) {
      newStr.push(str[x]);
    }
    return newStr.join('');
}

console.log(reverseString("hello"));