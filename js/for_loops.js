"use strict";

// var question = prompt("Write a number 1 - 7")
//
//
// for (var i = 1; i <= 10; i++) {
//     console.log(question + " X " + i + " = " + i * question )
// }
//






for (var i = 1; i < 10; i++) {
    var numbers = Math.floor(Math.random() * 180) + 20;
    if (numbers % 2 === 0) {
        console.log(numbers + " is even");
    } else {
        console.log(numbers + " is odd");
    }
}


// Write a JavaScript program to construct the following pattern, using a nested for loop. Promt the user the number of the final lenght of the stars.
//
//     Example:
//
// User input: 5
//
// Result:
//
// *
// * *
// * * *
// * * * *
// * * * * *

// var stars = 5;
//
// var question = prompt("Number of final stars \n* * * * *")
//
// console.log("User input = " + stars)
// console.log("result : ")
//
// for (var i = 1; i <= question; ++i) {
//     var str = '';
//     for (var j = 1; j <= i; ++j){
//         str += "* ";
//     }
//     console.log(str);
// }
//
//
