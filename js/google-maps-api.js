var width = document.getElementById("map").style.width = "500px";
var height = document.getElementById("map").style.height = "500px";
var color = document.getElementById("map").style.backgroundColor = "red";
var border = document.getElementById("map").style.border = "3px solid black"


// for geocoder
// var geocoder = new google.maps.Geocoder();
// The Geocoder object has a method .geocode.

// geocode(request:GeocoderRequest, callback:function(Array.<GeocoderResult>, GeocoderStatus))

// var restaurants = [
//     ['Portos Bakery', 34.1504363, -118.25546259999999]
//     ['lalas Grill', 34.0837053, -118.3473002]
//     ['Chios peruvian grill',34.2117265, -118.46688419999998]
// ]
// create var map using  google and map object properties
// than create options with zoom and center object with lat an
// Create lat and long for our marker position
var home = {lat: 29.4571425, lng: -98.6839018};

var rudys = {lat: 29.4637098, lng: -98.6909647};

//we need zoom and center to display map
var options = {
    zoom: 15,
    center: new google.maps.LatLng(29.426791, -98.489602),

    mapTypeId: google.maps.MapTypeId.ROADMAP
};


//var map = new google.maps.Map(maps[0]/DOM element/, options/ object/)

//this renders the map on my div id="map"
var map = new google.maps.Map(document.getElementById("map"), options);


// Add the marker to our existing map
var marker1 = new google.maps.Marker({
    position: home,
    map: map,
    draggable: false,
    animation: google.maps.Animation.BOUNCE,

});


marker1.addListener('click', function (e) {
    // Create a new infoWindow object with content
    var infoWidow = new google.maps.InfoWindow({
        content: "YAY I DID IT"
    });

// Open the window using our map and marker
    infoWidow.open(map, marker1);

});

// Add the marker to our existing map
var marker2 = new google.maps.Marker({
    position: rudys,
    map: map,
    draggable: false,
    animation: google.maps.Animation.DROP,

});

// Create a new infoWindow object with content


marker2.addListener('click', function (e) {
    var infoWidow2 = new google.maps.InfoWindow({
        content: "Come eat at Rudy's!"
    });
    // placeMarkerAndPanTo(e.latLng, map);
    infoWidow2.open(map, marker2);

});

//To use more common inputs for locations, such as addresses, cities, states, or zip codes, we must first geocode our location and get lat and long values for the Maps API.
// Include code from previous example


// Set our address to geocode
var address = "San Antonio, TX";

// Init geocoder object
var geocoder = new google.maps.Geocoder();


// Geocode our address
geocoder.geocode({"address": address}, function (results, status) {

    // Check for a successful result
    if (status == google.maps.GeocoderStatus.OK) {

        console.log(results)
        console.log(results[0].geometry.location.lat())
        console.log(results[0].geometry.location.lng())

        // Recenter the map over the address
        map.setCenter(results[0].geometry.location);
    } else {

        // Show an error message with the status if our request fails
        alert("Geocoding was not successful - STATUS: " + status);
    }
});
