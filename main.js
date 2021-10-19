class AllCars {
  wheelNum;
  smk;
  color;
  constructor(wheelNum, smk, color) {
    this.wheelNum = wheelNum;
    this.smk = smk;
    this.color = color;
  }

  fullInfo() {
    return `Wheels number:${this.wheelNum}, Smk: ${this.smk} , Color:${this.color}`;
  }

  static largerSmk = (array) => {
    let maxSmk = 0;
    let objectSmk = null;
    for (let i = 0; i < array.length; i++) {
      if (array[i].smk > maxSmk) {
        maxSmk = array[i].smk;
        objectSmk = array[i];
      }
    }
    return objectSmk;
  };
}

class Track extends AllCars {
  constructor(wheelNum, smk, color) {
    super(wheelNum, smk, color);
    this.name = "Track";
  }
  fullInfo() {
    return `${super.fullInfo()} , ${this.name}.`;
  }
  funUpperCase() {
    return this.name.toUpperCase();
  }
  get getUpperCase() {
    return this.funUpperCase();
  }
}

class Bus extends AllCars {
  constructor(wheelNum, smk, color) {
    super(wheelNum, smk, color);
    this.name = "Bus";
  }
  fullInfo() {
    return `${super.fullInfo()}, ${this.name}.`;
  }
}

class Privet extends AllCars {
  constructor(wheelNum, smk, color) {
    super(wheelNum, smk, color);
    this.name = "Privet";
  }
  fullInfo() {
    return `${super.fullInfo()} , ${this.name}.`;
  }
}

let TrackOne = new Track(4, 2000, "Green");
let TrackTwo = new Track(9, 7000, "Blue");
let TrackThree = new Track(1, 1000, "Yellow");

//   console.log(AllCars.largerSmk([TrackOne, TrackTwo, TrackThree]));

btnSendID.onclick = () => {
  let selectValue = selectID.options[selectID.selectedIndex].value;
  switch (selectValue) {
      case "Tracks":
      let TrackTypeOne = new Track(wheelNumID.value, SMKID.value, ColorID.value);
      console.log(TrackTypeOne);
      break
    case "Buses":
      let BusesTypeOne = new Bus(wheelNumID.value, SMKID.value, ColorID.value);
      console.log(BusesTypeOne);
      break
      case "Privet":
      let PrivetTypeOne = new Privet(wheelNumID.value, SMKID.value, ColorID.value);
      console.log(PrivetTypeOne);
      break
  }
};
