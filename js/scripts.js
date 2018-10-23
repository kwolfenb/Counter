

$(document).ready(function() {
    $("#formInfo").submit(function(event) {
        event.preventDefault();

      var numberOne = parseInt($("input#numberOneInput").val());
      var numberTwo = parseInt($("input#numberTwoInput").val());
      var numberThree = parseInt($("input#numberThreeInput").val());
      
      for (var number=numberThree; number <= numberOne; number += numberTwo) {
        console.log(number);

        $("#list").append("<li>" + number + "</li>");
      };


});

});
