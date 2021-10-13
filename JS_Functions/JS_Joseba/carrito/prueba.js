function sumar(qty_id,price_id,total_id) {
  var sum = parseInt(document.getElementById(qty_id).value) + 1
  document.getElementById(qty_id).value = sum
  total(qty_id,price_id,total_id)
}
function restar(qty_id,price_id,total_id) {
  var qty = document.getElementById(qty_id).value
  if (qty != 0) {
    document.getElementById(qty_id).value -= 1
    total(qty_id,price_id,total_id)
  }
}

function total(qty_id,price_id,total_id) {
  var x = document.getElementById(qty_id).value
  var y = document.getElementById(price_id).innerHTML
  var total = x * y
  document.getElementById(total_id).innerHTML = total+"€"
}

