class Fuel {
  constructor(volume, density) {
    this.volume = volume;
    this.density = density;
  }

  getWeight() {
    return this.volume * this.density;
  }
}

const gas = new Fuel(50, 0.9);
console.log(gas.getWeight());

class Auto {
  constructor(name, ownWeight, fuel) {
    this.name = name;
    this.ownWeight = ownWeight;
    this.fuel = fuel;
  }

  getFullWeight() {
    return this.ownWeight + this.fuel.getWeight()
  }
}
const BMW = new Auto('BMW', 4000, gas)

console.log(BMW.getFullWeight())