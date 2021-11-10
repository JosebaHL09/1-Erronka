
window.onload = function () {
  var slides = document.getElementsByClassName('carousel-item'),
    addActive = function (slide) { slide.classList.add('active') },
    removeActive = function (slide) { slide.classList.remove('active') };
  addActive(slides[0]);

  setInterval(function () {
    for (var i = 0; i < slides.length; i++) {
      if (i + 1 == slides.length) {
        addActive(slides[0]);
        slides[0].style.zIndex = 100;
        setTimeout(removeActive, 450, slides[i]);
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
  
  if (typeof (Storage) !== "undefined") {
    localStorage.setItem('latitude', position.coords.latitude)
    localStorage.setItem('longitude', position.coords.longitude)
  }
  $.ajax({
    type: "GET",
    url: "/index/" + position.coords.latitude + position.coords.longitude,
    success: function (data) {
      alert("ondo")
    }
  })
  var url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + position.coords.longitude + "," + position.coords.latitude + ".json?access_token=pk.eyJ1IjoibWlpa2VsbTEiLCJhIjoiY2t2MHNwOTN5MWF3eTJ2cXE4NmJueDVjbiJ9.MUhKjmQk_k9sx8s54IMZug";
  $.ajax({
    type: "GET",
    url: url,
    success: function (data) {
      var adress = data.features[0].place_name.split(',')
      var adressShow = adress[0] + "-" + adress[1];
      document.getElementById('hiria').value = adressShow;
    }
  })
}

$(document).ready(function () {
  var latitude = []
  var longitude = []
  var latitudeUser = localStorage.getItem('latitude')
  var longitudeUser = localStorage.getItem('longitude')

  document.getElementById('latitud').value = latitudeUser;
  document.getElementById('longitud').value = longitudeUser;

  var km = []
  var tiempo = []
  $(".latitudea").each(function () {
    latitude.push($(this).text())
  })
  $(".longitudea").each(function () {
    longitude.push($(this).text())
  })

  for (var i = 0; i < latitude.length; i++) {
    var k = calcCrow(latitudeUser, longitudeUser, latitude[i], longitude[i]).toFixed(1)
    km.push(k)
  }
  tiempo = calcT(km)
  $(".time").each(function () {
    var id =this.id;
    var tim = parseInt(tiempo[id-1])
    if(tim>60){
      var hours = Math.floor(tim / 60);          
      var minutes = tim % 60;
      $(this).last().html(hours +"h "+minutes+" min.");
    }else{
      $(this).last().html(tim+" min.");
    }
 
  })

})

function calcCrow(lat1, lon1, lat2, lon2) {
  var R = 6371; // km
  var dLat = toRad(lat2 - lat1);
  var dLon = toRad(lon2 - lon1);
  var lat1 = toRad(lat1);
  var lat2 = toRad(lat2);

  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d;
}
function calcT(d) {
  tArray = []
  for(i = 0;i<d.length;i++){
    tArray.push(d[i]*5)
  }
  return tArray
}
// Converts numeric degrees to radians
function toRad(Value) {
  return Value * Math.PI / 180;
}

