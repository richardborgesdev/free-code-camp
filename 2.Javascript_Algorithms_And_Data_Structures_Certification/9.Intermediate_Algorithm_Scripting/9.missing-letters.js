function fearNotLetter(str) {
    let arrStr = str.split('');
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let arrAlphabet = alphabet.split('');
    let indexFrom = arrAlphabet.indexOf(
      str[0]
    );
    let indexTo = arrAlphabet.indexOf(
      str[str.length - 1]
    );


    for (let count = indexFrom; count < indexTo;  count++) {
      if (arrStr.indexOf(arrAlphabet[count]) == -1) {
        return arrAlphabet[count];
      }
    }
  }

  fearNotLetter("stvwx");