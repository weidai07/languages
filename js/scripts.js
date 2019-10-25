$(document).ready(function() {
  $("form.languages").submit(function(event) {
    event.preventDefault();
    var ruby1 = $("#ruby option:selected").val();
    var cs1 = $("#cs option:selected").val();
    var python1 = $("#python option:selected").val();
    var js1 = $("#js option:selected").val();
    var all1 = $("#all option:selected").val();

    if (".questions") {

    }
    else {
      $(".warning").show();
    }
  });
});
