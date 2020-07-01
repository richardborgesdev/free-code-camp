const getCharWithCaesar = char => {
  let code = char.charCodeAt(0);
  const startAlphabetCode = 64;
  const endAlphabetCode = 91;
  const caesarCodes = 13;

  if (code > startAlphabetCode && code < endAlphabetCode) {
    if (code + caesarCodes < endAlphabetCode) {
      code += caesarCodes;
    } else {
      code -= caesarCodes;
    }
  }

  return String.fromCharCode(code);
};

function rot13(str) {
  return str
    .split("")
    .map(char => getCharWithCaesar(char))
    .join("");
}

console.log(rot13("SERR PBQR PNZC"));
