
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
        return this.cars.filter(car => car.speed >= minSpeed && car.speed <= maxSpeed);
    }

    createArray(...obj) {
      return this.arrayOfObjects = [...obj];
    }
  }
  
  const car1 = new EconomyCar('Toyota', 'Yaris', 2018, 6, 165, 13000);
  const car2 = new CompactCar('Honda', 'Civic', 2021, 8, 270, 27000);
  const car3 = new MidsizeCar('Ford', 'Fusion', 2022, 7, 190, 17000);
  const car4 = new FullSizeCar('VW', 'Passat', 2022, 10, 220, 40000);
  
  const carCollection = new CarCollection([car1, car2, car3, car4]);
  const carCollectionArr = carCollection.createArray(car1, car2, car3, car4);
  
  console.log(carCollection);
  console.log(carCollection.getCarTypes());
  console.log(carCollection.getCarCollectionTotalPrice());
  
  const carsSortedByFuelEfficiency = carCollection.sortCarsByFuelEfficiency();
  const compactCars = carCollection.filterCarsByType('Compact Car');
  console.log(compactCars);

  const createMarkUp = function(collection) {
    return collection.map((el) => {
      return `
        <table class="table-hierarchy">
          <tr>
            <td class="hierarchy-item-title">Brand:</td>
            <td class="hierarchy-item-value">${el.make}</td>
          </tr>
          <tr>
            <td class="hierarchy-item-title">Model:</td>
            <td class="hierarchy-item-value">${el.model}</td>
          </tr>
          <tr>
            <td class="hierarchy-item-title">Year:</td>
            <td class="hierarchy-item-value">${el.year}</td>
          </tr>
          <tr>
            <td class="hierarchy-item-title">Liters/100km:</td>
            <td class="hierarchy-item-value">${el.litersBy100km}</td>
          </tr>
          <tr>
            <td class="hierarchy-item-title">Price:</td>
            <td class="hierarchy-item-value">${el.price}</td>
          </tr>
          <tr>
            <td class="hierarchy-item-title">Speed:</td>
            <td class="hierarchy-item-value">${el.speed}</td>
          </tr>
        </table>
      `
    }).join('');
  }

  document.getElementById('hierarchy').innerHTML = createMarkUp(carCollectionArr);
  document.getElementById('hierarchy-costs').innerHTML = `<p>${carCollection.getCarCollectionTotalPrice()} USD</p>`;
  document.getElementById('hierarchy-sorted').innerHTML = createMarkUp(carsSortedByFuelEfficiency);
  document.getElementById('code-view').innerHTML = `<a href="https://github.com/4ndruxa/labsOOP/blob/main/lab-6/lab-6.js">github</a>`;

  const inputFieldMax = document.getElementById('inputFieldMax');
  const inputFieldMin = document.getElementById('inputFieldMin');
  const saveButton = document.getElementById('saveButton');

  saveButton.addEventListener('click', handleSave);

  let filteredArr = [];

  function handleSave() {
    const inputValueMax = inputFieldMax.value;
    const inputValueMin = inputFieldMin.value;
    filteredArr = carCollection.findCarBySpeedRange(inputValueMin, inputValueMax);
    if (filteredArr.length) {
      document.getElementById('hierarchy-filtered').innerHTML = createMarkUp(filteredArr);
    } else {
      document.getElementById('hierarchy-filtered').innerHTML = `<p>В діапазоні від ${inputValueMin}км/год до ${inputValueMax}км/год немає авто в автопраку</p>`;
    }
  }
