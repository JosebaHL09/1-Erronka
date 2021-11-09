var hiria = $("#tituloHiria").html();

$(".filters ul li").click(function (event) {
    var id=this.id;

    $(".spinner").show();
    setTimeout(function(){ 
        window.location.href = "../post_hiria?mota="+id+"&hiria="+hiria+"";
        $(".spinner").hide();
    }, 500);
     
})
$(".restaurant").click(function (event) {
    var id = this.id;
    $(".spinner").show();
    setTimeout(function(){ 
        window.location.href = "../show_jatetxea?id="+id+"";
        $(".spinner").hide();
    }, 500);
})
var deskripzioa=[];
var id=[];
$( window ).on( "load", function() {
    if(!window.location.href.includes("/hiria") ){
        $("#pop-up").hide();
    }
    var latitud= $(".latitud").html();  
    var longitud= $(".longitud").html(); 
    var mymap = L.map('mapid').setView([latitud, longitud], 15);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWlpa2VsbTEiLCJhIjoiY2t2MHNwOTN5MWF3eTJ2cXE4NmJueDVjbiJ9.MUhKjmQk_k9sx8s54IMZug', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
            'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1
    }).addTo(mymap);


    var latitud=[];
    var longitud=[];
    var izena=[];
    var mota=[];
    var telefonoa=[];

    $(".id").each(function(){
        id.push($(this).text())
    })
    $(".latitud").each(function(){
        latitud.push($(this).text())
    })
    $(".longitud").each(function(){
        longitud.push($(this).text())
    })
    $(".izena").each(function(){
        izena.push($(this).text())
    })
    $(".mota").each(function(){
        mota.push($(this).text())
    })
    $(".telefonoa").each(function(){
        telefonoa.push($(this).text())
    })
    $(".deskripzioa").each(function(){
        deskripzioa.push($(this).text())
    })
    var greenIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });
    for(var i = 0 ; i<izena.length;i++){
        var marker = L.marker([latitud[i], longitud[i]],{icon: greenIcon}).addTo(mymap)
        marker.bindPopup("<div class='popUpMap'><b>"+izena[i]+"</b><br> "+deskripzioa[i]+"<br>"+mota[i]+"<br> " + telefonoa[i]+"<br> <button class='bottonMap' id='"+id[i]+"'></button></div>").openPopup().on("popupopen", () => {
            $(".bottonMap").click(function (event) {
                var id = this.id;    
                setTimeout(function(){ 
                    window.location.href = "../show_jatetxea?id="+id+"";
                }, 500);
            })
          });
    }
  
})

$(function() { 
    $("#slider-range").slider({
        range: "min",
        value:50,
        min: 1,
        max: 100,
        slide: function( event, ui ) {

        },
        stop: function( event, ui ) {
            var price = ui.value;
            var precio='';
            if(price <33){
                precio="€"
            }
            if(price>33 && price < 66){
                precio="€€"
            }
            if(price > 66){
                precio="€€€"
            }
              for(var i =0 ; i < deskripzioa.length;i++){
                var a = deskripzioa[i].split('·');
                var x =''
                x = a[0].replaceAll(' ','')
                if(precio == x){
                    var ida = id[i]    
                    console.log(ida)
                    $("#"+ida).show(300)

                }else{     
                    var ida = id[i]   
                    console.log(ida)
                    $("#"+ida).hide(300)
                  
                }
            }
        }
    });
});

//This function takes in latitude and longitude of two location and returns the distance between them as the crow flies (in km)
function calcCrow(lat1, lon1, lat2, lon2) 
{
  var R = 6371; // km
  var dLat = toRad(lat2-lat1);
  var dLon = toRad(lon2-lon1);
  var lat1 = toRad(lat1);
  var lat2 = toRad(lat2);

  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c;
  return d;
}

function toRad(Value) 
{
    return Value * Math.PI / 180;
}

function closePopUp(){
    $("#pop-up").fadeOut();
}


