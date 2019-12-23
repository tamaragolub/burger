
$(function() {
console.log("Hi");

    $(".submit-btn").on("click", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $(".burger_name").val().trim()
        }
        console.log(newBurger);

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created a new burger");
                location.reload();
            }
        )
    })

    $(".delete-btn").on("click", function(event){
        event.preventDefault();

        var burgerID = $(this).attr("data-id");

        console.log(burgerID);

        $.ajax("/api/burgers", {
            type: "PUT",
            data: {burgerID}
        }).then(
            function() {
                console.log("ate the burger");
                location.reload();
            }
        )

    })


})