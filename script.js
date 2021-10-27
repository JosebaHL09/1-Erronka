window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (window.scrollY >= 50 ) {
        document.getElementById("navbar").style.background = "#FFE48F";
        document.getElementById("nav__link").style.color = "#111111";
        document.getElementById("nav__link1").style.color = "#111111";
        document.getElementById("nav__link2").style.color = "#111111";
        document.getElementById("nav__link3").style.border = "1px solid #111111";
        document.getElementById("nav__link3").style.color = "#111111";
    }else{
        document.getElementById("navbar").style.background = "transparent";
        document.getElementById("nav__link").style.color = "#C4C6C7";
        document.getElementById("nav__link1").style.color = "#C4C6C7";
        document.getElementById("nav__link2").style.color = "#C4C6C7";
        document.getElementById("nav__link3").style.border = "1px solid #fff";
        document.getElementById("nav__link3").style.color = "#fff";
    }
}
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        document.body.classList.remove("nav-open");
    });
});

window.onload = function(){
    var slides = document.getElementsByClassName('carousel-item'),
        addActive = function(slide) {slide.classList.add('active')},
        removeActive = function(slide) {slide.classList.remove('active')};
    addActive(slides[0]);
    
    setInterval(function (){
      for (var i = 0; i < slides.length; i++){
        if (i + 1 == slides.length) {
          addActive(slides[0]);
          slides[0].style.zIndex = 100;
          setTimeout(removeActive,450, slides[i]); 
          break;
        }
        if (slides[i].classList.contains('active')) { 
          slides[i].removeAttribute('style');
          setTimeout(removeActive, 450, slides[i]); 
          addActive(slides[i + 1]);
          break;
        }
      } 
    }, 80000);
  }
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
     alert("Geolocation is not supported by this browser.") ;
    }
  }
  
  function showPosition(position) {
    alert("Latitude: " + position.coords.latitude + 
    "Longitude: " + position.coords.longitude);
  }

  