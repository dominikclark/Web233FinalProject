"use strict"
// This file is used for products.html.


// Defining all possible cart products and services.
const cartItems = ["#addItemCart1", "#addItemCart2", "#addItemCart3", "#addItemCart4", "#addItemCart5", "#addItemCart6", "#addItemCart7", "#addItemCart8", "#addItemCart9", "#addItemCart10", "#addItemCart11", "#addItemCart12"];
const [item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12] = cartItems; 
// Log message to confirm the constants are working.
console.log("Defining add cart buttons complete:", item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12);
// An array to make coding the cart 1000 times easier.
let shoppingCart = []; 
// Basic way of storing the product data.
$(document).ready( () => {
    $(item1).click( () => { // When said button is clicked, add the product to the database and create a jQuery UI dialog.
        shoppingCart.push("SurfaceLaptopGo3")
        localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
        $("#dialog1").dialog(); // Set the dialog off to confirm user that its been added to the cart.
    });
    $(item2).click( () => {
        shoppingCart.push("DellXPS13")
        localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart)); 
        $("#dialog2").dialog(); 
    });
    $(item3).click( () => { 
        shoppingCart.push("HPOmen")
        localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
        $("#dialog3").dialog(); 
    });
    $(item4).click( () => { 
        shoppingCart.push("ASUSD520MT")
        localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
        $("#dialog4").dialog(); 
    });
    $(item5).click( () => { 
        shoppingCart.push("DellOptiplex3010")
        localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
        $("#dialog5").dialog(); 
    });
    $(item6).click( () => { 
        shoppingCart.push("BUSINESSPCBUILDING")
        localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
        $("#dialog6").dialog(); 
    });
    $(item7).click( () => { 
        shoppingCart.push("HOMEPCBUILDING")
        localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
        $("#dialog7").dialog(); 
    });
    $(item8).click( () => { 
        shoppingCart.push("GAMINGPCBUILDING")
        localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
        $("#dialog8").dialog(); 
    });
    $(item9).click( () => { 
        shoppingCart.push("MAC&PCREPAIR")
        localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
        $("#dialog9").dialog(); 
    });
    $(item10).click( () => { 
        shoppingCart.push("MacbookPro")
        localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
        $("#dialog10").dialog(); 
    });
    $(item11).click( () => { 
        shoppingCart.push("iMac2017")
        localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
        $("#dialog11").dialog(); 
    });
    $(item12).click( () => { 
        shoppingCart.push("Xserve")
        localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
        $("#dialog12").dialog(); 
    });
});