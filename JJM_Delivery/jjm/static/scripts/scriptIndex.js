
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
    }, 8000);
  }
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  $.ajax({
    type: "GET",
    url: "/index/" + position.coords.latitude + position.coords.longitude,
    success: function(data) {
       alert("ondo")
    }
})
   var url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+ position.coords.longitude+","+position.coords.latitude+".json?access_token=pk.eyJ1IjoibWlpa2VsbTEiLCJhIjoiY2t2MHNwOTN5MWF3eTJ2cXE4NmJueDVjbiJ9.MUhKjmQk_k9sx8s54IMZug";
    $.ajax({
      type:"GET",
      url:url,
      success:function(data){
        var adress = data.features[0].place_name.split(',')
        var adressShow = adress[0]+ "-" +adress[1];
        document.getElementById('txt_adress').value = adressShow;
      }
    })
}

