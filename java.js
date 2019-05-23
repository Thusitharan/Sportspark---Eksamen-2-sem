/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-75px";
  }
  prevScrollpos = currentScrollPos;
}


var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}





document.getElementById("Overly").addEventListener("click", function(){
 var e =document.getElementsByClassName("modalbox");

        e[0].style.display = 'block';
   
})	;
document.getElementById("close").addEventListener("click", function(){
   var e =document.getElementsByClassName("modalbox");
 e[0].style.display= 'none';
});






document.getElementById("Overly2").addEventListener("click", function(){
 var e =document.getElementsByClassName("modalbox2");

        e[0].style.display = 'block';
   
})	;
document.getElementById("close2").addEventListener("click", function(){
   var e =document.getElementsByClassName("modalbox2");
 e[0].style.display= 'none';
});