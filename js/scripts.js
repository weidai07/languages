$(document).ready(function() {
  $("form#languages").submit(function(event) {
    event.preventDefault();
    var ruby1 = $("#questions option:selected").val();
    var cs1 = $("#questions option:selected").val();
    var python1 = $("#questions option:selected").val();
    var js1 = $("#questions option:selected").val();
    var all1 = $("#questions option:selected").val();

    if ("#questions") {
      $(".warning").show();
    }
    else if (ruby1==='yes') {
      $(".r1").show();
    }
    else if(cs1==='yes') {
      $(".c1").show();
    }
    else if(python1==='yes') {
      $(".p1").show();
    }
    else if(js1==='yes') {
      $(".j1").show();
    }
    else if(ruby1,cs1,python1,js1==='yes') {
      $(".a1").show();
    }
  });
});
