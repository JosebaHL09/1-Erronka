window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (window.scrollY >= 50) {

        document.getElementById("navbar").style.background = "#FFE48F";
        document.getElementById("nav__link").style.color = "#111111";
        document.getElementById("nav__link1").style.color = "#111111";
        document.getElementById("nav__link2").style.color = "#111111";
        document.getElementById("buttonShop").style.color = "#2F2E41";
        document.getElementById("buttonShop").style.border = "none";
        document.getElementById("buttonShop").style.background = "#FFDA7E url('/static/images/AppIcons/icosShoppingBlack.png') no-repeat 10% center";
        document.getElementById("erabil").style.background = "url('/static/images/AppIcons/LoginIcons/Gris/icoLogin.png') no-repeat center";
        document.getElementById("erabil").style.backgroundSize = "cover";


    } else {
        document.getElementById("navbar").style.background = "transparent";
        document.getElementById("nav__link").style.color = "#C4C6C7";
        document.getElementById("nav__link1").style.color = "#C4C6C7";
        document.getElementById("nav__link2").style.color = "#C4C6C7";

        document.getElementById("buttonShop").style.color = "#fff";
        document.getElementById("buttonShop").style.border = "1px solid white";
        document.getElementById("buttonShop").style.background = "#151314 url('/static/images/AppIcons/icosShopping.png') no-repeat 10% center";
        document.getElementById("erabil").style.background = "url('/static/images/AppIcons/LoginIcons/Amarillo/icoLogin.png') no-repeat center";
        document.getElementById("erabil").style.backgroundSize = "cover";
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

$(".erabil").click(function (event) {
    $(".datosErabil").toggle();
})
$(function () {

    $('#nombre').on('focus', function () {
        $('#name').css("background", "url(/static/images/AppIcons/LoginIcons/Amarillo/icoName.png) no-repeat")
            .css("background-size", "95%");
        $('#nombre').css("border-color", "#f5a111")
    }), $('#nombre').on('focusout', function () {
        $('#name').css("background", "url(/static/images/AppIcons/LoginIcons/Gris/icoName.png) no-repeat")
            .css("background-size", "95%")
        $('#nombre').css("border-color", "grey")
    })

});
$(function () {
    $('#apellido').on('focus', function () {
        $('#lastname').css("background", "url(/static/images/AppIcons/LoginIcons/Amarillo/icoLastname.png) no-repeat")
            .css("background-size", "95%")
        $('#apellido').css("border-color", "#f5a111")
    }), $('#apellido').on('focusout', function () {
        $('#lastname').css("background", "url(/static/images/AppIcons/LoginIcons/Gris/icoLastname.png) no-repeat")
            .css("background-size", "95%")
        $('#apellido').css("border-color", "grey")
    })

});
$(function () {
    $('#pasahitza').on('focus', function () {
        $('#pass1').css("background", "url(/static/images/AppIcons/LoginIcons/Amarillo/icoPassword.png) no-repeat")
            .css("background-size", "95%")
        $('#pasahitza').css("border-color", "#f5a111")
    }), $('#pasahitza').on('focusout', function () {
        $('#pass1').css("background", "url(/static/images/AppIcons/LoginIcons/Gris/icoPassword.png) no-repeat")
            .css("background-size", "95%")
        $('#pasahitza').css("border-color", "grey")
    })

});
$(function () {
    $('#cont2').on('focus', function () {
        $('#pass2').css("background", "url(/static/images/AppIcons/LoginIcons/Amarillo/icoPasswordRepeat.png) no-repeat")
            .css("background-size", "95%");
        $('#cont2').css("border-color", "#f5a111")
    }), $('#cont2').on('focusout', function () {
        $('#pass2').css("background", "url(/static/images/AppIcons/LoginIcons/Gris/icoPasswordRepeat.png) no-repeat")
            .css("background-size", "95%")
        $('#cont2').css("border-color", "grey")
    })
});
$(function () {
    $('#mail').on('focus', function () {
        $('#email').css("background", "url(/static/images/AppIcons/LoginIcons/Amarillo/icoMail.png) no-repeat")
            .css("background-size", "95%")
        $('#mail').css("border-color", "#f5a111")
    }), $('#mail').on('focusout', function () {
        $('#email').css("background", "url(/static/images/AppIcons/LoginIcons/Gris/icoMail.png) no-repeat")
            .css("background-size", "95%")
        $('#mail').css("border-color", "grey")
    })
});
$(function () {
    $('#erabiltzailea').on('focus', function () {
        $('#user').css("background", "url(/static/images/AppIcons/LoginIcons/Amarillo/icoUser.png) no-repeat")
            .css("background-size", "95%")
        $('#erabiltzailea').css("border-color", "#f5a111")
    }), $('#erabiltzailea').on('focusout', function () {
        $('#user').css("background", "url(/static/images/AppIcons/LoginIcons/Gris/icoUser.png) no-repeat")
            .css("background-size", "95%")
        $('#erabiltzailea').css("border-color", "grey")
    })
});
$(function () {
    $('#userLogin').on('focus', function () {
        $('#userImg').css("background", "url(/static/images/AppIcons/LoginIcons/Amarillo/icoUser.png) no-repeat")
            .css("background-size", "95%")
        $('#userLogin').css("border-color", "#f5a111")
    }), $('#userLogin').on('focusout', function () {
        $('#userImg').css("background", "url(/static/images/AppIcons/LoginIcons/Gris/icoUser.png) no-repeat")
            .css("background-size", "95%")
        $('#userLogin').css("border-color", "grey")
    })
});
$(function () {
    $('#pasLogin').on('focus', function () {
        $('#passImg').css("background", "url(/static/images/AppIcons/LoginIcons/Amarillo/icoUser.png) no-repeat")
            .css("background-size", "95%")
        $('#pasLogin').css("border-color", "#f5a111")
    }), $('#pasLogin').on('focusout', function () {
        $('#passImg').css("background", "url(/static/images/AppIcons/LoginIcons/Gris/icoUser.png) no-repeat")
            .css("background-size", "95%")
        $('#pasLogin').css("border-color", "grey")
    })
});


$(".showPass").hover(function () {
    if ($(".contra").attr('type') === 'password') {
        $(".contra").attr('type', 'text');
    } else if ($(".contra").attr('type') === 'text') {
        $(".contra").attr('type', 'password');


    }
})

$("#nav__link3").click(function (event) {
    $(".popRegister").show();
})
$("#closeRegister").click(function (event) {
    $(".popRegister").fadeOut();
});
$(document).ready(function () {
    $(".btn").prop("disabled", true);
    var nombre = false;
    var apellido = false;
    var pas1 = false;
    var pas2 = false;
    var email = false;
    var usuario = false;
    $('#nombre').on('input', function () {
        var input = $(this);
        var re = /^([A-Z][a-z]*((\s[A-Za-z])?[a-z]*)*)$/;
        var is_name = re.test(input.val());
        if (is_name) { input.removeClass("invalid").addClass("valid"); nombre = true; }
        else { input.removeClass("valid").addClass("invalid"); nombre = false; }
    });
    $('#apellido').on('input', function () {
        var input = $(this);
        var re = /^([A-Z][a-z]*((\s[A-Za-z])?[a-z]*)*)$/;
        var is_name = re.test(input.val());
        if (is_name) { input.removeClass("invalid").addClass("valid"); apellido = true; }
        else { input.removeClass("valid").addClass("invalid"); apellido = false; }
    });
    $('#pasahitza').on('input', function () {
        var input = $(this);
        var re = /^(?=.*[a-z])[A-Za-z0-9\d=!\-@._*]+$/;
        var is_name = re.test(input.val());
        if (is_name) { input.removeClass("invalid").addClass("valid"); pas1 = true; document.getElementById("errorPasskonplexua").style.display = 'none' }
        else { input.removeClass("valid").addClass("invalid"); pas1 = false; document.getElementById("errorPasskonplexua").style.display = 'flex' }
    });
    $('#cont2').on('input', function () {
        var input = $(this);
        var re = /^(?=.*[a-z])[A-Za-z0-9\d=!\-@._*]+$/;
        var is_name = re.test(input.val());
        if (is_name) { input.removeClass("invalid").addClass("valid"); pas2 = true; }
        else { input.removeClass("valid").addClass("invalid"); pas2 = false; }
    });
    $('#cont2').on('input', function () {
        var input = $(this);
        if ($('#pasahitza').val() == $('#cont2').val()) {
            input.removeClass("invalid").addClass("valid");
            document.getElementById("errorPassSame").style.display = 'none';
        } else {
            input.removeClass("valid").addClass("invalid");
            document.getElementById("errorPassSame").style.display = 'flex';
        }
    });

    $('#mail').on('input', function () {
        var input = $(this);
        var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var is_email = re.test(input.val());
        if (is_email) { input.removeClass("invalid").addClass("valid"); email = true; }
        else { input.removeClass("valid").addClass("invalid"); email = false; }
    });

    $('#erabiltzailea').on('input', function () {
        var input = $(this);
        var re = /^([A-Z][a-z]*((\s[A-Za-z])?[a-z]*)*)$/;
        var is_email = re.test(input.val());
        if (is_email) { input.removeClass("invalid").addClass("valid"); usuario = true; }
        else { input.removeClass("valid").addClass("invalid"); usuario = false; }

    });

    $("input").on('input', function () {
        if (nombre && apellido && pas1 && pas2 && email && usuario) {
            $(".btn").prop("disabled", false);
        } else {
            $(".btn").prop("disabled", true);
        }
    })
    allStorage()

});
$("#buttonShop").click(function (event) {
    $("#myDropdown").toggle();
})


$("#loginBtn").click(function (event) {
    $("#popLogin").fadeIn();
})

$(document).mouseup(function (e) {
    var container = $("#popLogin");
    var containerShop = $("#myDropdown");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.fadeOut();
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
        moreQty(idprod)
    } else {
        $("<a class='produktua' id=" + idprod + " href='#'><div>  <input id='" + idprod + "Kantitatea' class='kantitateaInput' type='number' min=0 value ='" + kantitatea + "' ></input></div><div class='produkizena'>" + izena + "</div><div class='precio'><span id='" + idprod + "Prezioa' class='precios'>" + price + "</span>&euro;</div> <button id='" + idprod + "'btn class='deleteproduct' onclick=deleteRow('" + idprod + "')>&#x2715;</button></a>").insertBefore(".divExtra");
        contador++
        $('#contador').text(contador)
        addProduct(idprod, izena, kantitatea, price)
        precioCarrito = precioCarrito + (price * kantitatea)
        $('#preciofinal').text(precioCarrito)
    }

}
//Lo mismo de arriba
function addCarritoLS(id, izena, kantitatea, price) {
    $("<a class='produktua' id=" + id + " href='#'><div>  <input id='" + id + "Kantitatea' class='kantitateaInput' type='number' min=0 value ='" + kantitatea + "' ></input></div><div class='produkizena'>" + izena + "</div><div class='precio'><span id='" + id + "Prezioa' class='precios'>" + price + "</span>&euro;</div> <button id='" + id + "'btn class='deleteproduct' onclick=deleteRow('" + id + "')>&#x2715;</button></a>").insertBefore(".divExtra");
}
//Borrar el div del carrito
function deleteRow(id) {
    contador--
    $('#contador').text(contador)
    $("#" + id).remove()
    removeProduct(id)
    var total = precioFinal()
    $('#preciofinal').text(parseFloat(total).toFixed(1))
}
//Funcion para crear los productos del carrito desde el local storage
function allStorage() {
    $('.produktua').remove();
    contador = 0
    var guztira = 0
    let products = []
    products = JSON.parse(localStorage.getItem('products'));
    if (products) {
        products.forEach(element => {
            contador++
            guztira = guztira + (element.kantitatea * element.price)
            addCarritoLS(element.id, element.izena, element.kantitatea, element.price)
        });
        $('#contador').text(contador)
        $('#preciofinal').text(guztira)
    }
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
    var total
    $(".totalCarrito").click(function () {
        total = precioFinal()
        if ($(".kantitateaInput")[0]) {
            document.getElementById("preciofinal").innerHTML = total
            alert("Total a pagar: " + total)
            limpiarCarrito()
        } else {
            $('#cubiertos').prop('checked', false);
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
        totalPrecios.push($(this).text())
    })
    for (i = 0; i < totalCantidad.length; i++) {
        total += (totalCantidad[i] * totalPrecios[i])
    }
    return total
}
//Limpiamos el carrito
$('#logout').click(function () {
    localStorage.clear();
});
$(document).on('click', '#cubiertos', function () {
    total = parseFloat($('#preciofinal').text())
    if (this.checked) {
        total += 2
    } else if (total != 0) {
        total -= 2
    }
    document.getElementById("preciofinal").innerHTML = total
})
function moreQty(id) {
    kant = parseInt($('#' + id + "Kantitatea").val())
    var products = JSON.parse(localStorage.products);
    for (var i = 0; i < products.length; i++) {
        if (id === products[i].id) {
            products[i].kantitatea += 1;
            kant+=1
            document.getElementById(id + "Kantitatea").value = kant
            break;
        }
    }
    localStorage.setItem("products", JSON.stringify(products))
    
}
$(document).on('input', '.kantitateaInput', function () {
    id = parseInt(this.id)
    if (this.value < 0) {
        this.value = this.value * -1
    }
    total = precioFinal()
    if (isNaN(total)) {
        this.value = 0
        total = 0
    }
    document.getElementById("preciofinal").innerHTML = total
    var products = JSON.parse(localStorage.products);
    for (var i = 0; i < products.length; i++) {
        if (id === parseInt(products[i].id)) {
            products[i].kantitatea = parseInt(this.value);
            break;
        }
    }
    localStorage.setItem("products", JSON.stringify(products))
});
function limpiarCarrito() {
    contador = 0
    localStorage.clear();
    $(".produktua").remove()
    $('#contador').text(contador)
    $('#preciofinal').text(0)

}

