function initMap() {
  var uluru = {lat: 59.938828, lng: 30.323150};
  var map = new google.maps.Map(document.getElementById('map'), {
    center: uluru,
    zoom: 17
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
    icon: "../img/icon-map-pin.svg"
  });
}
