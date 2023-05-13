class Collection {
    constructor() {
      this.arrayOfObjects = [];
    }
  
    createArray(...obj) {
      this.arrayOfObjects = [...obj];
    }
  
    ascSort(property) {
      return this.arrayOfObjects.sort((a, b) => {
        let propA = a[property];
        let propB = b[property];
  
        if (propA < propB) {
          return -1;
        }
        if (propA > propB) {
          return 1;
        }
        return 0;
      });
    }
  
    descSort(property) {
      return this.arrayOfObjects.sort((a, b) => {
        let propA = a[property];
        let propB = b[property];
  
        if (propA > propB) {
          return -1;
        }
        if (propA < propB) {
          return 1;
        }
        return 0;
      });
    }
}
  
class Car {
    constructor(make, model, year, color, price) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.color = color;
      this.price = price;
    }
}
  
const collectionFirst = new Collection();
const collectionSecond = new Collection();
  
const toyota = new Car("Toyota", "Camry", 2021, "Red", 35000);
const ford = new Car("Ford", "Focus", 2018, "Grey", 27000);
const bmw = new Car("BMW", "m5", 2022, "Grey", 50000);
const mazda = new Car("Mazda", "cx-5", 2020, "Red", 20000);
const audi = new Car("Audi", "rs7", 2022, "Black", 80000);
  
collectionFirst.createArray(toyota, ford, bmw, mazda, audi);
collectionSecond.createArray(toyota, ford, bmw, mazda, audi);
  
const carsSortedAscByPrice = collectionFirst.ascSort("price");
console.log(carsSortedAscByPrice);
  
const carsSortedDescByYear = collectionSecond.descSort("year");
console.log(carsSortedDescByYear);

document.getElementById('collection').innerHTML = `
    <p>
        const toyota = new Car("Toyota", "Camry", 2021, "Red", 35000);
        const ford = new Car("Ford", "Focus", 2018, "Grey", 27000);
        const bmw = new Car("BMW", "m5", 2022, "Grey", 50000);
        const mazda = new Car("Mazda", "cx-5", 2020, "Red", 20000);
        const audi = new Car("Audi", "rs7", 2022, "Black", 80000);
    </p>
`;

document.getElementById('collection-asc').innerHTML = `<p>${textFiltered}</p>`;
document.getElementById('collection-desc').innerHTML = carsSortedDescByYear.map((el) => {
    return `
        <ul>
            <li><p>Model</p><p>${el.model}</p></li>
        </ul>
    `
});
document.getElementById('code-view').innerHTML = `<a href="https://github.com/4ndruxa/labsOOP/blob/main/lab-3/lab-3.js">github</a>`;