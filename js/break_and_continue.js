"use strsict";


// var random = Math.floor((Math.random()*50)+1)

//
// var question = prompt("put a number between 1 and 50");
// if (question === "") {
//     alert("oops not a number or empty")
// }
//
//
// console.log("random number to skip is " + random);
// for (var i = 1; i < 50; i++) {
//     if(i % 2 === 0 || i === random) {
//         continue;
//     }
//
//     console.log("odd nummber " + i)
//
// }


console.log("Breaks");

var number = 0;

while(true) {
    number = prompt("give me an odd number betwwen 1 nd 50");

    number = parseInt(number);

    if ( ( number >= 1 && number <= 50) && (number % 2 == 1) ) {
        console.log("Found the 1 i was looking for ");
        break;
    }

}




// -----------------------

var number = prompt("give an odd numbeer between 1 - 50 ");
number = parseInt(number);
for (var i = 1; i <= 50; i+=2) {
    if(number === i) {
        console.log("number to skip " + i);
        continue;

    }

    console.log("Here an odd number " + i)
}