// Lecture 5

//____________________________________//
//____________________________________//
// замикання
//____________________________________//
//____________________________________//

// function createNewSum(n) {
//   return function () {
//     console.log(10 * n);
//   };
// }

// const calc = createNewSum(5);
// calc();

// -------------------------------------

// function createNewNumber(n) {
//   return function (num) {
//     return n + num;
//   };
// }

// const addFive = createNewNumber(5);

// console.log(addFive(10));

// -------------------------------------

// function createUrl(domain) {
//   return function (url) {
//     return `https://${url}.${domain}`;
//   };
// }

// const comUrl = createUrl("com");
// const comUa = createUrl("ua");

// console.log(comUrl("google"));
// console.log(comUrl("fb"));

// console.log(comUa("google"));
// console.log(comUa("fb"));

//____________________________________//
//____________________________________//
// this
//____________________________________//
//____________________________________//

// function hello() {
//   console.log("hello", this);
// }

// hello();

// const user = {
//   name: "Ivan",
//   city: "Odesa",
//   sayHello: hello,
// };

// user.sayHello();

// -------------------------------------

// function abc() {
//   console.log("In function");
//   console.log(this);
// }

// document.querySelector("p").onclick = abc;

// -------------------------------------

// function changeColor() {
//   console.log(this);
//   this.style.background = "green";
// }

// document.querySelector("div").onclick = changeColor;

// -------------------------------------

// function changeColor() {
//   this.style.background = "green";
// }

// let user = document.querySelectorAll("div");

// user.forEach(function (element) {
//   element.onclick = changeColor;
// });

// End of first part
