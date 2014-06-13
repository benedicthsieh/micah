var rightAdvanceButton, leftAdvanceButton;
var slides;
var displayedSlide = 0;

// https://developer.mozilla.org/en-US/docs/Web/API/NodeList
var turnObjToArray = function(obj) {
  return [].map.call(obj, function(element) {
    return element;
  })
};

var onPageLoad = function() {
  rightAdvanceButton = document.querySelector("#right-advance-button");
  leftAdvanceButton = document.querySelector("#left-advance-button");

  slides = turnObjToArray(document.querySelectorAll(".slide"));
  showOnlyDisplayedSlide();
  showOnlyRelevantAdvanceButtons();

  rightAdvanceButton.addEventListener('click', function() {
    displayedSlide++;
    showOnlyDisplayedSlide();
    showOnlyRelevantAdvanceButtons();
  });

  leftAdvanceButton.addEventListener('click', function() {
    displayedSlide--;
    showOnlyDisplayedSlide();
    showOnlyRelevantAdvanceButtons();
  })

};

var showOnlyDisplayedSlide = function() {
  for (var i = 0; i < slides.length; i++) {
    var slide = slides[i];
    slide.style.display = i == displayedSlide ? 'block' : 'none';
  }
};

var showOnlyRelevantAdvanceButtons = function() {
  leftAdvanceButton.style.display = displayedSlide > 0 ?
    'block' : 'none';
  rightAdvanceButton.style.display = displayedSlide < slides.length - 1 ?
    'block' : 'none';
};


onPageLoad();