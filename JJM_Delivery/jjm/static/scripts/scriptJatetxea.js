window.onscroll = function () { scrollFunctionJatetxea() };
var positionFilter = document.getElementById("jaxlist");
var navbar = document.getElementById("navbar");
var contentItems = document.getElementById("contentItems");
var resena = document.getElementById("resena");
function scrollFunctionJatetxea() {
    if (getOffset(navbar).top >= getOffset(positionFilter).top) {
        $("#jaxlist").addClass('active');
        //$("#resena").addClass('fixedResena');
        $("#myDropdown").hide();
    }

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        // $("#resena").hide();
    }
    if (window.scrollY >= 1) {
        document.getElementById("navbar").style.background = "#FFE48F";
        $('#banner').addClass('small');

    } else {
        $("#jaxlist").removeClass('active');
        //$("#resena").removeClass('fixedResena');
        $('#banner').removeClass('small');
        $("#resena").show();


    }
    changeActiveFilter();
}

var li = [];
var h1 = [];
$(document).ready(function () {
    $("#publicar").prop("disabled", true);
    var filterList = document.getElementById("jaxlist");
    if ($('#jaxlist ul li').length >= 10) {
        $("#buttonMore").css({ display: "flex" })
    }
    allStorage()

});

function changeActiveFilter() {
    var navbarTop = getOffset(positionFilter).top;
    var titulos = $(".titulos");
    var li = $("#jaxlist ul li");
    for (var i = 0; i < titulos.length; i++) {
        if (getOffset(titulos[i]).top <= navbarTop + 200) {
            li[i].style.borderBottom = "2px solid black";
            if (i > 0) {
                li[i - 1].style.borderBottom = "none";
            }
        } else {
            li[i].style.borderBottom = "none";

        }
    }

}
function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
    };
}
$("#anadirResena").on("click", function () {
    $("#resenaPop").fadeIn();
})
$("#cerrar").on("click", function () {
    $("#resenaPop").fadeOut();

})
if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}
var inputRadio = false;

$('input[type=radio][name=rating]').change(function () {

    $("#ratio").val(this.value)
    if ($(':radio[name="rating"]:checked').length > 0) {
        inputRadio = true;
    }
    if (!$("#myTextArea").val() && inputRadio) {
        $("#publicar").prop("disabled", false);
    }
});

$('#inputResena').change(function () {
    if (!$("#myTextArea").val() && inputRadio) {
        $("#publicar").prop("disabled", false);
    }
});

var x = true;
$("#buttonMore").on("click", function () {
    if (x) {
        $("#more-filter").addClass('importantRule');
        x = false;
    } else {
        $("#more-filter").removeClass('importantRule');
        x = true;
    }
});
$(document).ready(function () {
    var latitudJatetxe = $("#latitud").val()
    var longitudJatetxe = $("#longitud").val()
    var latitudeUser = localStorage.getItem('latitude')
    var longitudeUser = localStorage.getItem('longitude')

    var km = calcCrow(latitudeUser, longitudeUser, latitudJatetxe, longitudJatetxe).toFixed(1)
    $('#distantzia').last().html(km+" km")
    var tiempo = km * 5

    if (tiempo > 60) {
        var hours = Math.floor(tiempo / 60);
        var minutes = parseInt(tiempo % 60);
        $("#denbora").last().html(hours + "h " + minutes + " min.");
    } else {
        $("#denbora").last().html(tiempo + " min.");
    }


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

// Converts numeric degrees to radians
function toRad(Value) {
    return Value * Math.PI / 180;
}



