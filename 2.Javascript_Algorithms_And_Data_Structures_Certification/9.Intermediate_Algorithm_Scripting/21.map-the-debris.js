function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;

    for (let x = 0; x < arr.length; x++) {
        let orbitalPeriod = 2 * Math.PI
          * Math.sqrt(
              Math.pow(earthRadius + arr[x].avgAlt, 3)
              / GM
            );
        arr[x].orbitalPeriod = Math.round(orbitalPeriod);
        delete arr[x].avgAlt;
    }

    return arr;
  }

  console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
  console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]));