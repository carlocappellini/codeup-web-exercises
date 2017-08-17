var question = prompt("Write a number 1 - 7")


for (var i = 1; i <= 10; i++) {
    console.log(question + " X " + i + " = " + i * question )
}


for (var i = 1; i <=10; i++) {
    var numbers = Math.floor(Math.random() * 20) + 180;
    if (numbers % 2 === 0) {
        console.log(numbers + " is even");
    } else {
        console.log(numbers + " is odd")
    }
}


