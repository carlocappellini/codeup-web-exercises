// "use strict";
//
// // Don't change the next two lines!
// // This creates two variables:
// //     one with the colors of the rainbow, and another with a single random
// //     another with a single random color value
//
//
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random()*colors.length)];

switch (color) {
      // TODO: create a case statement that will handle every color except indigo and violet
     // TODO: when a color is encountered log a message that tells the color, and an object of that color
         //       example: Blue is the color of the sky.

      // TODO: create a default case that will catch indigo and violet
     // TODO: for the default case, log: I do not know anything by that color.

    case "red":
        console.log("Blood is red");
        break;
    case "orange":
        console.log("lilies are orange");
        break;
    case "yellow":
        console.log("The sun is yellow");
        break;
    case "green":
        console.log("My cup is green");
        break;
    case "blue":
        console.log("The sea is blue");
        break;
    default:
        console.log(color + " I do not anything about that color")
}












//
// words problems

var hebDiscount = 10;
var shopperWhoSpendMoreThan = 200;
var cameronSpent = 180;
var ryanSpent = 250;
var georgeSpent = 320;
var total;

if (cameronSpent > shopperWhoSpendMoreThan) {
    cameronSpent -= (cameronSpent / hebDiscount);
}
console.log("Cameron paid " + cameronSpent);

if (ryanSpent > shopperWhoSpendMoreThan) {
    ryanSpent -= (ryanSpent / hebDiscount);
}
console.log("ryan paid " + ryanSpent);

if (georgeSpent > shopperWhoSpendMoreThan) {
    georgeSpent -= (georgeSpent / hebDiscount);
}
console.log("george  paid " + georgeSpent);









// // issac's indecision flip the coin
// input
var flipACoin = Math.floor(Math.random()* 2);


// procces    *note for template literalts inside console log `${flipACoin} buy a ${decisionTwo}`
var message;

if (flipACoin === 0) {
    message = "buy a car";
}else {
    message = "buy a house";
}

var message2;
message2 = flipACoin === 0 ? "buy a car " : "buy a house ";

//output
console.log(message);
console.log(message2);










// lucky number at the store
//input

var luckyNumber = Math.floor(Math.random()* 6);

var discountPercentage = 0;
var receipt = 60;

// process

// switch (luckyNumber) {
//     case 1:
//         console.log("you have 10% discount");
//         discountPercentage = .1;
//         break;
//     case 2:
//         console.log("you have 25% discount");
//         discountPercentage = .25;
//         break;
//     case 4:
//         console.log("you have 50% discount");
//         discountPercentage = .50;
//         break;
//     case 5:
//         console.log("it's free");
//         discountPercentage = 1;
//         break;
//     default:
//         console.log("you have no discount")
// }
//
// var discountAmount = discountPercentage * receipt;
// console.log(discountAmount);


// lucky number at the store
//input

var luckyNumber = Math.floor(Math.random()* 6);

var discountPercentage = 0;
var receipt = 60;

// process

// switch (luckyNumber) {
//     case 1:
//         console.log("you have 10% discount");
//         discountPercentage = .1;
//         break;
//     case 2:
//         console.log("you have 25% discount");
//         discountPercentage = .25;
//         break;
//     case 4:
//         console.log("you have 50% discount");
//         discountPercentage = .50;
//         break;
//     case 5:
//         console.log("it's free");
//         discountPercentage = 1;
//         break;
//     default:
//         console.log("you have no discount")
// }
//
// var discountAmount = discountPercentage * receipt;
// console.log(discountAmount);


// lucky number at the store
//input

var luckyNumber = Math.floor(Math.random()* 6);
var receipt = 60;

// process

switch (luckyNumber) {
    case 0:
        discount = 0;
        total = receipt;

        break;
    case 1:
        discount = 10;
        total = .9 * receipt;
        break;
    case 2:
        discount = 25;
        total = .75 * receipt;
        break;
    case 3:
        discount = 30;
        total = .7 * receipt;
        break;
    case 4:
        discount = 50;
        total = .5 * receipt;
        break;
    case 5:
        discount = 100;
        total = 0
        break;
}
// output

console.log("you got a " + discount + "% discount. Your total to pay is " + total);









// questions



var maybe = confirm("Do you want to enter a number?");

if (maybe === true) {
    var probablyANumber = prompt("Enter a number");
    if (isNaN(probablyANumber)) {
        alert("That was not a number");
    } else {
        if (probablyANumber % 2 === 0) { // it's even
            alert("Your number is even");
        } else {
            alert("Your number is odd");
        }
        alert(Number(probablyANumber) + 100);
        if (probablyANumber > 0) {
            alert("Your number is positive :)");
        } else {
            alert("Your number is negative :|");
        }
    }
}