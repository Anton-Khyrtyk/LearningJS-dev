// --- Lecture 3

// -- Області видимості --

// const a = 5;
// if(true){
//     console.log("Block a = ", a);
//     const b = 10;
//     console.log("Block b = ", b);
// }
// console.log("Global a = ", a);
// // console.log("Global b =" , b); Error - ReferenceError: b is not defined

// --------------------------------------------
// --- Цикли --
// --------------------------------------------


// while

// let a = 0;

// while (a < 5){
//     a=a+1; // a++
//     console.log("a", a);
// }

//let a = 3;

// while (a) console.log(a--); 

// do while

// let a = 0;

// do {
//     console.log(a);
//     a++;
// } while (a < 5);


// for

// for ( let a = 0 ; a < 3; a++){
//     console.log(a);
// }

// let a = 0;
// for (; a < 3; a++){
//     console.log(a);
// }

// let a = 0;
// for (; a < 3; ){
//     a < 3;
//     a++;
//     console.log(a);
// }

// break && continue

// let summ = 0;

// while (true){
//     let value = +prompt("Enter some number")
//     if (!value) break;

//     summ += value;
// }

// console.log("Summ is ", summ);

// for (let i = 0; i < 10; i++){
//     if (i%2 === 0) continue;
//     console.log(i);
// }

// --- масиви ---

// let arr = ["Apple", "Orange", "Plum"];

// arr[1] = "Lemon";
// arr[3] = "Cherry";

// console.log(arr);

// arr.push("Tomato");// додати об'єкт в кінець масиву
// console.log(arr);
// arr.pop(); // видалити останній об'єкт з масиву
// console.log(arr);

// arr. shift(); // видаляє перший об'єкт масиву
// console.log(arr);

// arr.unshift("Mellon"); // додає преоший об'єкт
// console.log(arr);

// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// for (let item of arr){
//     console.log(item);
// }

// for (let key in arr){
//     console.log(arr[key]);
// }

// let matrix = [
// [1,2,3],
// [4,5,6],
// [7,8,9]
// ];
// console.log(matrix[0][1]);

// End of first part Time 28:55


// --- Методи присвоєння ---

// let a = 5;
// let b = a;

// a = 10;

// console.log(a);
// console.log(b);

// let arr = [1, 2, 3];
// let arr2 = arr;

// arr.push(4);

// console.log(arr2);


// --- методи масиву

// let arr = ["a", "b", "c", "d", "f"];

// arr.splice(2,2);

// console.log(arr);

// console.log(arr.slice(1,3));

// let a = [1, 2, 3];

// console.log(arr.concat(a));


// console.log(arr.indexOf("c"));

// console.log(arr.indexOf("c", 3));

//console.log(arr.lastIndexOf("c"));

// console.log(arr.includes("c"));


// --- find

// const fruits = [
//     {id: 0, name: "Apple"},
//     {id: 1, name: "Tomato"},
//     {id: 2, name: "Cherry"},
//     {id: 3, name: "Orange"}
// ];

// console.log(fruits.find((item) => item.id === 2));

// --- filter

// console.log(fruits.filter((item) => item.id < 2));


// --- map

// let result = fruits.map(item => item.name.length);
// console.log(result);

// --- split

// let names = "Оля, Юля, Аня, Петя";

// let arr = names.split(", ");

// // console.log(arr);

// --- join

// let newString = arr.join("; ");

// console.log(newString);


// let arr = [1, 2, 3, 4, 5];

// let red = arr.reduce((summ, item) => summ + item);

// console.log(red);

// let arr = [23, 45, 30];

// let summ = arr.reduce((i, item) => i + item) / arr.length;
// console.log(summ);

// ENd of lecture 3