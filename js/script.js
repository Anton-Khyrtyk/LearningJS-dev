// let a = 20;
// console.log(a);
// a = 30;
// console.log(a);

// const b = 25;
// console.log(b);

// const value=0
// console.log(Boolean(value))
// console.log(typeof Boolean(value))

// const num=98463846843134484;
// console.log(typeof num);

//console.log(Math.random()*(4-2)+2);

//Lecture 2

// const message = "JavaScript is awesome!"

//console.log(message);

//alert(message);

// const isConfirm = confirm("Please confirm reservation");
// console.log(isConfirm);

// const test = confirm("Yes or no")
// console.log(test);

//prompt

// const userName = prompt("Please enter your name");
// console.log(userName);

// let value;

// ---String---//

// value = false;
// console.log(typeof value);
// const newValue = String(value);
// console.log(typeof newValue);


// ---Number--- //

// value = "123";
// console.log(typeof value);

// const newValue = Number(value);
// console.log(typeof newValue);

// const test = Number("qwerty")
// console.log(test)

// Остаток от деления //

//console.log(8%3); // 3
//console.log(10%3); // 1
//console.log(10%2); // 0

// Возведение в степень

// console.log(5 ** 2); //25

// let a = 2;
// let b = 3;
// let c;
// c=a+b;
// console.log(c);

// const x = Number(prompt("Please enter number"));
// const y = Number(prompt("Please enter one more number"));
// let d = x+y;
// console.log("the sum is "+d);
// alert(d);

// let val = "0";
// console.log(val == 0);

//-----if/else

//--- одинарні

// if(5+5===10){
//     console.log("Hello");
// }

// if (5+5===25){
//     console.log("1");
// } else {
//     console.log("2");
// }


// тернарний оператор

// (2+2===4)? console.log("1") : console.log("2");

// if (5+5===7){
//     console.log("5+5===7");
// }else if (2+2===4){
//     console.log("2+2===6");
// } else{
//     console.log("no");
// }


// const leng = prompt("Please enter your language");

// if (leng === "ua"){
//     console.log("Понеділок");
//     alert("Понеділок");
// } else if (leng === "en"){
//     console.log("Monday");
//     alert("Monday");
// }else{
//     console.log("Reset");
//     alert("Reset");
// }

//---swich/cade

// let num = 10;
// switch(num){
//     case 0:
//         console.log(0);
//         break;
    
//     case 5:
//         console.log(5);
//         break;

//     case 10:
//         console.log(10);
//         break;
// }


// let cost = null;
// const sub = "premium";

// switch(sub){
//     case "free":
//         cost = 0;
//         break;
    
//     case "pro":
//         cost = 100;
//         break;

//     case "premium":
//         cost = 500;
//         break;

//     default:
//         console.log("Invalid sub")
// }

// console.log(cost)

//---- Exercises


// const value = prompt("Введіть назву товару").toLowerCase();
// let cost;

// switch (value) {
//     case "яблуко":
//         cost = 10;
//         alert(`${value} коштує ${cost} грн`);
//         break;
//     case "вишня":
//         cost = 50;
//         alert(`${value} коштує ${cost} грн`);
//         break;
//     case "груша":
//         cost = 25;
//         alert(`${value} коштує ${cost} грн`);
//         break;    
//     case "кавун":
//         cost = 70;
//         alert(`${value} коштує ${cost} грн`);
//         break;
//     case "диня":
//         cost = 80;
//         alert(`${value} коштує ${cost} грн`);
//         break;
        
//     default:
//         alert(`Товару ${value} немає в наявності`);

// }