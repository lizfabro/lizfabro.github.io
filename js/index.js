$(document).ready(function(){
//alert("testing");

// Prevent page reload after submission 
$("input[type=submit]").click(function(){
  event.preventDefault();
  //alert("test!");

    // Get the value of calendar submission
    var caldate = $("#calendar-date").val();
    console.log(caldate);
    // Upon submission...
  
    // Change to 63D1F4 background and add sun if Jan 1 is selected
    if (caldate === "2019-01-01"){
        $(".aside").css("background-color","#63D1F4");
        $(".sun").show();
        $("#mood-line").hide();
        $("#mood").text("active & productive");
  
    // Change to 8DB6CD background and add cloud img if Jan 2 is selected
    } else if (caldate === "2019-01-02"){
      $(".aside").css("background-color","#8DB6CD");
      $(".cloud").show();
      $("#mood-line, .sun, .rain, .flowers").hide();
      $("#mood").text("stressed & anxious");
  
    // Change to 778899 background and add rain img if Jan 3 is selected
    } else if (caldate === "2019-01-03"){
      $(".aside").css("background-color","#778899");
      $(".cloud, .cloud2").show();
      $('.rain').slideDown();
      $("#mood-line, .sun, .flowers").hide();
      $("#mood").text("defeated & exhausted");
  
    // Change to 00BFFF background and add cloud + sun imgs if Jan 4 is selected
    } else if (caldate === "2019-01-04"){
      $(".aside").css("background-color","#00BFFF");
      $(".sun").show();
      $(".flowers").slideDown();
      $("#mood-line, .rain, .cloud, .cloud2").hide();
      $("#mood").text("happy & inspired")
  
    // Change to 63D1F4 background if Jan 5 is selected
    } else if (caldate === "2019-01-05"){
      $(".aside").css("background-color","#63D1F4");
      $("#mood-line, .rain, .cloud, .cloud2, .flowers, .sun").hide();
      $("#mood").text("neutral");
  
    // Change to white background if none selected
    } else {
      $(".aside").css("background-color","#fff");
    }
  });

});