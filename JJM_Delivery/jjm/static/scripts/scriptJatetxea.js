window.onscroll = function () { scrollFunctionJatetxea() };
var positionFilter = document.getElementById("jaxlist");
var navbar = document.getElementById("navbar");
var contentItems = document.getElementById("contentItems");
var resena = document.getElementById("resena");
function scrollFunctionJatetxea() {
    if (getOffset(navbar).top >= getOffset(positionFilter).top) {
        $("#jaxlist").addClass('active');
        $("#resena").addClass('fixedResena');
        $("#myDropdown").hide();
    }

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        $("#resena").hide();
    }
    if (window.scrollY >= 1) {
        document.getElementById("navbar").style.background = "#FFE48F";
        $('#banner').addClass('small');

    } else {
        $("#jaxlist").removeClass('active');
        $("#resena").removeClass('fixedResena');
       $('#banner').removeClass('small');
       $("#resena").show();


    }
    changeActiveFilter();
}

var li = [];
var h1 = [];
$(document).ready(function () {
    $( "#publicar" ).prop( "disabled", true );
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
$("#anadirResena").on("click",function(){
    $("#resenaPop").fadeIn();
})
$("#cerrar").on("click",function(){
    $("#resenaPop").fadeOut();
})
var inputRadio=false;

$('input[type=radio][name=rating]').change(function() {
    
     $("#ratio").val(this.value)
    if( $(':radio[name="rating"]:checked').length >0) {
        inputRadio=true;
    }
    if (!$("#myTextArea").val() && inputRadio) {
        $( "#publicar" ).prop( "disabled", false );
    }
});

$('#inputResena').change(function() {
    if (!$("#myTextArea").val() && inputRadio) {
        $( "#publicar" ).prop( "disabled", false );
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

