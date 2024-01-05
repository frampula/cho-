function Country(countryName, population, area) {
  this.countryName = countryName;
  this.population = population;
  this.area = area;

  this.getDensity = function () {
    return this.population / this.area;
  };
}

let country1 = new Country("Bulgaria", 900000, 400000);

/* ---------------------------------------------------- */

function Auto(name, maxSpeed) {
  this.name = name;
  this.maxSpeed = maxSpeed;
  this.speed = 0;

  this.accelerate = function (accelValue) {
    this.speed = this.speed + accelValue;
    if (this.speed > this.maxSpeed) {
      this.speed = maxSpeed;
    }

    return this.speed;
  };

  this.deaccelerate = function (deaccelValue) {
    this.speed = this.speed - deaccelValue;
    if (this.speed < 0) {
      this.speed = 0;
    }

    return this.speed;
  };

  this.stop = function () {
    this.speed = 0;
    return this.speed;
  };
}

const auto1 = new Auto("Audi", 300);
