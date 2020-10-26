var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(i) {
  showSlides(slideIndex += i);
}

function currentSlide(i) {
  showSlides(slideIndex = i);
}

function showSlides(i) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (i > slides.length) {slideIndex = 1}    
  if (i < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
