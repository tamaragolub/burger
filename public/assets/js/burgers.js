
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


})