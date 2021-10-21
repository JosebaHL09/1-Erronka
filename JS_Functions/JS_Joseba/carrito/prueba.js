function sumar(qty_id, price_id, total_id, izena) {
  var sum = parseInt(document.getElementById(qty_id).value) + 1
  document.getElementById(qty_id).value = sum
  total(qty_id, price_id, total_id)
  totalGlobalGehitu()
  if (document.getElementById(izena)) {
    document.getElementById(izena + "Kantitatea").innerHTML = sum
  }

}
function restar(qty_id, price_id, total_id, izena) {
  var qty = document.getElementById(qty_id).value
  if (qty != 0) {
    document.getElementById(qty_id).value -= 1
    var currentQty = document.getElementById(qty_id).value
    total(qty_id, price_id, total_id)
    restarGlobal(price_id)
    if (currentQty != 0) {
      if (document.getElementById(izena)) {
        document.getElementById(izena + "Kantitatea").innerHTML = currentQty
      }
    } else {
      $("#" + izena).remove()
    }

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

function addCarrito(izena, qty_id, price_id) {
  var kantitatea = document.getElementById(qty_id).value
  var price = parseInt(document.getElementById(price_id).innerHTML)
  var id = document.getElementById(izena)
  if (kantitatea == 0) {
    alert("Como vas a comprar nada de algo???")
  } else if (id) {
    alert("Ya has comprado eso ape??")
  } else {
    $("#myDropdown").append("<a id=" + izena + " href='#'>" + izena + " - X<span id=" + izena + 'Kantitatea' + ">" + kantitatea + "</span> - " + price + " &euro; </a>");
  }

}
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}