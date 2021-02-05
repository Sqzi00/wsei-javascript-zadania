//zad 1
//a
      document.querySelector('#test-event').addEventListener('click', (event) => console.log(event));
 // b
      document.addEventListener('mousemove', (event) => console.log(event));
 // c
      document.querySelector('#test-event').addEventListener('mouseover', (event) => console.log(event));
  // d
      document.addEventListener('keypress', (event) => console.log(event));
  //e
      document.addEventListener('scroll', (event) => console.log(event));
 // f
      document.querySelector('#input-test').addEventListener('change', (event) => console.log(event));
      
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

