// zad 1

function Person(name,lastname,age,country,city){
  

    this.name = name;
    this.lastname = lastname;
    this.age=age;
    this.country=country;
    this.city=city;
    
    this.showDetails=function (){
      console.log(`Person: ${this.name} ${this.lastname} age: ${this.age} country: ${this.country} 
      city: ${this.city }`);
    }
    
    
    this.addOneYear = function() {
    ++this.age;
       }
    }
    
    const person = new Person ('leon','nowak',19,'Polska','krakow');
    const person2 = new Person ('kamil','leski' ,29, 'Polska' , 'katowice');
    
    
    person.showDetails();
    
    
    person.addOneYear();
    person.addOneYear();
    person.addOneYear();
     
    person.showDetails();
    
    person2.showDetails();
    person2.addOneYear();
    person2.showDetails();
    
    // zad 2
    
    
person.dishes =['ravioli','spaghetti','salad'];
person2.dishes =['chicken ','pizza','rice'];

person.favouriteDishes= function(dish){
    this.dishes.push(dish);}
person2.favouriteDishes= function(dish){
    this.dishes.push(dish);}
console.log(person);
console.log(person2);
console.log('After adding their dishes:');
person.favouriteDishes('carmelice');
console.log(person);
person2.favouriteDishes('pierogi');
console.log(person2);

// zad 3

let calc = {
  a: 0,
  b: 0,
    add: function(c, d){
        this.a = c;
        this.b = d;
    },
    sum: function(){
        return this.a + this.b;
    },
    difference: function(){
        return this.a - this.b;
    },
    product: function(){
        return this.a * this.b;
    },
    quotient: function(){
        if(this.b != 0){
            return this.a / this.b;
        }
      else
        {
            return "Can't divide by 0";
        }
    }
}

calc.add(2,6);
console.log(calc.sum());
console.log(calc.difference());
console.log(calc.product());
console.log(calc.quotient());

// zad 4
class Sim {
  constructor(steps) {
    this.steps = steps;
    this.currentStep = 0;
  }
  
  moveUp() {
    this.currentStep = this.currentStep <= 0 ? 1 : ++this.currentStep;
    if(this.currentStep > this.steps) {
      this.getOff();
    } else {
      console.log(`Idziesz stopień do góry - stopien nr ${this.currentStep}`);
    }
  }
  
  moveDown(){
    this.currentStep = this.currentStep >= this.steps ? this.steps : --this.currentStep;
    if(this.currentStep <= 0) {
      this.getOff();
    }  else {
      console.log(`Idziesz stopień w dół - stopien nr ${this.currentStep}`);
    }
  }
  
  getOff() {
    console.log('Zszedłeś z drabiny, nie możesz iść dalej');
  }

}
