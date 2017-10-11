




//
// this is to display google maps api
//
//
//
// (function() {
//     "use strict";
//
//     // Set our map options
//     var mapOptions = {
//         // Set the zoom level
//         zoom: 19,
//
//         // This sets the center of the map at our location
//         center: {
//             lat:  29.426791,
//             lng: -98.489602
//         }
//     };
//
//     // Render the map
//     var map = new google.maps.Map(document.getElementById("map"), mapOptions);
// })();
// end of google maps api display--------------------


// Problems
//
// Write a function named isNegative that accepts a number and returns true or false based on whether the input is negative.
//
// isNegative(-1) // true
// isNegative(-5) // true
// isNegative(0) // false
// isNegative(6) // false

// Write a function named average that accepts an array of numbers and returns the average of those numbers.
//
// average([1, 2, 3]) // 2
// average([4, 6, 8, 10, 12]) // 8
// average([1, 2]) // 1.5

// Write a function named countOdds that accepts an array of numbers and returns the number of odd numbers in the array.
//
// countOdds([1, 2, 3]) // 2
// countOdds([4, 6, 8, 10]) // 0
// countOdds([1, 2, 1, 1]) // 3

// Write a function named convertNameToObject that accepts a string that contains a first name and last name separated by a space character, and returns an object with properties firstName and lastName.
//
// convertNameToObject('Harry Potter') // {firstName: 'Harry', lastName: 'Potter'}
// convertNameToObject('Ron Weasley') // {firstName: 'Ron', lastName: 'Weasley'}

// Write a function named fiveTo that accepts a number and returns an array of the integers from 5 up to and including the passed number.
//
// fiveTo(5)   // [5]
// fiveTo(10)  // [5, 6, 7, 8, 9, 10]
// fiveTo(-2)  // [5, 4, 3, 2, 1, 0, -1, -2]
// fiveTo(6)   // [5, 6]

// Write a function named upperCaseLastNames that accepts an array of objects where each object has properties firstName and lastName and returns the same array of objects with each last name capitalized
//
// var names = [
//     {firstName: 'Harry', lastName: 'Potter'},
//     {firstName: 'Ron', lastName: 'weasley'},
//     {firstName: 'Hermione', lastName: 'granger'}
// ];
//
// upperCaseLastNames(names);
// /*
// [
//    {firstName: 'Harry', lastName: 'Potter'},
//    {firstName: 'Ron', lastName: 'Weasley'},
//    {firstName: 'Hermione', lastName: 'Granger'}
// ]
//  */ TEST ASSESSMENT PROBLEMS 08/30/2017

// var isNegative = function (num) {
//     return num < 0;
// };
//
// var average = function (arr) {
//     return (arr.reduce(function (acc, value) {
//         return acc + value;
//     }) / arr.length);
// };
//
// var countOdds = function (arr) {
//     return (arr.filter(function (index) {
//         return index % 2 === 1;
//     }).length);
// };
//
// var convertNameToObject = function (name) {
//     return {
//         "firstName": name.split(" ")[0],
//         "lastName": name.split(" ")[1]
//     }
// };
//
// var fiveTo = function (num) {
//     for (var i = 5, result = [i]; i !== num; (num >= 5) ? result.push(++i) : result.push(--i)) ;
//
//     return result;
// };
//
// var upperCaseLastNames = function (arr) {
//     return arr.map(function (a) {
//         return {
//             "firstName": a.firstName,
//             "lastName": a.lastName.replace(/\w\S*/g, function (txt) {
//                 return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//             })
//         };
//     })
// };


//SEPARATION----------------------------------


//another solution to the assessment

//function isNegative(number) {
//        return number < 0;
//    }
//
//function average(numbers) {
//        var sum = 0;
//        numbers.forEach(function (number) {
//                sum += number;
//            });
//        return sum / numbers.length;
//    }
//
//function countOdds(numbers) {
//        var odds = 0;
//        numbers.forEach(function (number) {
//                odds += number % 2 !== 0 ? 1 : 0;
//            });
//        return odds;
//    }
//
//function convertNameToObject(name) {
//        var parts = name.split(" ");
//        return {
//                firstName: parts[0],
//                lastName: parts[1]
//        };
//    }
//
//function fiveTo(limit) {
//        var numbers = [];
//        var isLessThan5 = limit < 5;
//        var increment = isLessThan5 ? -1 : 1;
//        for (var i = 5; isLessThan5 ? i >= limit : i <= limit; i += increment) {
//                numbers.push(i);
//            }
//        return numbers;
//    }
//
//function upperCaseLastNames(people) {
//        var correctedNames = [];
//        people.forEach(function (person) {
//                correctedNames.push({
//                        firstName: person.firstName,
//                        lastName: person.lastName[0].toUpperCase() + person.lastName.substring(1)
//                })
//            });
//      return correctedNames;
// /  }/


//another example code-------------------------------------


// <!--this code makes the color change once we click itdoble click and hover, by targerting id and using diferent funtions to chnage the color when we click-->

// var height = document.getElementById("box").style.height = "300px";
// var width = document.getElementById("box").style.width = "300px";
// (function () {
//     var box = $("#box");
//
//     box.click(function () {
//         console.log("click")
//         $(this).css("background-color", "red")
//
//
//     })
//
//     var changeToblue = function () {
//         $(this).css("background-color", "blue")
//     };
//
//     box.dblclick(changeToblue);
//
//     var hoverOut = function () {
//         $(this).css("background-color", 'green')
//     }
//
//     box.hover(function () {
//         $(this).css("background-color", 'red')
//
//     }, hoverOut)
// })();hoverOut


// example 3 turn propmt to uppercase

// function toUpperCase (message) {
//     message = prompmessage.toUpperCase
//     return  prompt(message.toUpperCase())
// }

