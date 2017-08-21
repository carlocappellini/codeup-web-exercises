(function () {
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray = planetsString.split("|")

    // TODO: Convert planetsString to an array, save it to planetsArray.


// planetsArray = planetsString.split(" | ")
    var str = "<ul>\n\t<li>";
    str += planetsArray.join("</li>\n\t<li>");
    str += "</li>\n\t</ul>";
    console.log(str);
    // TODO: Create a string with <br> tags between each planet. console.log() your results.
    //       Why might this be useful?
// var planets = "Mercury"<br>"Venus"<br>"Earth"<br>"Mars"<br>"Jupiter"<br>"Saturn"<br>"Uranus"<br>"Neptune";
// Bonus: Create a second string that would display your planets in an undordered list.
    //        You will need an opening AND closing <ul> tags around the entire string, and <li> tags around each planet.
    // document.body.innerHTML =
    console.log()
})();
