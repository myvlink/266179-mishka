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
var navMainAssort = document.querySelector(".main-nav__list--assortment");
var navMainSpec = document.querySelector(".main-nav__list--special-nav");
navToggle.classList.remove("main-nav__toggle--nojs");
navMainAssort.classList.remove("main-nav__list--nojs");
navMainSpec.classList.remove("main-nav__list--nojs");
navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav__list--closed")) {
    navMainAssort.classList.remove("main-nav__list--closed");
    navMainAssort.classList.add("main-nav__list--opened");
    navMainSpec.classList.remove("main-nav__list--closed");
    navMainSpec.classList.add("main-nav__list--opened");
  } else {
    navMainAssort.classList.add("main-nav__list--closed");
    navMainAssort.classList.remove("main-nav__list--opened");
    navMainSpec.classList.add("main-nav__list--closed");
    navMainSpec.classList.remove("main-nav__list--opened");
  }
  if (navToggle.classList.contains("main-nav__toggle--opened")) {
    navToggle.classList.remove("main-nav__toggle--opened");
  } else {
    navToggle.classList.add("main-nav__toggle--opened");
  }
});
