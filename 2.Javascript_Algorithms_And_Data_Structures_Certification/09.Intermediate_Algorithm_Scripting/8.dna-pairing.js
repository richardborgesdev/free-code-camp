function pairElement(str) {
    let strArr = str.split('');
    let DNA = [];
  
    for (let x = 0; x < strArr.length; x++) {
      switch (str[x]) {
        case 'A':
          DNA.push([str[x], 'T']);
          break;
        case 'T':
          DNA.push([str[x], 'A']);
          break;
        case 'C':
          DNA.push([str[x], 'G']);
          break;
        case 'G':
          DNA.push([str[x], 'C']);
          break;
      }
    }
  
    return DNA;
}

pairElement("GCG");