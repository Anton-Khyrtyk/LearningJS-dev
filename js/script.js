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

// console.log(document);

// End of first part Time 39:48
