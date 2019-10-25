$(document).ready(function() {
  $("form#languages").submit(function(event) {
    event.preventDefault();
    var ruby1 = $("#ruby option:selected").val();
    var cs1 = $("#cs option:selected").val();
    var python1 = $("#python option:selected").val();
    var js1 = $("#js option:selected").val();
    var all1 = $("#all option:selected").val();

    // if ("#questions") {
    //   $(".warning").show();
    // }
    // else if (ruby1==="yes") {
    //   $(".r1").show();
    // }
    // else if(cs1==='yes') {
    //   $(".c1").show();
    // }
    // else if(python1==='yes') {
    //   $(".p1").show();
    // }
    // else if(js1==='yes') {
    //   $(".j1").show();
    // }
    // else if(ruby1, cs1, python1, js1==='yes') {
    //   $(".a1").show();
    // }

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

    if (".questions"){
      $(".warning").show();
    }

  });
});
