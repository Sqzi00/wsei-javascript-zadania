//zad 1
var btn = document.querySelector('#test-event');
btn.addEventListener("click",function(event){
   console.log(event.type); 
});
btn.addEventListener("mouseover",function(event){
    console.log(event.type);
});
addEventListener("mousemove",function(event){
    console.log(event.type);
});
addEventListener("keypress",function (event){
    console.log(event.type);
});
addEventListener("scroll",function(event){
    console.log(event.type); 
});
document.querySelector('#input-test').addEventListener("change",function(event){
    console.log(event.type); 

});



      
  //zad 2
  
function take(){
    const buttonEx2 = document.getElementById('ex2')
    buttonEx2.addEventListener('click',enterText =>{
        let dataText=enterText.target.dataset.text;
        let belowElement = eneterText.target.nextElementSibling;
        belowElement.innerText=dataText
    } )
}
take();

// zad 3
function switchColor(){
  const myElement =document.getElementById('ex3')  ;
  myElement.addEventListener('mouseover',(event) => {
      event.target.style.backgroundColor = 'blue';

  });
myElement.addEventListener('mouseout', (event)=> {
    event.target.style.backgroundColor = 'red';
});
}
switchColor();

// zad 4
const inputError =  document.querySelector('#ex3-err');
const input = document.querySelector('#input-test');
input.addEventListener('keyup',(e) =>{
    const reg = /[0-9]/gm;
    const checkIfNumber= e.target.value.match(reg);
    if(checkIfNumber !==null) {
        inputError.innerText = 'You cannot enter number';
    } else {
        inputError.innerText= '';

    }
    
});
// zad 5
const divEx5 = document.getElementById('ex5');
const buttonEx5 = document.getElementById('ex5-button');
let numberOfClick = 0
buttonEx5.addEventListener('click',function counting(){
    numberOfClick++
    if(numberOfClick == 10){
        buttonEx5.removeEventListener('click',counting)
    } else {
        divEx5.innerHTML = numberOfClick
    }
});

// zad 6


function redChange(){
    document.addEventListener('scroll',(event)=>{
        var whereAmI = window.scrollY;
        var body = document.querySelector('body');
    if (whereAmI >200 ){
        body.style.backgroundColor = 'red';
    }else{ body.style.backgroudColor = 'white';
 }
    } );   
    
}
redChange()

// zad 7
var ourInput = document.querySelector('#calculator > input');
    var clearFlag = false;
    var another = false;

    document.querySelectorAll('#calculator > div > button').forEach((element) => {
        element.addEventListener('click', (event) => {
            if (clearFlag == true) {
                ourInput.value = "";
                clearFlag = false;
            }
            ourInput.value = ourInput.value + event.target.innerText;
            if (another == true) {
                ourInput.value = eval(ourInput.value);
                another = false;
                clearFlag = true;
            }
            if (['/', '*', '+', '-'].includes(event.target.innerText)) {
                another = true;
            }
        });
    });
