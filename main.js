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

  static largerSmk = (carsArray) => {
    let maxSmk = 0;
    let objectSmk = null;
    for (const singleCar of carsArray) {
      if (singleCar.smk > maxSmk) {
        maxSmk = singleCar.smk;
        objectSmk = singleCar;
        
      }
    } 
    
    return objectSmk;
  };
}

class Track extends AllCars {
  name;
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
  name;
  constructor(wheelNum, smk, color) {
    super(wheelNum, smk, color);
    this.name = "Bus";
  }
  fullInfo() {
    return `${super.fullInfo()}, ${this.name}.`;
  }
}

class Privet extends AllCars {
  name;
  constructor(wheelNum, smk, color) {
    super(wheelNum, smk, color);
    this.name = "Privet";
  }
  fullInfo() {
    return `${super.fullInfo()} , ${this.name}.`;
  }
}

let TrackOne = new Track(4, 2000, "Green");
let TrackTwo = new Track(9, 10000, "Blue");
let TrackThree = new Track(1, 1000, "Yellow");

let privetOne = new Privet(50, 2000, "Grey");
let BusOne = new Bus(698, 800000, "Pink");

// console.log(privetOne,BusOne);

// console.log(BusOne.fullInfo());;





  console.log(AllCars.largerSmk([TrackOne, TrackTwo, TrackThree]));

btnSendID.onclick = () => {
  let selectValue = selectID.options[selectID.selectedIndex].value;
  switch (selectValue) {
      case "Tracks":
      let TrackTypeOne = new Track(wheelNumID.value, SMKID.value, ColorID.value);
      for (const key in TrackTypeOne) {
        firstRTtable.innerHTML += `<td>${key} : ${TrackTypeOne[key]} ,</td>`;
      }
      break
    case "Buses":
      let BusesTypeOne = new Bus(wheelNumID.value, SMKID.value, ColorID.value);
      for (const key in BusesTypeOne) {
        secondRTtable.innerHTML += `<td>${key} : ${BusesTypeOne[key]} ,</td>`;
      }
      break
      case "Privet":
      let PrivetTypeOne = new Privet(wheelNumID.value, SMKID.value, ColorID.value);
      for (const key in PrivetTypeOne) {
        thirdRTtable.innerHTML += `<td>${key} : ${PrivetTypeOne[key]} ,</td>`;
      }
      break
      default:
        alert("there is no such car.")
  }
};


