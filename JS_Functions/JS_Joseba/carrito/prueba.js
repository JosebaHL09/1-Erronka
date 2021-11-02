function sumar(qty_id, price_id, total_id, izena) {
  var sum = parseInt(document.getElementById(qty_id).value) + 1
  document.getElementById(qty_id).value = sum
  total(qty_id, price_id, total_id)
  totalGlobalGehitu()
}
function restar(qty_id, price_id, total_id, izena) {
  var qty = document.getElementById(qty_id).value
  if (qty != 0) {
    document.getElementById(qty_id).value -= 1
    total(qty_id, price_id, total_id)
    restarGlobal(price_id)
  }
}
function total(qty_id, price_id, total_id) {
  var x = document.getElementById(qty_id).value
  var y = document.getElementById(price_id).innerHTML
  var total = x * y
  document.getElementById(total_id).innerHTML = total

}
function totalGlobalGehitu() {
  var totalGlobal = 0
  $('.total').each(function () {
    totalGlobal += parseInt($(this).text());
  })

  $('#total').html(totalGlobal);

}
function restarGlobal(price_id) {
  var price = parseInt(document.getElementById(price_id).innerHTML)
  var totalGlobal = parseInt(document.getElementById("total").innerHTML)
  var totalFinal = totalGlobal - price
  document.getElementById("total").innerHTML = totalFinal
}

/**
 * De aqui hacia abajo es lo que tenemos que importar.
 * Lo de arriba es simplemente una platilla para hacer funcionar el codigo importante.
 */


var contador = 0 //Items que hay en el carrito

//Crear filas de carrito con validacion por si el usuario es retrasado
function addCarrito(izena, qty_id, price_id) {
  var kantitatea = document.getElementById(qty_id).value
  var price = parseInt(document.getElementById(price_id).innerHTML)
  var id = document.getElementById(izena)
  var precioCarrito = parseInt($('#preciofinal').text())
  if (kantitatea == 0) {
    alert("Como vas a comprar nada de algo???")
  } else if (id) {
    alert("Ya has comprado eso ape??")
  } else {
    $("<a class='produktua' id=" + izena + " href='#'>" + izena + "  <input id='" + izena + "Kantitatea' class='kantitateaInput' type='number' min=0 value ='" + kantitatea + "' onkeyup='if(this.value<0){this.value= this.value * -1}'></input>  <span id='" + izena + "Prezioa' class='precios'>" + price + "</span> &euro; <button id='" + izena + "'btn class='deleteproduct' onclick=deleteRow('" + izena + "')>&#x2715;</button></a>").insertBefore(".divExtra");
    contador++
    $('#contador').text(contador)
    addProduct(izena, kantitatea, price)
    precioCarrito = precioCarrito + (price * kantitatea)
    $('#preciofinal').text(precioCarrito)
  }

}
//Lo mismo de arriba
function addCarritoLS(izena, kantitatea, price) {
  $("<a class='produktua' id=" + izena + " href='#'>" + izena + "  <input id='" + izena + "Kantitatea' class='kantitateaInput' type='number' min=0 value ='" + kantitatea + "' onkeyup='if(this.value<0){this.value= this.value * -1}'></input>  <span class='precios'>" + price + "</span> &euro; <button id='" + izena + "'btn class='deleteproduct' onclick=deleteRow('" + izena + "')>&#x2715;</button></a>").insertBefore(".divExtra");
}
//Borrar el div del carrito
function deleteRow(id) {
  contador--
  var kantitatea = $('#' + id + 'Kantitatea').val()
  var price = parseInt($('#' + id + 'Prezioa').text())
  var total = parseInt($('#preciofinal').text())
  $('#contador').text(contador)
  total -= (price * kantitatea)
  $('#preciofinal').text(total)
  $("#" + id).remove()
  removeProduct(id)
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
    addCarritoLS(element.id, element.kantitatea, element.price)
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
function addProduct(izena, kantitatea, price) {
  let products = [];
  if (localStorage.getItem('products')) {
    products = JSON.parse(localStorage.getItem('products'));
  }
  products.push({ 'id': izena, 'kantitatea': kantitatea, 'price': price.toString() });
  localStorage.setItem('products', JSON.stringify(products));
}
//Cargar el carrito con el local storage
$(document).ready(function () {
  allStorage()
});
//Desplegar el carrito
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
//Logica del carrito
$(function () {
  $(".totalCarrito").click(function () {
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

//Limpiamos el carrito
function limpiarCarrito() {
  contador = 0
  localStorage.clear();
  $(".produktua").remove()
  $('#contador').text(contador)
  $('#preciofinal').text(0)
  $('#cubiertos').prop('checked', false);
}



