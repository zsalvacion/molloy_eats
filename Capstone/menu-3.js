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


$(document).ready(function() {

function calculateSum(){
 var sumTotal=0;
    $('table tbody tr').each(function() {
      var $tr = $(this);

      if ($tr.find('input[type="checkbox"]').is(':checked')) {
          
        var $columns = $tr.find('td').next('td').next('td');
         
         var $Qnty=parseInt($tr.find('input[type="text"]').val());
 var $Cost=parseFloat($columns.next('td').html().split('$')[1]);
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