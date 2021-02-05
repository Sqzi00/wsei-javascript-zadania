//zad 1
const divs = document.querySelectorAll('.more-divs');
function listDivs(paramArr){
    let newArray =[];
    for (let i=0; i <paramArr.length; i ++){
        newArray.push(paramArr[i].tagName);

    }
    return newArray;
}
console.log(listDivs(divs));

// zad 2
function list(param){
    console.log(param.innerHTML);
    console.log(param.outerHTML);
    console.log(param.className);
    console.log([...param.classList]);
    console.log(param.dataset);

}
list(document.querySelector(".short-list"))

//zad 3

function numbers(...int) {
        return {
            sum: int.reduce((prev, curr) => parseInt(prev) + parseInt(curr)),

            difference: int.reduce((prev, curr) => prev - curr),
        }
    }

    let numb = document.querySelector('#datasetCheck').dataset;
    console.log(numbers(numb.numberone, numb.numbertwo, numb.numberThree));

// zad 4

document.getElementById("spanText").innerText = "dowolnny";

// zad 5

document.getElementById("spanText").className = "newClassName";
// zad 6
var element = document.getElementById("classes");
var list = element.classList;
var concat = [];
for (let i=0 ; i< list.length; i++)
{
    concat.push(list[i]);
    console.log(list[i]);
}
console.log(concat.join('+'));
element.className= '';

// zad 7

const list2 = document.querySelectorAll('#longList>li')
function addAttributes(elements){
    elements.forEach(element => {
        if(!element.getAttribute("data-text")){
            element.dataset.text = "text";
        }
    })
}
const result =addAttributes(list2)

// zad 8

function saveString(string) {
  const obj = {
    newClass: string
  }
  return obj;
}

function addNewClass(obj) {
  const newClass = obj.newClass;
  document.getElementById('myDiv').classList.add(newClass);
}

addNewClass(saveString('string_z_parametru'));
function saveString(string) {
  const obj = {
    newClass: string
  }
  return obj;
}

function addNewClass(obj) {
  const newClass = obj.newClass;
  document.getElementById('myDiv').classList.add(newClass);
}

addNewClass(saveString('string_z_parametru'));

// zad 9
