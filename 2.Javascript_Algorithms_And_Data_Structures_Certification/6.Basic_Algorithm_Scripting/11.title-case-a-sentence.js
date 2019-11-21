function titleCase(str) {
    let words = str.split(' ');
    let wordsCaptalized = words.map(
    (ele) => {
        let captalize = ele[0].toUpperCase() + ele.substr(1).toLowerCase();
        return captalize;
      }
    );

    return wordsCaptalized.join(' ');
}

titleCase("I'm a little tea pot");