(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,
        // here i created an empty variable called area then assign its value to area  = math.pi * math.pow, i want to multiply math.pi times math.pow and i want to round the radius of circle, so i use this.radius to be rounded and "this" calls/use the propertu inside of the object , then I  return my result which is area because are its empty and that what i am trying to get
        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2
            var area;
            area = Math.PI * Math.pow(this.radius, 2)
            // TODO: return the proper value

            return area;
        },
        // here i rounded
        //here i have an argument called dorounding, i need to declare an empty variable again to assign my value/result in the end, doRounding its not assigned to anything but it  has a use, it is my argument, named after a decription of what i am trying to do , i want to achieve if rounding is true rounded to the nearest number, so i  use an if statement, with dorounding === true, if its true, i want to assign my area' value to round up the number from the previous function, like this , area = math.round what am i rounding thou? i am rounding the method i used in the previous function and calling by using "this.nameofproperty" because is a property that holds a function inside my object. so i am rounding  it like this if if true , area = math.round(this.getarea()) and an else statement if its false and not do anything to the area result this time like this, area = this.getArea, no math.pow or not math.round this time because its false and dont want to do anything to my result, then console inside the function using this and concatenation

        logInfo: function (doRounding) {
            var area;

            // TODO: complete this method.
            if (doRounding === true) {
                area = Math.round(this.getArea())
            } else {
                area = this.getArea()
            }
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            console.log("Area of a circle with radius: " + this.radius + ", is: " + area);
        }
    };

    //here we console log for true and false by calling object/function method i am trying to achieve result and that is logInfo so call the function circle.loginfo(true) if true is going to round , circle.loginfo(false) if false number will remain the same

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    circle.radius = 5
    // log info about the circle
    circle.logInfo()
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();
