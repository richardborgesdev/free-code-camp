function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
    return str.split(target).pop() == ''
      ? true
      : false;
}

confirmEnding("Bastian", "n");