//end exampple 3


//koonami code exercise


//end koonami


// example 4

// /* Declare the function 'myFunc' */
// function myFunc(theObject) {
//     theObject.brand = "Toyota";
// }
//
// /*
//  * Declare variable 'mycar';
//  * create and initialize a new Object;
//  * assign reference to it to 'mycar'
//  */
// var mycar = {
//     brand: "Honda",
//     model: "Accord",
//     year: 1998
// };
//
// /* Logs 'Honda' */
// console.log(mycar.brand);
//
// /* Pass object reference to the function */
// myFunc(mycar);
//
// /*
//  * Logs 'Toyota' as the value of the 'brand' property
//  * of the object, as changed to by the function.
//  */
// console.log(mycar.brand);

// end example 4


// Executing Functions Samples


// var myFunction = function() {
//     statements
// }
//
// var myFunction = function namedFunction(){
//     statements
// }
//-------------------------------


//different type of functions

//Function constructor vs. function declaration vs. function expression

// Compare the following:
//
//     A function defined with the Function constructor assigned to the variable multiply:
//
//     var multiply = new Function('x', 'y', 'return x * y');
// A function declaration of a function named multiply:
//
//     function multiply(x, y) {
//         return x * y;
//     } // there is no semicolon here
// A function expression of an anonymous function assigned to the variable multiply:
//
//     var multiply = function(x, y) {
//         return x * y;
//     };
// A function expression of a function named func_name assigned to the variable multiply:
//
//     var multiply = function func_name(x, y) {
//         return x * y;
//     };

//--------------------------------------------


//functions constructor

// var foo = (new Function("var bar = \'FOO!\';\nreturn(function() {\n\talert(bar);\n});"))();
// foo(); // The segment "function() {\n\talert(bar);\n}" of the function body string is not re-parsed.
//
// //=---------------------------


//if statements functions

//
//
// In non-strict code, function declarations inside blocks behave strangely. For example:
//
//     if (shouldDefineZero) {
//         function zero() {     // DANGER: compatibility risk
//             console.log("This is zero.");
//         }
//     }
//
// ES2015 says that if shouldDefineZero is false, then zero should never be defined, since the block never executes. However, it's a new part of the standard. Historically, this was left unspecified, and some browsers would define zero whether the block executed or not.

//
// in strict mode, all browsers that support ES2015 handle this the same way: zero is defined only if shouldDefineZero is true, and only in the scope of the if-block.
//
//     A safer way to define functions conditionally is to assign a function expression to a variable:
//
//     var zero;
// if (0) {
//     zero = function() {
//         console.log("This is zero.");
//     };
// }
// //=--en if funtions----------------------------


//POKEMON API
// Pokemon API example


//
// var request = $.ajax("http://pokeapi.co/api/v2/pokemon/1/", {
//     beforeSend: function () {}  // this lines solves the problem with CORS
// });
// request.done(showPokemonInformation);
//
// function showPokemonInformation (pokemon) {
//     console.log(pokemon.name);
//     pokemon.abilities.forEach(function (ability) {
//         console.log(ability.ability.name);
//     });
// }
//
//
// var request = $.ajax("http://pokeapi.co/api/v2/pokemon/1/", {
//     beforeSend: function () {}  // this lines solves the problem with CORS
// });
// request.done(showPokemonInformation);
//
// function showPokemonInformation (pokemon) {
//     console.log(pokemon.name);
//     pokemon.abilities.forEach(function (ability) {
//         console.log(ability.ability.name);
//     });
// }
// ​


//--------finish pokemon api/


// Splice

// var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
//
// myFish.splice(2, 0, 'drum'); // insert 'drum' at 2-index position
// // myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]
//
// myFish.splice(2, 1); // remove 1 item at 2-index position (that is, "drum")
// // myFish is ["angel", "clown","mandarin", "sturgeon"]

//end of splice


// es6 example

"use strict";
// Block level scope
// const firstName = "Fer";
// function printName(name){
//     let lastName = "Mendoza";
//     console.log(firstName);
//     console.log(name);
//     console.log(lastName);
// }
// printName(firstName);
// //    console.log(lastName);
// function getLastName(arrayNames){
//     let str = "";
//     for(let i = 0; i <  arrayNames.length ; i++ ){
//         str += arrayNames[i] + " ";
//     }
//     return str;
// }
// let arrayOfNames = ["Mendoza", "Rodriguez", "Montealegre"];
// let names = getLastName(arrayOfNames);
// console.log(names);
// // Template strings
// let street = "Navarro 300";
// let zipCode = 78205;
// let price = 30;
// console.log(`${street.toUpperCase()}, San Antonio, TX, ${zipCode}`);
// let lis = document.getElementsByTagName("li");
// for(let name of arrayOfNames){
//     console.log(name);
// }
// for(let element of lis){
//     console.log(element);
// }
// //  Current way
// //    var add = function(a, b){
// //        return a+ b;
// //    }
// // If there's no more than 1 line you don't need the return or {} braces
// let add = (a, b) => a + b;
// console.log(add(1,2));
// //
// //    function printName(name){
// //        let lastName = "Mendoza";
// //        console.log(firstName);
// //        console.log(name);
// //        console.log(lastName);
// //    }
// // If there's more than one statement in the function then you need to the {} braces
// let printNameArrow = name => {
//     let lastName = "Mendoza";
//     console.log(firstName);
//     console.log(name);
//     console.log(lastName);
// };
// printNameArrow("Ana");
// const make = "Nissan";
// let car = {
//     // This is just a variable
//     make,
//     year: "2017",
//     model: "Sentra"
// };
// // Current way
// //    var model = car.model;
// // ES6 way
// let {year, model} = car;
// console.log(car);
// console.log(`${year} ${model}`);


//end of es6 example
