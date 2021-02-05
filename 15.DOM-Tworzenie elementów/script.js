
//zad 1
const eldiv = document.createElement("div");
eldiv.innerText = "To jest nowy element";
document.body.appendChild(eldiv);

// zad 2

const fruits = ['kiwi', 'banan', 'mango', 'orzechy', 'jagody', 'mandarynki', 'awokado']
const ul = document.createElement("ul");
fruits.forEach(v => {
    const li = document.createElement("li");
    li.innerText = v;
    ul.appendChild(li);
});
document.body.appendChild(ul);

// zad 3

document.body.addEventListener('click', () => {
    const lis = document.querySelectorAll('ul li');
    lis.forEach((child, i) => {
        if (i % 2 === 0) child.remove();
    });
});

// zad 4

const button = document.createElement('button');
button.innerText = 'ClickMe';
button.addEventListener('click', (e) => {
    e.target.remove();
});

document.body.appendChild(button);

// zad 5
const random = Math.round(Math.random() * 8);

  for (let a = 0; a < random; a++) {
      const someDiv = document.createElement('div');

      someDiv.innerHTML = `to jest div numer ${a}`;
      eldiv.appendChild(someDiv);
  }

