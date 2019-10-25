$(document).ready(function() {
  $("form#languages").submit(function(event) {
    event.preventDefault();
    var ruby1 = $("#ruby option:selected").val();
    var cs1 = $("#cs option:selected").val();
    var python1 = $("#python option:selected").val();
    var js1 = $("#js option:selected").val();
    var all1 = $("#all option:selected").val();
    // var q1 = $(".questions option:selected").val();

    if (ruby1==="yes"){
      $(".r1").show();
    }

    if (cs1==="yes"){
      $(".c1").show();
    }

    if (python1==="yes"){
      $(".p1").show();
    }

    if (js1==="yes"){
      $(".j1").show();
    }

    if (all1==="yes"){
      $(".a1").show();
    }

    // if (".questions"==="select"){
    //   $(".warning").show();
    // }

    if (ruby1==="no"){
      $(".r1").hide();
    }

    if (cs1==="no"){
      $(".c1").hide();
    }

    if (python1==="no"){
      $(".p1").hide();
    }

    if (js1==="no"){
      $(".j1").hide();
    }

    if (all1==="no"){
      $(".a1").hide();
    }

  });
});
