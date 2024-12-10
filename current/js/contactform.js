"use strict"

const addStates = (data) => {
    let select = $("#stateSelect");
    data.forEach(state => {
        select.append($("<option></option>")
            .attr("value", state.code)
            .text(state.name));
    });
}

$(document).ready ( () => {
    // Loading the states.json file 
    fetch("States.json")    
    .then(response => response.json())
    .then(data => addStates(data))
    .catch(e => console.log(e.message));

    // Defining all values in the form.
    $("#firstname").focus();
    $("#submitbutton").click((evt)=>{
        console.log("Submit button clicked.")
        // Setting constants and variables
        let isValid = true;
        // Not much validaiton needed
        const firstName = $("#firstname").val().trim();
        const lastName = $("#lastname").val().trim();
        const state = $("#stateSelect").find(":selected").val();
        // Phone number value and pattern
        const phoneNumberPattern = /^\d{3}-\d{3}-\d{4}$/;
        const phoneNumber = $("#phonenumber").val().trim();
        // Not much validation needed
        const issue = $("#issue").val().trim();
        // Debugging log
        console.log("Values for each field are" + " " + firstName + " " + lastName + " " + phoneNumber + " " + issue);
        // Validaiton condtions

        if (firstName == "" || firstName == null) {
            $("#firstname").next().text("* This field is required.");
            console.error("firstName is invalid.");
            isValid = false;
        } else {
            $("#firstname").next().text("*");
        }
        $("#firstname").val(firstName);

        if (lastName == "" || lastName == null) {
            $("#lastname").next().text("* This field is required.");
            console.error("lastName is invalid.");
            isValid = false;
        } else {
            $("#lastname").next().text("*");
        }
        $("#lastname").val(lastName);

        if (state == "" || state == null) {
            $("#stateerror").text("* This field is required.");
            console.error("state is invalid.");
            isValid = false;
        } else {
            $("#stateerror").text("*");
        }
        $("#stateSelect").val(state);

        if (phoneNumber == "") {
            $("#phonenumber").next().text("* This field is required.");
            console.error("phoneNumber is invalid.");
            isValid = false;
        } else if (!phoneNumberPattern.test(phoneNumber)) {
            $("#phonenumber").next().text("* The format for the phone number has been enter incorrectly (000-000-0000)");
            console.error("phoneNumber formatting is invalid.");
            isValid = false;
        } else {
            $("#phoneNumber").next().text("*");
        }
        $("#phonenumber").val(phoneNumber);

        if (issue == "" || issue == null) {
            $("#issue").next().text("* This field is required.");
            console.error("issue is invalid.");
            isValid = false;
        } else {
            $("#issue").next().text("*");
        }
        $("#issue").val(issue);
        
        if (isValid == false) {
            evt.preventDefault();
            console.error("ERROR: Inputs invalid can not be completed!")
        } else {
            evt.preventDefault();
            $("#dialogc1").dialog({
                autoOpen: false
            });
            $("#dialogc1").dialog('open');
            // Clearing all of the boxes after form has been submitted.
            $("#firstname").val("");
            $("#lastname").val("");
            $("#stateSelect").val("");
            $("#phonenumber").val("");
            $("#issue").val("");
            // Restoring focus to first name element again
            $("#firstname").focus();
        }

    });
})