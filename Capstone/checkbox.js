function calculate() {
var el, i = 0;
var total = 0;
var quantity = 0;
while(el = document.getElementsByName("chk")[i++]) {
if(el.checked) { 
  total= total + Number(el.value);}
}
//alert(total);
var div = document.getElementById('divid');
div.innerHTML = "Total : " +total ;

document.getElementById('price').value = total;
}