
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

// zad 6
const object = { div1: 'to jest div', span1: 'to jest span', div2: { div3: 'to jest div', }, span2: 'to jest span' };
function htmlFromObj(obj, parent = document.body) {
    Object.getOwnPropertyNames(obj).forEach(id => {
        if (typeof (obj[id]) !== 'string') {
            const innerParentTag = id.replace(/[0-9]/g, '');
            const innerParent = document.createElement(innerParentTag);
            innerParent.id = id;
            parent.appendChild(innerParent);
            htmlFromObj(obj[id], innerParent);
            return;
        }
        const elTag = id.replace(/[0-9]/g, '');
        const newEl = document.createElement(elTag);
        newEl.innerText = obj[id];
        newEl.id = id;
        parent.appendChild(newEl);
    })
}
htmlFromObj(object);
// zad 7
const ul1 = document.createElement('ul');
ul1.className = 'ul1';
const ul2 = document.createElement('ul');
ul2.className = 'ul2';

for (let i = 0; i < 6; i++) {
	const li = document.createElement('li');
	li.innerText = i;
	ul1.appendChild(li);
}

document.body.appendChild(ul1);
document.body.appendChild(ul2);
const ulBtn = document.createElement('button');
ulBtn.className = 'ulBtn';
ulBtn.innerText = 'Move element';
document.body.appendChild(ulBtn);

const myUl1 = document.querySelector('.ul1');
const myUl2 = document.querySelector('.ul2');
const myUlbtn = document.querySelector('.ulBtn');

myUlbtn.addEventListener('click', (e) => {
	const mainUlLength = myUl1.children.length;
	myUl2.append(ul1.children[mainUlLength - 1]);
	console.log(mainUlLength);
	if (mainUlLength - 1 === 0) {
		myUlbtn.setAttribute('disabled', true);
	}
});
// zad 8
const form = document.createElement('form');
form.className = 'myForm';
const formDataList = [
	'Jaki element chcesz utworzyć?',
	'Jaki tekst powinien zawierać ten element?',
	'Jaki kolor tekstu?',
	'Ile razy ten element ma zostać utworzony?',
];
const formBtn = document.createElement('button');
formBtn.className = 'formBtn';
formBtn.type = 'submit';
formBtn.innerText = 'Create Element';
for (let i = 0; i < formDataList.length; i++) {
	const input = document.createElement('input');
	input.type = 'text';
	input.placeholder = formDataList[i];
	form.appendChild(input);
}
form.appendChild(formBtn);
document.body.appendChild(form);

const createUserElement = (name, text, color, quantity) => {
	for (let i = 0; i < quantity; i++) {
		const el = document.createElement(name);
		el.style.color = color;
		el.innerText = text;
		document.body.appendChild(el);
	}
};

const formTwo = document.querySelector('.myForm');
form.addEventListener('submit', (e) => {
	e.preventDefault();
	const { currentTarget } = e;
	const [name, text, color, quantity] = [...currentTarget.elements].map(
		(el) => el.value
	);
	createUserElement(name, text, color, parseInt(quantity));
	form.reset();
});

const br = document.createElement('br');
document.body.appendChild(br);

// zad 9 +10
const secondForm = document.createElement('form');
secondForm.className = 'myForm2';
const secondFormDataList = ['Imie', 'Nazwisko', 'Wiek', 'Ilość dzieci'];
const secondFormBtn = document.createElement('button');
secondFormBtn.className = 'formBtn2';
secondFormBtn.type = 'submit';
secondFormBtn.innerText = 'Create';
for (let i = 0; i < formDataList.length; i++) {
	const input = document.createElement('input');
	input.type = 'text';
	input.placeholder = secondFormDataList[i];
	secondForm.appendChild(input);
}
secondForm.appendChild(secondFormBtn);
document.body.appendChild(secondForm);
const table = document.createElement('table');
table.className = 'userTable';
document.body.appendChild(table);
const createTable = (arr) => {
	for (let i = 0; i < 4; i++) {
		const window1 = document.createElement('window1');
		const window2 = document.createElement('window2');
		const window3 = document.createElement('window3');
		const b = document.createElement('button');
		b.innerText = 'Delete';
		window2.innerText = secondFormDataList[i];
		window3.innerText = arr[i];
		window1.append(window2);
		window1.append(window3);
		window1.append(b);
		table.append(window1);
	}
};
const changeFirstLetter = (str) => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};
const secondFormSelector = document.querySelector('.myForm2');
secondFormSelector.addEventListener('submit', (e) => {
	e.preventDefault();
	const { currentTarget } = e;
	const [name, lastname, age, childrenQuant] = [...currentTarget.elements].map(
		(el) => el.value
	);
	createTable([
		changeFirstLetter(name),
		changeFirstLetter(lastname),
		age,
		childrenQuant,
	]);
	form.reset();
});

const userTable = document.querySelector('.userTable');
userTable.addEventListener('click', (e) => {
	const { target } = e;
	console.log(e.target.tagName);
	if (target.tagName !== 'BUTTON') return;
	const parent = e.target.closest('window1');
	userTable.removeChild(parent);
});

// zad 10 
const changeFirstLetterExample = (string) => {
	return string.chartAt(0).toUpperCase() + string.slice(1);
};

//zad 11
const numFromString = (str) => {
	const numArr = str
		.split('')
		.map((el) => parseInt(el))
		.filter((el) => {
			if (el) {
				return true;
			} else {
				return false;
			}
		});
	const sum = numArr.reduce((acc, number) => (acc += number));
	const calc = numArr.reduce((acc, number) => (acc *= number));
	for (let i = 0; i < calc; i++) {
		const d = document.createElement('div');
		d.innerText = i;
		document.body.appendChild(d);
	}
};

numFromString('sqzi2k23xy');
// zad 12
function stringObj(input) {
    return {
        text: input
    }
}

const TextObj = stringObj("  Ola miala fajny sweter");
TextObj.checkFunction = function () {
    if (this.text.includes("Ala")) {
        this.text = this.text.replaceAll("Ala", "Ola");
        console.log(this.text);
    } else {
        const div = document.createElement("div");
        div.textContent = "Słowo Ala nie występuje w tekście."
        document.body.appendChild(div);
    }
}

TextObj.checkFunction();

// zad 13
const stringChart = (strArr) => {
	return strArr.map((el) => el.length);
};
const numberArr = stringChart(['almost', 'done', 'ggwp21']);
const sumNumberArr = (numArr) => numArr.reduce((acc, num) => (acc += num));

console.log(sumNumberArr(numberArr));

const averageFromNumArr = (numArr) => {
	const sum = numArr.reduce((acc, num) => (acc += num));
	return (sum / numArr.length).toFixed(2);
};

console.log(averageFromNumArr(numberArr));
// zad 14
let dataObj = {
    name: '',
    surname: '',
    age: ''
}

function changeObject(name, surname, age) {
    dataObj.name = name;
    dataObj.surname = surname;
    dataObj.age = age;

    if (name.length > 5 || surname.length > 5 || age.length > 5) {
        const button = document.createElement("button");
        button.textContent = "Reset";
        button.addEventListener("click", () => {
            dataObj.name = "";
            dataObj.surname = "";
            dataObj.age = "";
        })
        document.body.appendChild(button);
    }
}

changeObject("Pawel", "Skuza", "33");
// 
