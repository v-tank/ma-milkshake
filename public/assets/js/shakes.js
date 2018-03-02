$(function() {
  // Listener to update the gulped status of a shake
  $(".change-gulp").on("click", function(event){
    var id = $(this).attr("data-id"); // grabs the id of the button clicked
    var newGulp = $(this).attr("data-newgulp"); // updates the state with the new state

    // preps object to send to the update route
    var gulpedState = {
      gulped: newGulp
    };

    // AJAX call to update the state
    $.ajax("/milkshakes/" + id, {
      type: "PUT",
      data: gulpedState
    }).then(function() {
      console.log("Gulped down the shake! " + newGulp);
      location.reload(); // Reloads page to show the updated status of the shake
    });
  });

  // Listener to add shake to the list
  $("#add-milkshake").on("click", function(event) {
    event.preventDefault();
    
    var name = $("#name").val().trim();

    if ((name === "") || (name === null)) {
      console.log("Please enter a valid milkshake name.");
    } else {
      // Grabs the user-inputted name and creates an object to send to the POST route
      var newMilkshake = {
        name: name
      };
      console.log(newMilkshake);

      // AJAX call to add item to the database
      $.ajax("/milkshakes", {
        type: "POST",
        data: newMilkshake
      }).then(function(){
        console.log("Added to the database");
        location.reload(); // Reloads page to show the new shake on the list
      });
    }
  });
});