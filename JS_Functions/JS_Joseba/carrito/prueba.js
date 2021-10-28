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

var contador = 0

function addCarrito(izena, qty_id, price_id) {
  var kantitatea = document.getElementById(qty_id).value
  var price = parseInt(document.getElementById(price_id).innerHTML)
  var id = document.getElementById(izena)



  if (kantitatea == 0) {
    alert("Como vas a comprar nada de algo???")
  } else if (id) {
    alert("Ya has comprado eso ape??")
  } else {
    $("<a class='produktua' id=" + izena + " href='#'>" + izena + "  <input id='" + izena + "Kantitatea' class='kantitateaInput' type='number' min=0 value ='" + kantitatea + "' onkeyup='if(this.value<0){this.value= this.value * -1}'></input>  <span class='precios'>" + price + "</span> &euro; <button id='" + izena + "'btn class='deleteproduct' onclick=deleteRow('" + izena + "')>&#x2715;</button></a>").insertBefore(".divExtra");
    contador++
    $('#contador').text(contador)
  }

}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

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
    } else {
      alert("No has comprado nada pedazo de mono")
      document.getElementById("preciofinal").innerHTML = 0
    }
  })
});

function deleteRow(a) {
  contador--
  $("#" + a).remove()
  $('#contador').text(contador)
}