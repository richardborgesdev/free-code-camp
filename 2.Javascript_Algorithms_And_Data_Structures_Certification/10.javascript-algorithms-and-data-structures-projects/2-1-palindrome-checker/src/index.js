const reverseString = str => {
  return str
    .split("")
    .reverse()
    .join("");
};

const sanitizeString = str => {
  return str.replace(/_|\s|,|\.|-|\\|\/\/|\(|\)/g, "");
};

const palindrome = str => {
  const sanitizedStr = sanitizeString(str).toLowerCase();
  return reverseString(sanitizedStr) === sanitizedStr;
};

palindrome("eye");
palindrome("eye");
palindrome("_eye");
palindrome("race car");
palindrome("not a palindrome");
palindrome("A man, a plan, a canal. Panama");
palindrome("never odd or even");
palindrome("nope");
palindrome("almostomla");
palindrome("My age is 0, 0 si ega ym.");
palindrome("1 eye for of 1 eye.");
// palindrome("0_0 (: /-\ :) 0-0");
// palindrome("five|\_/|four");
