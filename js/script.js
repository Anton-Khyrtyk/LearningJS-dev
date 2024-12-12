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

//____________________________________//
//____________________________________//
//   bind
//____________________________________//
//____________________________________//

// function hello() {
//   console.log(this);
// }

// const user = {
//   name: "Ivan",
//   age: 30,
//   hello: hello,
//   sayHelloWindow: hello.bind(window),
//   info: function () {
//     console.log(`Name is ${this.name}`);
//     console.log(`Age is ${this.age}`);
//   },
// };

// // user.sayHelloWindow();

// // user.info();

// const Ann = {
//   name: "Anna",
//   age: 23,
// };

// // user.info.bind(Ann)();

// const Nata = {
//   name: "Natalia",
//   age: 50,
// };

// // user.info.bind(Nata)();

//____________________________________//
//____________________________________//
//   call
//____________________________________//
//____________________________________//

// const userInfo = {
//   name: "name",
//   age: 96,
//   logInfo: function (job) {
//     console.group(`${name} info:`);
//     console.log(`Name is : ${this.name}`);
//     console.log(`Age is : ${this.age}`);
//     console.log(`Job is : ${job}`);
//     console.groupEnd();
//   },
// };

// const Vano = {
//   name: "Ivan",
//   age: 45,
// };

// // userInfo.logInfo();

// userInfo.logInfo.call(Vano, "developer");

//____________________________________//
//____________________________________//
//   apply
//____________________________________//
//____________________________________//

// const showUserInfo = {
//   name: name,
//   age: 87,
//   logInfo: function (job, city) {
//     console.group(`${name} info:`);
//     console.log(`Name is : ${this.name}`);
//     console.log(`Age is : ${this.age}`);
//     console.log(`Job is : ${job}`);
//     console.log(`City is : ${city}`);
//     console.groupEnd();
//   },
// };

// const Vano = {
//   name: "Ivan",
//   age: 45,
// };

// showUserInfo.logInfo.apply(Vano, ["developer", "Lviv"]);

//____________________________________//
//____________________________________//

// const message = function (name, stars) {
//   console.log(`${name}, Welcome to ${this.hotel}, stars ${stars}`);
// };

// const Bukovel = { hotel: "Bukovel" };
// const Turist = { hotel: "Turist" };

// message.call(Bukovel, "Ivan", "5");
// message.call(Turist, "Ivan", "3");

// message.apply(Bukovel, ["Ivan", "5"]);
// message.apply(Turist, ["Ivan", "3"]);

// message.bind(Bukovel, "Ivan", "5")();
// message.bind(Turist, "Ivan", "3")();

//____________________________________//
//____________________________________//

// const cart = {
//   showItems() {
//     console.log("In the cart: ", this.items);
//   },
// };

// const women = {
//   items: ["dress, shoes"],
// };

// const men = {
//   items: ["suit", "shirt"],
// };

// const child = {
//   items: ["T-shirt", "shorts"],
// };

// // cart.showItems.bind(men)();

// document
//   .querySelector("#wom")
//   .addEventListener("click", cart.showItems.bind(women));

// document
//   .querySelector("#men")
//   .addEventListener("click", cart.showItems.bind(men));

// document
//   .querySelector("#kid")
//   .addEventListener("click", cart.showItems.bind(child));

// const infoCar = {
//   name: "BMW",
//   model: "X7",
//   color: "black",
//   showInfo: function () {
//     console.log(
//       "Car: " + this.name + " model: " + this.model + " color: " + this.color
//     );
//   },
// };

// car2 = {
//   name: "Ford",
//   model: "F-150",
//   color: "red",
// };

// infoCar.showInfo();
// infoCar.showInfo.bind(car2)();
// infoCar.showInfo.call(car2);
// infoCar.showInfo.apply(car2);

// ---- End of lecture 5

// Home task

//-1-

// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою  call apply bind

// const showStudent = {
//   name: "John",
//   speciality: "back end",
//   avarageScore: "3.8",
//   miss: "9",
//   showInfo: function () {
//     console.log(
//       "Name - " +
//         this.name +
//         " Spec - " +
//         this.speciality +
//         " score - " +
//         this.avarageScore +
//         " missed - " +
//         this.miss
//     );
//   },
// };

// student2 = {
//   name: "Jack",
//   speciality: "front end end",
//   avarageScore: "5.7",
//   miss: "2",
// };

// student3 = {
//   name: "Tony",
//   speciality: "QA",
//   avarageScore: "10",
//   miss: "1",
// };

// showStudent.showInfo();
// showStudent.showInfo.bind(student2)();
// showStudent.showInfo.call(student3);
// showStudent.showInfo.apply(student3);

//-------------------------------------------------------------

//-2-

// Написати дві кнопки і закріпити на них функції при натисканні
// на кнопку html - має видати коротке визначення що це таке при натисканні
// на кнопку css - має видати коротке визначення що це таке

// const answer = {
//   showAnswer() {
//     console.log("the answer is ", this.item);
//   },
// };

// const html = {
//   item: "Hyper Text Markup Language",
// };

// const css = {
//   item: "Cascading Style Sheets",
// };

// document
//   .querySelector("#html")
//   .addEventListener("click", answer.showAnswer.bind(html));

// document
//   .querySelector("#css")
//   .addEventListener("click", answer.showAnswer.bind(css));

//-------------------------------------------------------------

//-3-

// Написати функцію магазин, яка отримує назву товару,
// ціну за кг і кількість товару функція має повертати
// назву товару і вартість перевірити на варіантах:
// 1) banana 30,  4,5
// 2) cherry  58,   1,3
// 3) jrange 89. 3,4

// const store = {
//   name: "banana",
//   price: "30",
//   weight: "4.5",
//   showInfo: function () {
//     console.log(
//       "Product - " +
//         this.name +
//         " cost - " +
//         this.price +
//         " weight is " +
//         this.weight
//     );
//   },
// };

// const fruit2 = {
//   name: "cherry",
//   price: "58",
//   weight: "1.3",
// };

// const fruit3 = {
//   name: "orage",
//   price: "89",
//   weight: "3.4",
// };

// // store.showInfo();
// // store.showInfo.bind(fruit2)();
// // store.showInfo.call(fruit3);
// // store.showInfo.apply(fruit3);
