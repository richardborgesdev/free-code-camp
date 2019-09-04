function translatePigLatin(str) {
    let strBeginCons = str.match(/^[^aeiou]+/);
  
    if (strBeginCons && strBeginCons.length > 0) {
      str = str + strBeginCons + 'ay';
      str = str.replace(strBeginCons, '');
    } else {
      str = str + 'way';
    }
  
    console.log(str);
    return str;
  }
  
  translatePigLatin("consonant");
  translatePigLatin("california");
  translatePigLatin("algorithm");
  translatePigLatin("glove");