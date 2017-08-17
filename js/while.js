

var i = 1;

 while (i <  65536) {
     i *= 2;
    console.log(i)

}

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This is how you get a random number between 1 and 5

var conesSold = 5;
var notEnoughCones;

do {
    var cones = Math.floor(Math.random() * 5) + 1;
    console.log(cones + " cones please")

    if (allCones >= cones){
        allCones = allCones - cones;
        console.log("I have " + allCones + " left");
    } else {
        console.log("Dont have enough cones, I have " + allCones + " left")
    }
    notEnoughCones = (allCones > 0);
} while (notEnoughCones);