// zadanie 1
let myTable =[1,2,3,4,5];
console.log(myTable);

// zadanie 2

let myTable = [1,2,3,4,'go','end'];
console.log(myTable[0]);
console.log(myTable[myTable.length-1]);
console.log(myTable);
for(let i=0; i<myTable.length;i++){
    if(i%2 ==0){
        console.log(myTable[i])
    }
    if(typeof(myTable[i])== 'string'){
        console.log(myTable[i])
    }
    if(typeof(myTable[i])== 'number') {
        console.log(myTable[i])
    }
}

//zad 3
const arr = [ 11,22,5,7,35,18,55]
//1
console.log(arr.reduce((a,b)=> a+b));
//2
console.log(arr.reduce((a,b)=> a-b));
//3
console.log(arr.reduce((a,b) => a+b / arr.length));
//4 
arr.filter((v,i)=> v % 2 ===0).forEach(v=>{
    console.log(v);
});
//5
arr.filter((v,i)=> v % 2 !==0).forEach(v=>{
    console.log(v);

});
//6
let biggest = 0
arr.forEach(v=>{
    if(v>biggest){
        biggest = v;
    }
});
console.log(biggest);
//7
let smallest = 0;
arr.forEach(v=>{
    if(v<smallest){
        smallest=v;
    }
});
console.log(smallest);
//8 
const arrLength = arr.length -1;
arr.forEach((v,i)=> {
    console.log(arr[arrLength - i]);

});

//zad 4

function show(tab){
    return tab.reduce((a,b) => (a+b);
}
console.log(show([1,3,4,5,6]));
  
  // zad 5
 
  function show1(tab){
    let average = tab.reduce((a, b) => a += b) / tab.length;

    tab.map((a) => console.log(a * average));
}
show1([2,3,4,5,6]);
  
  // zad 6
  
  function show2(tab){
    let average = (array) => array.reduce((a, b) => a += b) / array.length;
    avg = average(tab);
    let x = tab.filter(x => x % 2 == 0);

   return ( x.reduce((a,b) => a += b) / x.length);
}
console.log(show2([3,4,5,6,7]));
  
  // zad 7
  function show3(tab){
    return (tab.sort((a, b) => a - b));
}
console.log(show3([4,15,6,27,8,1]));

// zad 8
    const table1 = [11, 12, 13];
const table2 = [14, 15, 16];
function create(table1, table2)
{
  var x = 0;
  const table3 = [];

  for(var a = x; a <= table1.length - 1; a++)
  {
    table3[x] = table1[x] + table2[x];
    x++;
  }
    console.log(table3);
}
create(table1, table2);
    
    // zad 9
    
    function show4(a,b){ 
        return a.filter(c => c != b);
}
console.log(show4([5,6,7,8,9],7));

    // zad 10
    const tab = [-1, 3, 10, -23, 5];
var counter = 0;
function changer(tab)
{
  for( var a = counter; a < tab.length; a++)
  {
      tab[a] = (tab[a] - (2*tab[a]));
    var arr = tab;
  }
  console.log(arr);
}
changer(tab);
