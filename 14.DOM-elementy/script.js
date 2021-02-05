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
