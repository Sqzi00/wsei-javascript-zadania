// zad 1
function Person(name, lastname, age, country, city, language) {
        this.name = name;
        this.lastname= lastname;
        this.age = age;
        this.country = country;
        this.city = city;
        this.language = language;
}


const user1 = new Person ('Pawel','Skuza',30,'Polska','Krakow','polski');
const user2 = new Person ('Adam','Skora',35,'Polska','Krakow','angielski');
const user3 = new Person ('Anna','Sora',45,'Polska','Krakow','angielski');
const user4 = new Person ('Adela','Sroka',55,'Polska','Krakow','angielski');
const user5 = new Person ('Ada','Kora',65,'Polska','Krakow','angielski');

console.log(user1.country);
console.log(user2);
console.log(user3);
console.log(user4);
console.log(user5);

// zad 2

function Calculator() {
    this.memory = [];
    this.sum = function(a,b) {
      this.memory.push('Dodaj');
      return a + b;
    }
    this.sub= function(a,b){
      this.mempry.push('Odejmij');
      return a-b;
    }
    this.mult = function(a,b) {
      this.memory.push('Pomnóż');
      return a*b;
      
    }
    this.div = function(a,b) {
      this.memory.push('Podziel');
      return a/b;
    }
    this.clear = function (){
      this.memory=[];
    }
    
  }
  const calc = new Calculator();
  console.log(calc.div(25,5));
  console.log(calc.sum(3,4));
  console.log(calc.memory)
  calc.clear();
  console.log(calc.memory)

// zad 3
function Constructor() {
    this.number = 0;
    this.setNumber = function() {
      this.number = Math.floor(Math.random() * 10);
      this.checkNumber();
    }
    this.checkNumber = function(){
      console.log(this.number)
      if(this.number >6){
         cleraInterval(myInterval);
         }
    }
      
      
    }
  const newProg = new Constructor();
  const myInterval = setInterval(() => {
    newProg.setNumber();
  }, 1000);

///
