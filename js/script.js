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