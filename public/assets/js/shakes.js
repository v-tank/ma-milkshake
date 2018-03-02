$(function() {
  $(".change-gulp").on("click", function(event){
    var id = $(this).attr("data-id");
    var newGulp = $(this).attr("data-newgulp");

    var gulpedState = {
      gulped: newGulp
    };

    $.ajax("/milkshakes/" + id, {
      type: "PUT",
      data: gulpedState
    }).then(function() {
      console.log("Gulped down the shake! " + newGulp);
      location.reload();
    });
  });

  $("#add-milkshake").on("click", function(event) {
    event.preventDefault();
    
    var newMilkshake = {
      name: $("#name").val().trim()
    };
    console.log(newMilkshake);

    $.ajax("/milkshakes", {
      type: "POST",
      data: newMilkshake
    }).then(function(){
      console.log("Added to the database");
      location.reload();
    })
  })
});