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
    X: { value: 10, find: 0 },
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
  console.log(romanNumbersToString(romanNumbers));
  return num;
};

convertToRoman(36);
