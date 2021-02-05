//zadanie 1
var car = {
  name: 'Audi',
  model: 'A3',
  power: '150HP',
  color: 'red'
};
console.log(car);

// zadanie 2

car.changeName = function(newName){
    this.name = newName;
}
car.changeName('Fiat');
console.log(car);

//zadanie 3

function sumObject(arr) {
    this.sum = arr.reduce((a, b) => a + b);
}

let sumObj = new sumObject([2, 4, 6, 10]);

console.log(sumObj.sum);

// zadanie 4

const car = {
    name: 'BMW',
    age: "12",
    color: 'red'
}
for(let key in car){
    console.log(key + ":" +car[key]);
}
// zadanie 5
const car = {
  name: 'Fiat',
   model: 'Tipo',
  age: 49,
  color: 'Blue'
 
}
Object.keys(car).forEach((key) => console.log(`${key}: ${car[key]}`))

// zadanie  6
const car = {
  name: 'Fiat',
  model: 'Tipo',
  age: 9,
  color: 'Blue'
 
};
car.width =2005;
car.hello =()=> {
    console.log("Hello");
}
car.hello();

//


