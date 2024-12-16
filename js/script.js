// Lecture 6

// -----------------------------------------------------------------
// --- Приклад процедурного програмування (данні знаходяться окремо)
// -----------------------------------------------------------------

// const summ = 20000;
// const month = 12;
// const p = 1000;

// const credit = (sum, date, p) => {
//   return sum + p * date;
// };

// console.log(credit(summ, month, p));

// --------------------------------------
// --- Об'єктно орієнтоване програмування
// --------------------------------------

// const credit = {
//   summ: 20000,
//   month: 12,
//   p: 1000,
//   result() {
//     return this.summ + this.p * this.month;
//   },
// };

// console.log(credit.result());

// КЛАСИ

// class Bank {
//   static type = "Privat";
//   constructor(options) {
//     this.summ = options.summ;
//     this.month = options.month;
//     this.p = options.p;
//   }

//   credit() {
//     return console.log("I am Privat");
//   }
// }

// const userBank = new Bank({
//   summ: 30000,
//   month: 5,
//   p: 500,
// });

//userBank.credit();
//console.log(Bank.type);

// class NewBank extends Bank {
//   constructor(options) {
//     super(options);
//     this.card = options.card;
//   }
//   credit() {
//     super.credit();
//     return console.log("I am Aval");
//   }
// }

// const aval = new NewBank({
//   summ: 30000,
//   month: 5,
//   p: 500,
//   card: true,
// });

// console.log(aval.credit());

// -------------
// --- get & set
// -------------

class User {
  constructor(props) {
    this.name = props.name;
  }

  firstName = "";
  lastName = "";
  age = "";
  city = "";

  set name(newName) {
    const nameRow = newName.split(" ");
    this.firstName = nameRow[0];
    this.lastName = nameRow[1];
  }

  get name() {
    return ` First name : $(this.firstName) last name : $(this.lastName)`;
  }
}

const Kris = new User({
  name: "Kristina Malitowska",
});

const Dasha = new User({
  name: "Dasha Happy",
});

//console.log(Kris);
console.log(Dasha);

//-------------
//--- Прототипи
//-------------

// const a = [1, 2, 3];
// console.log(a);

//_____________________________________________________

// const a = {
//   x: 1,
//   y: 2,
// };

// const b = Object.create(a);

//console.log(b);
//console.log(b.x);

//_____________________________________________________

// const Manager = function (name, sales) {
//   this.name = name;
//   this.sales = sales;

//   //   this.sale = function () {
//   //     this.sales += 1;
//   //   };
// };

// const ann = new Manager("Anna", 5);
// const ivan = new Manager("Ivan", 10);

// // console.log(ann.sales);
// // ann.sale();
// // console.log(ann.sales);

// Manager.prototype.sale = function () {
//   this.sales += 1;
// };

// console.log(ann.sales);
// ann.sale();
// console.log(ann.sales);

// console.dir(Manager);

//_____________________________________________________

// class CoffeeMachine {
//   _water = 0;
//   #waterLimit = 500;

//   constructor(power) {
//     this.power = power;
//   }

//   set waterAmount(value) {
//     if (value < 0) {
//       value = 0;
//     }
//     this._water = value;
//   }
// }

// let coffeeMachine = new CoffeeMachine(100);

// console.log(coffeeMachine);

// coffeeMachine.waterAmount = -20;

// console.log(coffeeMachine);

// --- End of lecture 6

// --- Home Task

// Створити телефонну книгу
// створити початковий клас Abonent, де зберігатимуться ім*я і номер
// створити set який прийматиме телефон  і номер створити
// get який виводитиме данні про абонента створити три різних юзери
// вивести данні

class Abonent {
  constructor(data) {
    this.client = data.client;
  }

  mainName = "";
  mainNumber = "";

  set client(info) {
    const nameRow = info.split(" ");
    this.mainName = nameRow[0];
    this.mainNumber = nameRow[1];
  }

  get client() {
    return ` Name is : $(this.mainName) Number is : $(this.mainNumber)`;
  }
}

const Karl = new Abonent({
  client: "Karl +380976548462",
});

const Den = new Abonent({
  client: "Den +380936524512",
});

const Bill = new Abonent({
  client: "Bill +380669864527",
});

console.log(Den);
