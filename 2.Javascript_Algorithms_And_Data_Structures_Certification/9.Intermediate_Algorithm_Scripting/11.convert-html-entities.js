function convertHTML(str) {
    // &colon;&rpar;
    debugger;
    str = str.replace(/&/g, "&amp;");
    str = str.replace(/</g, "&lt;");
    str = str.replace(/>/g, "&gt;");
    str = str.replace(/"/g, "&quot;");
    str = str.replace(/'/g, "&apos;");
    console.log(str);

    return str;
  }

  convertHTML("Dolce & Gabbana");
  convertHTML("Schindler's List");