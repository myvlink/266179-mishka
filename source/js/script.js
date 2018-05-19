function initMap() {
  var uluru = {lat: 59.938828, lng: 30.323150};
  var map = new google.maps.Map(document.getElementById("map"), {
    center: uluru,
    zoom: 17
  });
  var image = {
    url: "../img/map-pin.svg",
    scaledSize: new google.maps.Size(100, 100)
}
  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
    optimized: false,
    icon: image
  });
}

var navToggle = document.querySelector(".main-nav__toggle");
var navMain = document.querySelector(".main-nav__list");
navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav__list--closed")) {
    navMain.classList.remove("main-nav__list--closed");
    navMain.classList.add("main-nav__list--opened");
  } else {
    navMain.classList.add("main-nav__list--closed");
    navMain.classList.remove("main-nav__list--opened");
  }
});
