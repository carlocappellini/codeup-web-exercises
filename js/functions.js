"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 *  > sayHello("codeup") // returns "Hello, codeup!"
 */
// var name = "Hello";
// var school = "codeup"
// function sayHello(name, school) {
//    return name

// }
// console.log(sayHello(name + " " + school))

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 * console.log 'helloMessage' to check your work
 * Now store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */
var myName = "Carlo"
var helloMessage = myName
function sayHello(Carlo, myName) {

   console.log(helloMessage)
}
sayHello()

// Don't modify the following line, it generates a random number between 1 and
// 100 and stores it in a variable named random
var random = Math.floor((Math.random() * 100) + 1);

/**
 * TODO:
 * Create a function called 'isOdd' that takes a number as a parameter.
 * The function should use the ternary operator to return a message.
 * The message should contain the number being checked, and whether or not the
 * number is odd
 *
 * Example
 *  > isOdd(42) // returns "42 is not odd!"
 *
 * Call the function 'isOdd' passing the variable 'random' as a parameter.
 * console.log *outside of the function* to check your work
 */
var number;
 function isOdd (number) {
    (random % 2 === 1) ? console.log(random + " is odd") : console.log(random + " its not odd")

}
isOdd(number)

/**
 * TODO: Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant
 *
 * the function should accept a tip percentage and the total of the bill, and
 * return the amount to tip
 *
 * Example
 *  > calculateTip(0.20, 20) // returns 4
 *
 *
 */



function calculateTip(totalOfBill, tipPercentage ){

    var totalTipAmount = totalOfBill * (tipPercentage / 100)
    return totalTipAmount
}
console.log(" is this here ?")
console.log("Tip is $ " + calculateTip(20, 15).toFixed(2));



//
// * TODO: use prompt and alert in combination with your calculateTip function to
// * prompt the user for the bill total and a percentage they would like to tip,
// * then display the dollar amount they should tip
// */



var totalOfbill = prompt("Enter you bill total");
var tipPercentage = prompt("Enter tip percentage");
var totalTipAmount = calculateTip(totalOfbill, tipPercentage);

alert ("the total amount of you tip is: $ " + totalTipAmount.toFixed(2));


console.log("the total bill is " + totalOfbill);
console.log("the tip percentage is " + tipPercentage + " %");
console.log("the total tip amount should be $ " + totalTipAmount.toFixed(2));
