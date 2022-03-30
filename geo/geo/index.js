var results;
var map;

window.onload = function () {
    result = document.getElementById('result');
    console.log(result)
    var myOptions = {
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById("mapSurface"), myOptions);

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            geolocationSuccess, geolocationFailure);

        result.innerHTML = "You here";
    }
    else {
        result.innerHTML = "Sorry,error";
        goToDefaultLocation();
    }

    function geolocationSuccess(position) {
        var location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

        map.setCenter(location);

        var infowindow = new google.maps.InfoWindow();
        infowindow.setContent("You here");
        infowindow.setPosition(location);

        infowindow.open(map);

    }

    function geolocationFailure(positionError) {
        goToDefaultLocation();
    }

    function goToDefaultLocation() {

        var city = new google.maps.LatLng(22, 22);
        map.setCenter(city);
    }
}
