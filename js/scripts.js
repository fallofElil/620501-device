var slides = document.getElementsByClassName("slider-element");
var slideButtons = document.getElementsByClassName("slider-btn");

for (var i = 0; i < slideButtons.length; i++) {
  slideButtons[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    var activeSlide = document.querySelector(".active-slide");
    activeSlide.classList.remove("active-slide");
    currentIndex = this.dataset.id;
    slides[currentIndex].classList.add("active-slide");

    var activeBtn = document.querySelector(".active-btn");
    activeBtn.classList.remove("active-btn");
    slideButtons[currentIndex].classList.add("active-btn");
  });
}

//popups

var writeUsLink = document.querySelector(".btn-write-us");
var writeUsPopup = document.querySelector(".modal-write-us");
var writeUsClose = writeUsPopup.querySelector(".close-btn");

writeUsLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUsPopup.classList.add("modal-show");
});

writeUsClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUsPopup.classList.remove("modal-show");
});

var mapLink = document.querySelector(".map-link");

var mapPopup = document.querySelector(".modal-map");
var mapClose = document.querySelector(".close-map");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {

  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
    }
    if (writeUsPopup.classList.contains("modal-show")) {
      writeUsPopup.classList.remove("modal-show");
    }
  }
});
