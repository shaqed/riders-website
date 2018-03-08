function initMap() {
    /*var m = new google.maps.Map(document.getElementById("map"), {
        zoom :4,
        center : {lat: -25.363, lng: 131.044}
    });
    m.addListener("click", function (e) {
        var lat = e.latLng.lat();
        var long = e.latLng.lng();

        console.log(lat + ", " + long);
    });*/

    var directionsService = new google.maps.DirectionsService();
    var directionsDisplay = new google.maps.DirectionsRenderer();
    var haight = new google.maps.LatLng(37.7699298, -122.4469157);
    var oceanBeach = new google.maps.LatLng(37.7683909618184, -122.51089453697205);
    var mapOptions = {
        zoom: 14,
        center: haight
    };
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    directionsDisplay.setMap(map);

    directionsService.route({
        origin: haight,
        destination: oceanBeach,
        travelMode : google.maps.TravelMode["DRIVING"]
    }, function (response, status) {
        if (status === "OK") {
            console.log("GOOD");
            console.log(response);
            directionsDisplay.setDirections(response);
        } else {
            console.log("BAD");
        }
    })

}
