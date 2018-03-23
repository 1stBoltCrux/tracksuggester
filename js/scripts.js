$(document).ready(function() {
  $("form").submit(function(event){
    $("#form1").hide();

    var question1 = parseInt($("input:radio[name=question1]:checked").val());
    var question2 = parseInt($("input:radio[name=question2]:checked").val());
    var question3 = parseInt($("input:radio[name=question3]:checked").val());
    var question4 = parseInt($("input:radio[name=question4]:checked").val());
    var question5 = parseInt($("input:radio[name=question5]:checked").val());
    var question6 = parseInt($("input:radio[name=question6]:checked").val());

    var result = question1 + question2 + question3 + question4 + question5 + question6;

    if (result <= 9 ) {
      $(".css").show();
    } else if (result >= 9 && result <= 13 ) {
      $(".php").show();
    } else {
      $(".csharp").show();
    };

    $(".btnresult").click(function(){
      $("#results").hide();
      $("#form1").show();
    });

    event.preventDefault();
  });




  });
