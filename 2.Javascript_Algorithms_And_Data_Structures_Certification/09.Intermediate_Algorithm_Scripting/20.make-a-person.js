var Person = function(firstAndLast) {
    let fullName = firstAndLast;

    this.setFullName = (firstAndLast) => {
      fullName = firstAndLast;
    };

    this.getFullName = function() {
      return fullName;
    };

    this.setFirstName = (first) => {
      fullName = first + ' ' + fullName.split(' ')[1];
    };

    this.getFirstName = () => {
      return fullName.split(' ')[0];
    };

    this.setLastName = (last) => {
      fullName = fullName.split(' ')[0] + ' ' + last;
    };

    this.getLastName = () => {
      return fullName.split(' ')[1];
    };
  };

  var bob = new Person('Bob Ross');
  console.log(bob.getFullName());
  console.log(Object.keys(bob).length);