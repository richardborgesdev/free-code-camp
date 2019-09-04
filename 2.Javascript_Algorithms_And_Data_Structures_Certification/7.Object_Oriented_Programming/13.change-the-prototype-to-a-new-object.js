function Dog(name) {
    this.name = name;
}

Dog.prototype = {
    // Add your code below this line
    numLegs: 4,
    eat: () => {
        console.log('au au');
    },
    describe: () => {
        console.log('I\'m a dog');
    }
};