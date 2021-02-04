// zad 1
let lime = 0 ;
const interval = setInterval(() => {
time +=1;
console.log('Cześć po raz ${time}');
if(time >=15){
clearInterval(interval);
}
},1000);
