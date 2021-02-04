// zadanie 1

let num1 = 2;
let num2 = 4;

if(num1>num2) {
  console.log('Liczba1 jest większa');  
} else {
  console.log('Liczba2 jest większa');  
} 

// zadanie 2

let num1 = 2;
let num2 = 4;
let num3 = 3;

 if (num1 > num2) {
 if (num1 > num3) {
        console.log("Liczba num1 jest największa");
    } else {
        console.log("Liczba num3 jest największa");
    }
    } else if (num2 > num3) {
    console.log("Liczba num2 jest największa");
   } else {
    console.log("Liczba num3 jest największa");
}

// zadanie 3

for (let i = 0; i < 10; i++) {
    console.log("Lubię JavaScript");
}
// zadanie 4

let result = 0;
for (let i = 1; i < 10; i++) {
    result += i;
}
console.log(result);

// zadanie 5
var n = 5;

for ( let i = 0; i <= n; i++) {
   if(i % 2 == 0){
       console.log(i+" - parzysta");
   } else {       
       console.log(i+" - nieparzysta");
   }
}
// zadanie 6
for (let x = 2; x < 4; x++)
{
    for (let y = 2; y < 4; y++) 
    {
        console.log("x= " + x + ", y= " + y);
    }
}
// zadanie 7
console.log(0);
for(i = 1; i < 100; i++) {
if(i%15==0)
    console.log("FizzBuzz");
else if(i%3 == 0)
    console.log("Fizz");
else if(i%5 == 0)
    console.log("Buzz");
else
    console.log(i);
}

// zadanie 8
//a
let stars = '*';
let spacer = ' ';
for (var a = 0; a < 5; a++) {
    var result = '';
    for (var b = 0; b <= a; b++) {
        result += stars;
    }
    console.log(result);
}
//b
let stars = '*';
let spacer = ' ';
for (var c = 0; c < 5; c++) {
    var result = '';
    for (var d = 5 - 1; d > c; d--) {
        result += spacer;
    }
    for (var e = 0; e <= c; e++) {
        result += stars + spacer;
    }
    console.log(result);
}
//c
let stars = '*';
let spacer = ' ';
for (var c = 0; c < 5; c++) {
    var result = '';
    for (var d = 5 - 1; d > c; d--) {
        result += spacer;
    }
    for (var e = 0; e <= c; e++) {
        result += stars;
        result += (e < c) ? stars : '';
    }
    console.log(result);
}
//d
let stars = '';
  let spacer = '';
  const height = 5;
  for (let row = 1; row <= height; row++) {
    stars += '*'.repeat(row)
    for (let i = row; i < height; i++) {
      stars += i;
    }
    stars += '\n';

    spacer += '*'.repeat(height - row + 1);
    for (let i = (height - row + 1); i < height; i++) {
      spacer += i;
    }
    spacer += '\n';
  }
  console.log(stars);
  console.log("-".repeat(height));
  console.log(spacer);

// e
var stars = '';
  const size = 5;
  for (let i = 1; i <= size; i++) {
    star += ' '.repeat(size-i);
    star += '* '.repeat(i) + '\n';
  }
  for (let i = 0; i < (size-2); i++) {
    star += " ".repeat(size-1);
    star += "* \n";
  }
  console.log(stars);
//
