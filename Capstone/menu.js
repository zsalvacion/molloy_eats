window.onload=function(){
var inputs = document.getElementsByClassName('sum'),
    total  = document.getElementById('payment-total');

 for (var i=0; i < inputs.length; i++) {
    inputs[i].onchange = function() {
        var add = this.value * (this.checked ? 1 : -1);
        total.innerHTML = parseFloat(total.innerHTML) + add
        var new_total = parseFloat(document.getElementById('input').value);
      console.log(new_total);
        document.getElementById('input').value=new_total + add
    }
  }
}

/* move styles to css */
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "205px";
    document.getElementById("main").style.marginLeft = "205px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

/* add event listener. move style to css. query select all. array. reduce */

/*
$(document).ready(function() {
  'use strict';
  var currentItem;
  var currentItemPrice;
  var orderArray = [];
  var orderObject = {};
  var quanItem;
  var orderItem = {};
  var itemTotal;

  $.ajax({
    url: 'https://galvanize-eats-api.herokuapp.com/menu',
    method: 'GET',
    success: function(data) {
      var menu = data.menu;

      menu.forEach(function(data) {
        var $element = $('<p data-price="' + data.price + '">' + data.name + '</p>');

        $('.menuDownload').append($element.text(data.name));
      });

      function menuClick(event) {
        currentItem = $(event.target).html();
        currentItemPrice = $(event.target).data('price');
        $('.menuDownload').removeClass('highlightitem');
        $('p').removeClass('highlightitem');
        $(event.target).addClass('highlightitem');
        $('.menuDownload').removeClass('highlightitem');
      }
      $('.menuDownload').on('click', menuClick);

      function addToOrder(event) {
        event.preventDefault();
        quanItem = $('#quantity')[0].value;
        itemTotal = currentItemPrice * quanItem;
        orderItem = {
          name: currentItem,
          quantity: quanItem,
          price: currentItemPrice,
          fullPrice: itemTotal
        };
        orderArray.push(orderItem);
        var ul = document.getElementById('list');
        var li = document.createElement('li');

        li.appendChild(document.createTextNode(currentItem + ' (' + quanItem + ')'));
        ul.appendChild(li);
        $('p').removeClass('highlightitem');
        $('#quantity')[0].value = 1;
      }
      $('.orderButton').on('click', addToOrder);
      function deliverIt(event) {
        event.preventDefault();
        var person = {
          name: $('#name')[0].value,
          emailAddress: $('#inputEmail')[0].value,
          address: $('#address')[0].value,
          phoneNumber: $('#phoneNumber')[0].value
        };
        orderObject = {
          deliverTo: person,
          food: orderArray
        };
        $.ajax({
          method: 'POST',
          url: 'https://galvanize-eats-api.herokuapp.com/orders',
          data: { order: orderObject },
        })
          .done(function(msg) {
            alert('Data Saved:' + msg);
          });
      }
      $('#deliverItButton').on('click', deliverIt);
    }
  });
});
*/

$(document).ready(function() {

function calculateSum(){
 var sumTotal=0;
    $('table tbody tr').each(function() {
      var $tr = $(this);

      if ($tr.find('input[type="checkbox"]').is(':checked')) {
          
        var $columns = $tr.find('td').next('td').next('td');
         
         var $Qnty=parseInt($tr.find('input[type="text"]').val());
 var $Cost=parseInt($columns.next('td').html().split('$')[1]);
         sumTotal+=$Qnty*$Cost;
      }
    });

       $("#price").val(sumTotal);
       
}

  $('#sum').on('click', function() {
     
    calculateSum();
  });

  $("input[type='text']").keyup(function() {
     calculateSum();

  });
  
   $("input[type='checkbox']").change(function() {
     calculateSum();

  });



});