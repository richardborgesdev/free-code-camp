function telephoneCheck(str) {
  var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
  return regex.test(str);
}

let test = 1;
console.log(test++, telephoneCheck("555-555-5555"));
console.log(test++, telephoneCheck("1 555-555-5555"));
console.log(test++, telephoneCheck("1 (555) 555-5555"));
console.log(test++, telephoneCheck("5555555555"));
console.log(test++, telephoneCheck("555-555-5555"));
console.log(test++, telephoneCheck("(555)555-5555"));
console.log(test++, telephoneCheck("1(555)555-5555"));
console.log(test++, telephoneCheck("555-5555"));
console.log(test++, telephoneCheck("5555555"));
console.log(test++, telephoneCheck("1 555)555-5555"));
console.log(test++, telephoneCheck("1 555 555 5555"));
console.log(test++, telephoneCheck("1 456 789 4444"));
console.log(test++, telephoneCheck("123**&!!asdf#"));
console.log(test++, telephoneCheck("55555555"));
console.log(test++, telephoneCheck("(6054756961)"));
console.log(test++, telephoneCheck("2 (757) 622-7382"));
console.log(test++, telephoneCheck("0 (757) 622-7382"));
console.log(test++, telephoneCheck("-1 (757) 622-7382"));
console.log(test++, telephoneCheck("2 757 622-7382"));
console.log(test++, telephoneCheck("10 (757) 622-7382"));
console.log(test++, telephoneCheck("27576227382"));
console.log(test++, telephoneCheck("(275)76227382"));
console.log(test++, telephoneCheck("2(757)6227382"));
console.log(test++, telephoneCheck("2(757)622-7382"));
console.log(test++, telephoneCheck("555)-555-5555"));
console.log(test++, telephoneCheck("(555-555-5555"));
console.log(test++, telephoneCheck("(555)5(55?)-5555"));
