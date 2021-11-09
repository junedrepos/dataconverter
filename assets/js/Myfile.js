window.onload = function() {
                var mainInput = document.getElementById("eng");
                mainInput.nepaliDatePicker({
                    dateFormat: "DD-MM-YYYY"
                });
            };
$("#btn1").on("click",function(){
var date = NepaliFunctions.ConvertToDateObject($("#eng").val(), "DD-MM-YYYY")
    var nepDate =  NepaliFunctions.BS2AD(date)
   var val= NepaliFunctions.ConvertDateFormat(nepDate, "DD-MM-YYYY")
        $("#op1").val(val)
             })

$("#btn2").on("click",function(){
var date = NepaliFunctions.ConvertToDateObject($("#nep").val(), "DD-MM-YYYY")
    var nepDate =  NepaliFunctions.AD2BS(date)
   var val= NepaliFunctions.ConvertDateFormat(nepDate, "DD-MM-YYYY")
        $("#op2").val(val)
             })
$( document ).ready(function() { 
    $("#nepDate").val(NepaliFunctions.ConvertDateFormat(NepaliFunctions.GetCurrentBsDate(), "DD-MM-YYYY"))
    $("#engDate").val(NepaliFunctions.ConvertDateFormat(NepaliFunctions.GetCurrentAdDate(), "DD-MM-YYYY"))
    
  
});

