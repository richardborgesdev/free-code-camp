function repeatStringNumTimes(str, num) {
    if (num < 0) {
      return "";
    }
    // repeat after me
    let finalStr = str;
    for (let x = 0; x < num - 1; x++) {
      finalStr += str;
    }
    console.log(finalStr);
    return finalStr;
}

repeatStringNumTimes("abc", 3);