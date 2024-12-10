"use strict"

// Defining all possible cart products and services.
const cartItems = ["#addItemCart1", "#addItemCart2", "#addItemCart3", "#addItemCart4", "#addItemCart5", "#addItemCart6", "#addItemCart7", "#addItemCart8", "#addItemCart9", "#addItemCart10", "#addItemCart11", "#addItemCart12"];
const [item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12] = cartItems; 
// Log message to confirm the constants are working.
console.log("Defining add cart buttons complete:", item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12);

// Basic way of storing the product data.
$(document).ready( () => {
    $(item1).click( () => { // When said button is clicked, add the product to the database and create a jQuery UI dialog.
        localStorage.setItem("PRODUCT ID 1", "SurfaceLaptopGo3"); // Stores SINGULAR item in localstorage
        $("#dialog1").dialog(); // Set the dialog off to confirm user that its been added to the cart.
    });
    $(item2).click( () => { 
        localStorage.setItem("PRODUCT ID 2", "DellXPS13"); 
        $("#dialog2").dialog(); 
    });
    $(item3).click( () => { 
        localStorage.setItem("PRODUCT ID 3", "HPOmen"); 
        $("#dialog3").dialog(); 
    });
    $(item4).click( () => { 
        localStorage.setItem("PRODUCT ID 4", "ASUSD520MT"); 
        $("#dialog4").dialog(); 
    });
    $(item5).click( () => { 
        localStorage.setItem("PRODUCT ID 5", "DellOptiplex3010"); 
        $("#dialog5").dialog(); 
    });
    $(item6).click( () => { 
        localStorage.setItem("PRODUCT ID 6", "BUSINESSPCBUILDING"); 
        $("#dialog6").dialog(); 
    });
    $(item7).click( () => { 
        localStorage.setItem("PRODUCT ID 7", "HOMEPCBUILDING"); 
        $("#dialog7").dialog(); 
    });
    $(item8).click( () => { 
        localStorage.setItem("PRODUCT ID 8", "GAMINGPCBUILDING"); 
        $("#dialog8").dialog(); 
    });
    $(item9).click( () => { 
        localStorage.setItem("PRODUCT ID 9", "MAC&PCREPAIR"); 
        $("#dialog9").dialog(); 
    });
    $(item10).click( () => { 
        localStorage.setItem("PRODUCT ID 10", "MacbookPro"); 
        $("#dialog10").dialog(); 
    });
    $(item11).click( () => { 
        localStorage.setItem("PRODUCT ID 11", "iMac2017"); 
        $("#dialog11").dialog(); 
    });
    $(item12).click( () => { 
        localStorage.setItem("PRODUCT ID 12", "Xserve"); 
        $("#dialog12").dialog(); 
    });
});