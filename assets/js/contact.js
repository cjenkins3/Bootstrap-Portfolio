$(document).ready(function() {
    $("button").on("click", function() {
        event.preventDefault();
        console.log("button");

        if (document.getElementById("name").value == "") {
            alert("Please enter your first name");
            return false;
            }
            if (document.getElementById("email").value == "") {
                alert("Please enter your last name");
                return false;
                }
        
        alert("Your contact form has been submitted sucessfully.");

    //clears all text boxes
    $("#name").val("");
    $("#email").val("");
    $("#text").val("");
    
    })
});

