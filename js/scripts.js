//JS for switching displayed text/slides


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "grid";  
  dots[slideIndex-1].className += "active";
}

//increament on value click

function viewModel() {
  var self = this;
  
  self.inputNumber = ko.observable(0);
  
  self.decrement = function() {
    var n = self.inputNumber();
    n -= 1;
    return self.inputNumber(n);
  };
  
  self.increment = function() {
    var n = self.inputNumber();
    n += 1;
    return self.inputNumber(n);
  };
  
}


