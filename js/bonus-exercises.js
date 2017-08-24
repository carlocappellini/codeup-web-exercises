var interval = 45000;

var stillActive;

var askUser = setInterval(function () {
    stillActive = confirm("do you still want to stay here")
    if (stillActive === true) {
        return;
    }

    if (stillActive === false) {
        window.location = 'http://www.google.com';
    }


}, interval);

