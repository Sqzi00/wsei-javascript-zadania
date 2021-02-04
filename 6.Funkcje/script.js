// zadanie 1
function sayHi() {
    console.log('Udało się!');
}

sayHi();

// zadanie  2
function changer(param) {
    console.log(param);
}

changer('test param');

// zadanie 3
const x = [1, 2, 3, 4, 5];
function table(x){
  return x;
}
console.log(table(x));

// zad 4

function myString(str) {
    let i = 0;
    const timer = setInterval(() => {
        if(i < 5) {
            console.log(str);
            i++;
        }
        else{
            console.log("Koniec");
            clearInterval(timer);
        } 
    }, 3000);
}


myString("Counting...");
