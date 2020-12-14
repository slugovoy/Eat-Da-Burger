// Make sure we wait to attach our handlers until the DOM is fully loaded.
  $(function(){

    $(".delete").on("click", function (event) {
// Make sure to preventDefault on a submit event.
      event.preventDefault();

      const id  = $(this).data("id");

  
      // Send the DELETE request.
      $.ajax( {
        url: "/api/delete-burgers/" + id,
        method: "DELETE",
      }).then(function () {
        console.log("Burger Deleted!");
        // Reload the page to get the updated list
        location.reload();
      });
    });

  $(".devour").on("click", function (event) {
// Make sure to preventDefault on a submit event.
    event.preventDefault();

    let id = $(this).data("id");

    // Send the PUT request.
    $.ajax( {
      url: "/api/eat-burgers/" + id,
      method: "PUT",
    }).then(function () {
      console.log("Somebody ate your burger!");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    let  burger  = {
      burger_name: $("#burg").val().trim(),
    };
    console.log(burger);

    // Send the POST request.
    $.ajax({
      url: "/api/add-burgers",
      method: "POST",
      data: burger,
    }).then(function () {
      console.log("Burger Added!");
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
