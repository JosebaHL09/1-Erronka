window.onscroll = function () { scrollFunctionJatetxea() };
var positionFilter = document.getElementById("jaxlist");
var navbar = document.getElementById("navbar");
function scrollFunctionJatetxea() {
    if (getOffset(navbar).top >= getOffset(positionFilter).top) {
        $("#jaxlist").addClass('active');
        document.getElementById('buttonShop').classList.add("display");
    }
    if (window.scrollY >= 20) {
        document.getElementById("navbar").style.background = "#FFE48F";
    } else {
        $("#jaxlist").removeClass('active');
        document.getElementById('buttonShop').classList.remove("display");
        document.getElementById("navbar").style.background = "transparent";
    }
    changeActiveFilter();
}
var navToggleJatetxea = document.querySelector(".nav-toggle");
var navLinksJatetxea = document.querySelectorAll(".nav__link");

navToggleJatetxea.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
});

navLinksJatetxea.forEach((link) => {
    link.addEventListener("click", () => {
        document.body.classList.remove("nav-open");
    });
});
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

var contador = 0 //Items que hay en el carrito

//Crear filas de carrito con validacion por si el usuario es retrasado
function addCarrito(idprod, izena, price) {
    var kantitatea = 1
    var id = document.getElementById(idprod)
    var precioCarrito = parseInt($('#preciofinal').text())
    if (kantitatea == 0) {
        alert("Como vas a comprar nada de algo???")
    } else if (id) {
        alert("Ya has comprado eso ape??")
    } else {
        $("<a class='produktua' id=" + idprod + " href='#'>" + izena + "  <input id='" + idprod + "Kantitatea' class='kantitateaInput' type='number' min=0 value ='" + kantitatea + "' onkeyup='if(this.value<0){this.value= this.value * -1}'></input>  <span id='" + idprod + "Prezioa' class='precios'>" + price + "</span> &euro; <button id='" + idprod + "'btn class='deleteproduct' onclick=deleteRow('" + izena + "')>&#x2715;</button></a>").insertBefore(".divExtra");
        contador++
        $('#contador').text(contador)
        addProduct(idprod,izena, kantitatea, price)
        precioCarrito = precioCarrito + (price * kantitatea)
        $('#preciofinal').text(precioCarrito)
    }

}
//Lo mismo de arriba
function addCarritoLS(id, izena, kantitatea, price) {
    $("<a class='produktua' id=" + id + " href='#'>" + izena + "  <input id='" + id + "Kantitatea' class='kantitateaInput' type='number' min=0 value ='" + kantitatea + "' onkeyup='if(this.value<0){this.value= this.value * -1}'></input>  <span class='precios'>" + price + "</span> &euro; <button id='" + id + "'btn class='deleteproduct' onclick=deleteRow('" + id + "')>&#x2715;</button></a>").insertBefore(".divExtra");
}
//Borrar el div del carrito
function deleteRow(id) {
    contador--
    $('#contador').text(contador)
    $("#" + id).remove()
    removeProduct(id)
    var total = precioFinal()
    $('#preciofinal').text(total)
}
//Funcion para crear los productos del carrito desde el local storage
function allStorage() {
    $('.produktua').remove();
    contador = 0
    var guztira = 0
    let products = []
    products = JSON.parse(localStorage.getItem('products'));
    products.forEach(element => {
        contador++
        guztira = guztira + (element.kantitatea * element.price)
        addCarritoLS(element.id, element.izena, element.kantitatea, element.price)
    });
    $('#contador').text(contador)
    $('#preciofinal').text(guztira)
}
//Borrar el producto del local storage
function removeProduct(id) {
    let storageProducts = JSON.parse(localStorage.getItem('products'));
    let products = storageProducts.filter(product => product.id !== id);
    localStorage.setItem('products', JSON.stringify(products));
}
//Añadir lo necesario para el local storage
function addProduct(id, izena, kantitatea, price) {
    let products = [];
    if (localStorage.getItem('products')) {
        products = JSON.parse(localStorage.getItem('products'));
    }
    products.push({ 'id': id, 'izena': izena, 'kantitatea': kantitatea, 'price': price });
    localStorage.setItem('products', JSON.stringify(products));
}


//Desplegar el carrito
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
//Logica del carrito
$(function () {
    $(".totalCarrito").click(function () {
        var total = precioFinal()
        if ($(".kantitateaInput")[0]) {
            if ($('#cubiertos').prop('checked')) {
                total += 2
            }
            document.getElementById("preciofinal").innerHTML = total
            alert("Total a pagar: " + total)
            limpiarCarrito()
        } else {
            alert("No has comprado nada pedazo de mono")
            document.getElementById("preciofinal").innerHTML = 0
        }
    })

});
//calcular lo que indica
function precioFinal() {
    var totalCantidad = []
    var totalPrecios = []
    var total = 0
    $('.kantitateaInput').each(function () {
        totalCantidad.push(parseInt($(this).val()))
    })
    $('.precios').each(function () {
        totalPrecios.push(parseInt($(this).text()))
    })
    for (i = 0; i < totalCantidad.length; i++) {
        total += (totalCantidad[i] * totalPrecios[i])
    }
    return total
}
//Limpiamos el carrito
function limpiarCarrito() {
    contador = 0
    localStorage.clear();
    $(".produktua").remove()
    $('#contador').text(contador)
    $('#preciofinal').text(0)
    $('#cubiertos').prop('checked', false);
}