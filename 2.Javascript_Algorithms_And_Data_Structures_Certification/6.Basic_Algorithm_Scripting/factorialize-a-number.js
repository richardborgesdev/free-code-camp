function factorialize(num) {
    let factor = 1;
    for (let x = 2; x <= num; x++) {
      factor *= x;
    }
    return factor;
}

factorialize(5);