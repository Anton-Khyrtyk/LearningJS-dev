// Lecture 4

// -------------------------------------------------------------------
// --- функція
// -------------------------------------------------------------------

// function showMessage (name, city) {
//     console.log("Hello, my name is "+ name + " I'm from " + city);
// }

// showMessage("Nata", "Kyiv");
// showMessage("Olia", "Lviv");

// const sayHi = function () {
//     console.log("Hi");
// }

// sayHi();

// const userName = "Ann";

// const sayHi = function () {
//     let message = "Hello, my name is "
//     console.log(message + userName);
// };

// sayHi();

// function sum(a, b){
//     return a + b;
// }

// let result = sum(7, 8);

// console.log(result);

// const addName = function (){
//     const arg = Array.from(arguments);
//     console.log(arguments);
//     console.log(arg);
// }

// addName(1, 3, 5);

// -------------------------------------------------------------------
// --- rest
// -------------------------------------------------------------------

// const addName = function (...arg){
//     console.log(arg);
// };

// addName(1, 3, 5);

// addName(1, 3, 5, 85, 67);

// -------------------------------------------------------------------
// --- callback
// -------------------------------------------------------------------

// function ask(question, yes, no){
//  if (confirm(question)) {
//     yes();
//  }   else{
//     no();
//  }
// }

// function showOk (){
//     console.log("You say ok");
// }

// function showCancel(){
//     console.log("You say No");
// }

// ask ("Yes or no", showOk, showCancel);

// -------------------------------------------------------------------
// --- hof (high order function)
// -------------------------------------------------------------------

// const hello = function (name) {
//     console.log(`Hello, ${name}`);
// }

// const searchName = function (callback) {
//     const name = "Ivan";
//     callback(name);
// }

// searchName(hello);

// -------------------------------------------------------------------
// ---срілкові функції
// -------------------------------------------------------------------

// const test = (arg) => {
//   console.log(arg);
// };

// test("hello");

// End of first part Time 39:48

// console.log(document);

// const addNumber = (number) => {
//   let summ = Number(number) + 10;
//   return console.log(summ);
// };

// const numberRef = document.querySelector('input[name="number"]');

// const buttonRef = document.querySelector("button");

// // console.log(numberRef.value);+

// buttonRef.addEventListener("click", () => addNumber(numberRef.value));

// -------------------------------------------------------------------
// ---Home Task
// -------------------------------------------------------------------

// Перепишіть функцію, використовуючи '?' або '||'

// function checkAge(age) {
//      if (age > 18) {
//          return true;
//     } else {
//         return confirm('Батьки дозволили?');
//     }
// }

// function checkAge(age) {
//   return age > 18 || confirm("Батьки дозволили?");
// }

// console.log(checkAge(25));

// console.log(age > 18 ? true : confirm("Батьки дозволили?"));

// -------------------------------------------------------------------

// Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.

// function checking() {
//   if (a < b) {
//     return a;
//   } else {
//     return b;
//   }
// }

// let a = Number(+prompt("Enter number a"));
// let b = Number(+prompt("Enter number b"));

// alert(checking());

// console.log(a < b ? a : b);

// -------------------------------------------------------------------

// Перепишіть з використанням стрілкових функцій
// Замініть Функціональні Вирази на стрілкові функції у коді нижче:

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask("Ви згодні?", function () {alert("Ви погодились.");}, function () {alert("Ви скасували виконання.");});

// const ask = (question) => {
//   if (confirm(question)) yes();
//   else no();
// };

// const yes = () => {
//   alert("Ви погодились.");
// };

// const no = () => {
//   alert("Ви скасували виконання.");
// };

// ask("Ви згодні?");
