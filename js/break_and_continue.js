var random = Math.floor((Math.random()*50)+1)

var question = prompt("put a number between 1 and 50");
if (question === "") {
    alert("oops not a number or empty")
}


console.log("random number to skip is " + random);
for (var i = 1; i < 50; i++) {
    if(i % 2 === 0 || i === random) {
        continue;
    }

    console.log("odd nummber " + i)

}