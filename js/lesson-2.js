//------------------------1------------------------
// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).
//--------------------------------------------------
// const styles = ['jazz', 'blues'];
// styles.push('rock-n-roll');
                // styles[styles.indexOf('blues')] = 'classic';
// const index = styles.indexOf('blues');
// if (index !== -1){  // перевірка наявності елементу
//  sryles[index] = 'classic';
// }
// function logItems(array) {
//     for (const trek of array) {
//         console.log(`${array.indexOf(trek) + 1} - ${trek}`);
//     }
// }
// console.log(styles);
// logItems(styles);
//---------------------------------------------------
//================================================
//------------------------2------------------------
// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".
//------------------------------------------------

// const logins = ["Peter", "John", "Igor", "Sasha"];
// function checkLogin(array) {
//     let login = prompt("Enter your Login!");
//     alert(array.includes(login)? `Welcome, ${login}`: "User not found");
//         // if (array.indexOf(login) !== -1) {    // (array.includes(login)) --another var
//         //    alert(`Welcome, ${login}`);
//         //    return ;
//         // }
//         //    alert("User not found");
//         // for (let name of logins){               // -- another var
//         //     if(login === name){
//         //     alert(`Welcome, ${login}`);
//         //     return;
//         //     }
//         //     alert("User not found");
//         // }
// }
// checkLogin(logins);
//--------------------------------------------------
//==================================================
//-----------------------3--------------------------
// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.
//---------------------------------------------------
// function caclculateAverage() {
//     let summery = 0;
//     let arrayTimely = Array.from(arguments);
//     for (const index of arrayTimely) {
//         if (typeof(index) === 'number') {
//             summery += index;
//         } else {
//             console.log(`${index} not a number`);
//         }
//     }
//     return (summery / arrayTimely.length);
// }

// function caclculateAverage(...args) {
//     let summery = 0;
//     for (const index of args) {
//         if (typeof(index) === 'number') {
//             summery += index;
//         } else {
//             console.log(`${index} not a number`);
//             console.log('Can not calculate!');
//             summery = 0;
//             break;
//         }
//     }
//     return (summery / arguments.length);
// }
// function caclculateAverage(){
//     let result = 0;
//     let count = 0;
//     for (const element of arguments){
//         if (typeof element === 'number'){
//             count++;
//             result += element;
//         }
//     }
//     return count === 0 ? result : result / count;
// }
// console.log(caclculateAverage(2, 45, 5, 49, 9, 28, 12, 7, 54, 44));
//---------------------------------------------------
//====================================================
//------------------------4--------------------------
// Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// уточнення: складати необхідно перше число з другим, потім друге - з третім,
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].
//---------------------------------------------------
// function neighborPlus(someArr) {
//     let summery;
//     // const temporaryArr = Array.from(arguments);
//     let newArr = [];
//     for (let index = 0; index < someArr.length - 1; index++) {
//         summery = someArr[index] + someArr[index + 1];
//         newArr.push(summery);
//     }
//     return newArr;
// }
// console.log(neighborPlus(someArr));
//------------------------------------------------
//==================================================
//------------------------5------------------------
// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.
// 
// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];
//--------------------------------------------------
// function findSmallestNumber(numbers){
//     if (Array.isArray(numbers)){
//      let smollest = numbers[0];
//         for (let index = 0; index < numbers.length + 1; index++){
//             if (smollest > numbers[index + 1]){
//                 smollest = numbers[index +1];
//             }
//         }
//         return smollest;
//     }else return 'Sorry, it is not an array';
   
// }
// function findSmallestNumber(numbers){
//     return (!Array.isArray(numbers) ? 'Sorry, it is not an array' : Math.min(...numbers));
// }
// console.log(findSmallestNumber(numbers));
//---------------------------------------------------
//==================================================
//--------------------------6------------------------
// Напишіть функцію findLongestWord(string), яка
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.

