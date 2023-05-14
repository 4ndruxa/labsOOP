
class Car {
    constructor(make, model, year, litersBy100km, speed, price) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.litersBy100km = litersBy100km;
      this.speed = speed;
      this.price = price;
    }
  
    getSpeedRange() {
        return `The speed range for this car is ${this.speed} km per hour.`;
    }
  
    getFuelEfficiency() {
        return `The fuel efficiency for this car is ${this.litersBy100km} liters per 100km.`;
    }

    getCostPer100Km(costPerLiter) {
        const costPerKm = costPerLiter * this.litersBy100km;
        return `The cost per 100km for this car is ${costPerKm} UAH.`;
      }
  }
  
  class EconomyCar extends Car {
    constructor(make, model, year, litersBy100km, speed, price) {
      super(make, model, year, litersBy100km, speed, price);
      this.carType = 'Economy Car';
    }
  }
  
  class CompactCar extends Car {
    constructor(make, model, year, litersBy100km, speed, price) {
      super(make, model, year, litersBy100km, speed, price);
      this.carType = 'Compact Car';
    }
  }
  
  class MidsizeCar extends Car {
    constructor(make, model, year, litersBy100km, speed, price) {
      super(make, model, year, litersBy100km, speed, price);
      this.carType = 'Midsize Car';
    }
  }
  
  class FullSizeCar extends Car {
    constructor(make, model, year, litersBy100km, speed, price) {
      super(make, model, year, litersBy100km, speed, price);
      this.carType = 'Full-size Car';
    }
  }
  
  class CarCollection {
    constructor(cars) {
      this.cars = cars;
    }
  
    getCarTypes() {
        return this.cars.map(car => car.carType);
    }

    getCarCollectionTotalPrice() {
        return this.cars.reduce(function (acc, car) { return acc + car.price; }, 0);
    }
  
    filterCarsByType(carType) {
        return this.cars.filter(car => car.carType === carType);
    }

    sortCarsByFuelEfficiency() {
        return this.cars.sort((a, b) => a.litersBy100km - b.litersBy100km);
    }
    
    findCarBySpeedRange(minSpeed, maxSpeed) {
        return this.cars.find(car => car.speed >= minSpeed && car.speed <= maxSpeed);
    }
  }
  
  const car1 = new EconomyCar('Toyota', 'Yaris', 2018, 6, 165, 13000);
  const car2 = new CompactCar('Honda', 'Civic', 2021, 8, 270, 27000);
  const car3 = new MidsizeCar('Ford', 'Fusion', 2022, 7, 190, 17000);
  const car4 = new FullSizeCar('Volkswagen', 'Passat B8', 2022, 10, 220, 40000);
  
  const carCollection = new CarCollection([car1, car2, car3, car4]);
  
  console.log(carCollection);
  console.log(carCollection.getCarTypes());
  console.log(carCollection.getCarCollectionTotalPrice());
  
  const compactCars = carCollection.filterCarsByType('Compact Car');
  console.log(compactCars);
  