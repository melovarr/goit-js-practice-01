// 1 - отримай body елемент і виведи його в консоль;
const bodyEl = document.querySelector('body');
// console.log(1, bodyEl);

// 2 - отримай елемент id="title" і виведи його в консоль;
const titleEl = document.querySelector('#title');
// console.log(2, titleEl);

// 3 - отримай елемент class="list" і виведи його в консоль;
const listEl = document.querySelector('.list');
// console.log(3, listEl);

// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
const topicEls = document.querySelectorAll('[data-topic');
// console.log(4, topicEls);

// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const topicEl = document.querySelector('[data-topic]');//may be topicEl = topicEls[0]
// console.log(5, topicEl);

// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const lastTopic = topicEls[topicEls.length -1];
// console.log(lastTopic);
// console.log(6, topicEls[topicEls.length-1]);// or this like

// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
const mainTitle = document.querySelector("h1");
const sibling = mainTitle.nextElementSibling;//якщо обрати nextSibling то вибереться textNode, а не елемент
// console.log(7, sibling);

// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
const titles = document.querySelectorAll("h3");
// console.log(titles);
// titles.forEach((title) => console.log(title));

// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
titles.forEach((title) => title.classList.add('active'));

// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
const topicElement = document.querySelector('[data-topic="navigation"');
// console.log(topicElement);

// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
topicElement.style.backgroundColor = "yellow";
// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
const newText = topicElement.querySelector("p");
newText.textContent = "Я змінив тут текст!";
// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
const currentTopic = "manipulation";
const manTopic = document.querySelector(`[data-topic=${currentTopic}]`);
// console.log(13, manTopic);

// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
manTopic.style.backgroundColor = "blue";

// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
const compEl = document.querySelector(".completed");
// console.log(compEl);

// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
const removeEl = compEl.closest("li");
removeEl.remove();
// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// const newText = document.createElement("p");
// newText.textContent = "Об'єктна модель документа (Document Object Model)";
// mainTitle.after(newText);
// const markup = "<p>Об'єктна модель документа (Document Object Model)</p>";
mainTitle.insertAdjacentHTML(
    "afterend",
    "<p>Об'єктна модель документа (Document Object Model)</p>"
  );

// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// const newItem = document.createElement("li");
// const newTitle = document.createElement("h3");
// const newDecr = document.createElement("p");
// newTitle.textContent = "Властивість innerHTML";
// newDecr.textContent = "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу";
// newItem.append(newTitle, newDecr);
// listEl.append(newItem);
// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
const newItemElse = '<li><h3>Властивість innerHTML</h3><p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p></li>';
listEl.insertAdjacentHTML("beforeend", newItemElse)
// 20 - очисти список
// listEl.innerHTML = '';


//=======================================2===================================================
// Створіть контейнер div (з класом numberContainer )в HTML-документі 
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer). 
// Парні числа повинні мати зелений фон (додати клас even), 
// Непарні числа - жовтий фон (додати клас odd).

const randomNumber = () => Math.floor(Math.random() * 100) + 1;
const boxWrapper = document.querySelector(".numberContainer");
const boxes = [];
for (let i = 1; i <= 100; i++){
    const box = document.createElement("div");
box.classList.add("number");
box.textContent = randomNumber();
boxes.push(box);
boxWrapper.style.display = "flex";
boxWrapper.style.flexWrap = "wrap";
if (box.textContent % 2 === 0){
    box.classList.add("even");
} else{
    box.classList.add("odd");
}
}
boxWrapper.append(...boxes);


//=======================================3===================================================
// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше 
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`
const formEl = document.querySelector('.contact-form');
const inputEl = document.querySelector('.contact-form-input');
inputEl.addEventListener('input', () => {
    const userN = inputEl.value.length;
    if (userN >= 6){
        inputEl.classList.add('success');
        inputEl.classList.remove('error');
    } else {
        inputEl.classList.add('error');
        inputEl.classList.remove('success');
    }
})
//enother variant
// inputEl.addEventListener('input', () => {
//     inputEl.classList.toggle('success', inputEl.value.length >= 6);
//     inputEl.classList.toggle('error', inputEl.value.length < 6);
// })

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`
// inputEl.addEventListener('focus', () => {
//     if(inputEl.value.trim() === ''){
// inputEl.style.outline = '3px solid red';
//     } else {
//         inputEl.style.outline = '3px solid green';
//     }
// })

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`, 
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`
inputEl.addEventListener('blur', () => {
    if(inputEl.value.trim() === ''){
inputEl.style.outline = '3px solid red';
    } else {
        inputEl.style.outline = '3px solid green';
    }
})
// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку, 
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також реалізуй додавання 
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видали, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення 
// false, верни дефолтне значення "Anonymous" у span.





//==========================================4=======================================
// Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
// При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів, 
// При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.