// Скористайтесь цим прикладом виклику функції для перевірки її роботи:
// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'
//-----------------------------------------------------
// function findLongestWord(string){
//     const words = string.split(" ");
//     let longestWord = words[0];
//     for (let word = 0; word < words.length - 1; word++){
//         let secondWord = words[word + 1];
//         if (longestWord.length < secondWord.length){
//             longestWord = secondWord;
//         }
//     }
//     return longestWord;
// }
// function findLongestWord(string){
// let longestWord = '';
// for (const word of string.split(' ')){
//     if (word.length > longestWord.length){
//         longestWord = word;
//     }
// }
// return longestWord;
// }
//----------------------------------------------------
//=====================================================
//--------------------------7---------------------------
// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

// const user = {
//     name: "John",
//     age: 20,
//     hobby: "tenis",
//     premium: true,
//   };
//   user.mood = 'happy';
//   user.hobby = 'skydiving';
//   user.premium = false;
//   const keysArray = Object.keys(user);
//   const valuesArray = Object.values(user);
//   for (const element of keysArray) {
//     console.log(`${element}:${user[element]}`);
//   }
                    // const properties = Object.entries(user);
                    // for (const prop of properties){
                    //     console.log(`${prop[0]}:${prop[1]}`);
                        
                    // }
//-----------------------------------------------------
//=====================================================
//--------------------------8---------------------------
// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//     Mango: 100,
//     Poly: 160,
//     Ajax: 1470,
//   };
// let sum = 0;
// for (const key in salaries) {
//     sum += salaries[key];
// }
// console.log(sum);

//--------------------------------------------------------------
//=============================================================
//----------------------------9---------------------------------
// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'
//-------------------------------------------------------------
// const calculator = {
//     read(a, b){
// const first = Number(prompt('Enter first number'));
// const second = Number(prompt('Enter second number'));
// this.a = first;
// this.b = second;
//     },
//     exist(){
// return this.a && this.b;
//     },
//     sum(){
//         if(this.exist()){
//             return `sum = ${this.a + this.b}`;
//         }
//         return 'lalala';
// // console.log(calculator.a + calculator.b);
//     },
//     mult(){
//         if (this.exist()){
//             return `mult = ${this.a * this.b}`;
//         }
//         return 'tototo';
// // return calculator.a * calculator.b;
//     },
   
// };
// calculator.read();
// console.log(calculator.sum());;
// console.log(calculator.mult());



//-----------------------------------------------------------
//===========================================================
//--------------------------10--------------------------------
// Напишіть функцію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта.

// Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою
// назвою фрукта, це також треба урахувати.

// const fruits = [
//     { name: "Яблуко", price: 45, quantity: 7 },
//     { name: "Апельсин", price: 60, quantity: 4 },
//     { name: "Банан", price: 125, quantity: 8 },
//     { name: "Груша", price: 350, quantity: 2 },
//     { name: "Виноград", price: 440, quantity: 3 },
//     { name: "Банан", price: 125, quantity: 3 },
//   ];
//   function calcTotalPrice(fruits, fruitName){
//     let sum = 0;
// for (const fruit of fruits){
//     if (fruit.name === fruitName){
//         sum += fruit.price * fruit.quantity;
//     }
// }
// return sum;
//   }
//   console.log(calcTotalPrice(fruits, 'Банан'));
  
//--------------------------------------------------------------
//=========================================================
//------------------------11--------------------------------
// 10. Створіть телефонну книгу - об'єкт phonebook, у якого є властивість contacts (список контактів)
// та методи управління книгою:
// add(data) - приймає об'єкт data, де передається name і email, category може передаватись чи ні,
// всередині метода add створіть обʼєкт newContact з властивостями  name, email, category, id, createdAt
// (name i email - обов'язкові параметри, які треба передавати
// при додаванні нового контакта,
// category - може передаватись чи ні, якщо ні - має
// приймати значення "default",
// id та createdAt генеруються відповідними методами:
// generateId() і getDate());
// і додає newContact до списку контактів contacts;
// *не забудьте додати перевірку, якщо контакт з таким ім'ям чи імейлом вже є - ми його не додаємо
// list() - виводить список контактів у вигляді таблиці;
// filtered(category) - фільтрує контактів по обраній категорії (друзі, робота і т.д.);
// delete(name) - видаляє контакт з заданим ім'ям;
// updateName(oldName, newName) - змінює ім'я контакта;