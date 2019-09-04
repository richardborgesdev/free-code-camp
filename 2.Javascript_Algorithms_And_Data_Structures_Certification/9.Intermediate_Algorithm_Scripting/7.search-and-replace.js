function myReplace(str, before, after) {
    var isUpper = before.match(/^[A-Z]/);
    
    if (isUpper) {
      after = after.split('');
      after[0] = after[0].toUpperCase();
      after = after.join('');
    }
  
    str = str.replace(before, after);
  
    console.log(str);
    return str;
  }
  
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
  myReplace("His name is Tom", "Tom", "john");