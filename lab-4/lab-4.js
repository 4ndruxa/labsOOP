class Collection {
    constructor() {
      this.arrayOfObjects = [];
    }
  
    createArray(...obj) {
      return this.arrayOfObjects = [...obj];
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
    constructor(brand, model, year, color, price) {
      this.brand = brand;
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
  
const arrFirst = collectionFirst.createArray(toyota, ford, bmw, mazda, audi);
const arrSecond = collectionSecond.createArray(toyota, ford, bmw, mazda, audi);
  
const carsSortedAscByPrice = collectionFirst.ascSort("price");
console.log(carsSortedAscByPrice);
  
const carsSortedDescByYear = collectionSecond.descSort("year");
console.log(carsSortedDescByYear);

const createMarkUp = function(collection) {
  return collection.map((el) => {
    return `
      <table class="table-collection">
        <tr>
          <td class="collection-item-title">Brand:</td>
          <td class="collection-item-value">${el.brand}</td>
        </tr>
        <tr>
          <td class="collection-item-title">Model:</td>
          <td class="collection-item-value">${el.model}</td>
        </tr>
        <tr>
          <td class="collection-item-title">Year:</td>
          <td class="collection-item-value">${el.year}</td>
        </tr>
        <tr>
          <td class="collection-item-title">Color:</td>
          <td class="collection-item-value">${el.color}</td>
        </tr>
        <tr>
          <td class="collection-item-title">Price:</td>
          <td class="collection-item-value">${el.price}</td>
        </tr>
      </table>
    `
  }).join('');
}

document.getElementById('collection').innerHTML = createMarkUp(arrFirst);

document.getElementById('collection-asc').innerHTML = createMarkUp(carsSortedAscByPrice);
document.getElementById('collection-desc').innerHTML = createMarkUp(carsSortedDescByYear);
document.getElementById('code-view').innerHTML = `<a href="https://github.com/4ndruxa/labsOOP/blob/main/lab-4/lab-4.js">github</a>`;