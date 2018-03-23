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

    if (result < 9 ) {
      $(".css").fadeIn();
    } else if (result >= 9 && result < 13 ) {
      $(".ruby").fadeIn();
    } else {
      $(".csharp").fadeIn();
    };

    $(".btnresult").click(function(){
      // used a reload method instead of getting button to hide results and re-show the form, couldn't get the results to show again on second quiz submit
    location.reload();

    });

    event.preventDefault();
  });




  });
