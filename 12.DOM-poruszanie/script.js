///zad 1

var parent = document.getElementById("buz").parentElement;
console.log('aaa',parent);

var brother = document.getElementById("buz").nestElementSibling;
console.log(brother);

var childs =document.getElementById("foo").children;
console.log(childs);

var parent = document.getElementById("foo").parentNode;
console.log(parent);

var firstChild = document.getElementById("foo").children[0];
console.log(firstChild);

var mediumChild = document.getElementByID("foo").children[1];
console.log(mediumChild)

// zad 2
const listenEvent = (element) =>{
    element.addEventListener("click",()=>{
        console.log(element.children[0].children[0].children[0].
        children[1].children[0].children[0].textContent);

    })
}
ex2Element = document.querySelector("#ex2");
listenEvent(ex2Element);

    
    
    // zad3
    document.querySelector('#ex3').querySelectorAll('button').forEach((element) => {
        element.addEventListener('click', (event) => {
            event.target.nextElementSibling.style.display = event.target.nextElementSibling.style.display == 'none' ? 'block' : 'none';
        });
    });
    
    // zad 4
    document.querySelector('#ex3').querySelectorAll('button').forEach((element) => {
        element.addEventListener('click', (event) => {
            var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            event.target.parentElement.style.backgroundColor = randomColor;
        });
    });
    
    // zad 5
    let ex5 = document.querySelector('#ex5');
    let divs = ex5.querySelectorAll('div');
    let list = ex5.querySelectorAll('ul>li');

    // .1.
    function first(e) {
    list[0].style.backgroundColor = e.srcElement.style.backgroundColor;
    }
    // .2.
    function second(e) {
    list[list.length-1].style.backgroundColor = e.srcElement.style.backgroundColor;
    }
    // .3.
    function third(e) {
    Array.from(list)
        .filter((value) => value.innerHTML % 2 === 0)
        .forEach((li) => li.style.backgroundColor = e.srcElement.style.backgroundColor)
    }
    // .4.
    function fourth(e) {
    list.forEach((li) => li.style.backgroundColor = e.srcElement.style.backgroundColor)
    }
    // .5.
    function fifth(e) {
    ex5.querySelector('ul').style.backgroundColor = e.srcElement.style.backgroundColor;
    }

    divs.forEach((div) => {
    div.addEventListener('mouseover', third)});
    
