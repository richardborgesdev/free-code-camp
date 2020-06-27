const romanNumbersToString = romanNumbersObj => {
  let str = "";

  for (const [representation, romanObj] of Object.entries(romanNumbersObj)) {
    for (let index = 0; index < romanObj.find; index++) {
      str += representation;
    }
  }

  return str;
};

const convertToRoman = num => {
  const romanNumbers = {
    M: { value: 1000, find: 0 },
    CM: { value: 900, find: 0 },
    DCCC: { value: 800, find: 0 },
    DCC: { value: 700, find: 0 },
    DC: { value: 600, find: 0 },
    D: { value: 500, find: 0 },
    CD: { value: 400, find: 0 },
    C: { value: 100, find: 0 },
    XC: { value: 90, find: 0 },
    LX: { value: 60, find: 0 },
    XL: { value: 40, find: 0 },
    X: { value: 10, find: 0 },
    IX: { value: 9, find: 0 },
    V: { value: 5, find: 0 },
    IV: { value: 4, find: 0 },
    I: { value: 1, find: 0 }
  };

  let left = num;
  for (const [, romanObj] of Object.entries(romanNumbers)) {
    romanObj.find = Math.trunc(left / romanObj.value);
    left = left - romanObj.find * romanObj.value;
  }

  console.log(romanNumbers);
  console.log(num, romanNumbersToString(romanNumbers));
  return romanNumbersToString(romanNumbers);
};

convertToRoman(36);
convertToRoman(3999);
