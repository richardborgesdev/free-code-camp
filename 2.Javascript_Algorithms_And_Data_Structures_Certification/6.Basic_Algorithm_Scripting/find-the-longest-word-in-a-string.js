function findLongestWordLength(str) {
    let longest = 0;
    let arrStr = str.split(' ');
    let longestIndex = -1;

    for (let x = 0; x < arrStr.length; x++) {
      if (arrStr[x].length > longest) {
        longest = arrStr[x].length;
        longestIndex = x;
      }
    }

    return longest;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");