window.onscroll = function () { scrollFunctionJatetxea() };
var positionFilter = document.getElementById("jaxlist");
var navbar = document.getElementById("navbar");
function scrollFunctionJatetxea() {
    if (getOffset(navbar).top >= getOffset(positionFilter).top) {
        $("#jaxlist").addClass('active');
        //document.getElementById('buttonShopHide').classList.add("display");
        $("#myDropdown").hide();
    }else{
        //$("#myDropdown").show();
        //$("#myDropdown").toggle();
    }
    if (window.scrollY >= 1) {
        document.getElementById("navbar").style.background = "#FFE48F";
        $('#banner').addClass('small');

    } else {
        $("#jaxlist").removeClass('active');
       // document.getElementById('buttonShopHide').classList.remove("display");
       $('#banner').removeClass('small');

    }
    changeActiveFilter();
}

var li = [];
var h1 = [];
$(document).ready(function () {
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

