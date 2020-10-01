$(function () {
  $(".change-devoured").on("click", function (event) {
    let id = $(this).data("id");
    let newDevour = $(this).data("newdevoured");

    let newDevourState = {
      devoured: newDevour,
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState,
    }).then(function () {
      console.log("Mhmmmmmmm!!!! DELICIOUS", newDevour);
      location.reload();
    });
  });
  $(".form").on("submit", function (event) {
    event.preventDefault();

    let newBurger = {
      burger_name: $("#burgerName").val().trim(),
      devoured: false,
    };
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("Successfully created a new burger!");
      location.reload();
    });
  });
});
