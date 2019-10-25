$(document).ready(function() {
  $("form.languages").submit(function(event) {
    event.preventDefault();
    var ruby1 = $("#questions option:selected").val();
    var cs1 = $("#questions option:selected").val();
    var python1 = $("#questions option:selected").val();
    var js1 = $("#questions option:selected").val();
    var all1 = $("#questions option:selected").val();

    if ("#questions") {

    }
    else {
      $(".warning").show();
    }
  });
});
