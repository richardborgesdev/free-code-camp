const reverseString = str => {
  return str
    .split("")
    .reverse()
    .join("");
};

const palindrome = str => {
  reverseString(str);
  return true;
};

palindrome("eye");
