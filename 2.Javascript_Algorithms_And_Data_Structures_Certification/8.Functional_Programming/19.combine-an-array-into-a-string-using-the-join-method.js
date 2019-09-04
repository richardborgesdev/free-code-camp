function sentensify(str) {
    // Add your code below this line
    let words = str.split(/\W/);
    return words.join(" ");
    // Add your code above this line
}
sentensify("May-the-force-be-with-you");