"use strict";

var i = 1;

 while (i <  65536) {
     i *= 2;
    console.log(i)

}


//---------------
// thi is also gives the same result

var limit = 65536;

  var powersOfTwo = 2; /*accumulator*/
 while (powersOfTwo <= limit) {
     console.log(powersOfTwo)
     //powersoftwo = powersoftwo *= 2;
     powersOfTwo *= 2;

 }




// ---------------------





// This is how you get a random number between 50 and 100
// var allCones = Math.floor(Math.random() * 50) + 50;
// // This is how you get a random number between 1 and 5
//
// var conesSold = 5;
// var notEnoughCones;
//
// do {
//     var cones = Math.floor(Math.random() * 5) + 1;
//     console.log(cones + " cones please")
//
//     if (allCones >= cones){
//         allCones = allCones - cones;
//         console.log("I have " + allCones + " left");
//     } else {
//         console.log("Dont have enough cones, I have " + allCones + " left")
//     }
//     notEnoughCones = (allCones > 0);
// } while (notEnoughCones);
//----------------

//this also gives same result


// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This is how you get a random number between 1 and 5



do {
    var cones = Math.floor(Math.random() * 5) + 1;
    if(cones > allCones) {
        console.log("cannot sell you " + cones + " i only have " + allCones);
        continue;

    }
    allCones -= cones;
    console.log(cones + " cones sold")

} while (allCones > 0)
console.log("yay I sold them all")



//if u know doa for loop, if u dont kno do a while loop or do while, if once do while