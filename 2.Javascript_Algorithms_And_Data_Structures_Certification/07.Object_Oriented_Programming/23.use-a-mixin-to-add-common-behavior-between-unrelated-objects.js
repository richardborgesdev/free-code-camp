let bird = {
    name: "Donald",
    numLegs: 2
  };

  let boat = {
    name: "Warrior",
    type: "race-boat"
  };

  // Add your code below this line
  let glideMixin = (obj) => {
      obj.glide = () => {
          console.log('glide');
      };
  };

  glideMixin(bird);
  glideMixin(boat);
  bird.glide();
  boat.glide();