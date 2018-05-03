function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

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

