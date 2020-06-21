function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
    // Advanced solution return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase()
    let upperCases = str.match(/[A-Z]/g);
    let strWithoutUpperCases = str.replace(/[A-Z]/g, '  1');
    
    for (let x = 0; x < upperCases.length; x++) {
      strWithoutUpperCases = strWithoutUpperCases.replace(
        ' 1',
        upperCases[x]
      );
    }
  
    //console.log(strWithoutUpperCases);
    str = strWithoutUpperCases
      .replace(/\W|\_/g, '-')
      .split(/\-/)
      .join('-')
      .replace(/\-+/g, '-')
      .replace(/^\-/g, '')
      .toLowerCase();
  
    console.log(str);
    return str;
  }
  
  spinalCase('This Is Spinal Tap');
  spinalCase("thisIsSpinalTap");
  spinalCase("The_Andy_Griffith_Show");
  spinalCase("Teletubbies say Eh-oh");
  spinalCase("AllThe-small Things");