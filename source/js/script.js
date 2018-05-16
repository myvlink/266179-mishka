function initMap() {
  var centerLatLng = new google.maps.LatLng(59.938828, 30.323150);
  var mapOptions = {
    center: centerLatLng, zoom: 18
  };
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  var marker = new google.maps.Marker({
    position: centerLatLng, map: map, icon: "../img/icon-map-pin.svg"
  });
}
google.maps.event.addDomListener(window, "load", initMap);
