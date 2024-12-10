"use strict"

$(document).ready( () => {
    let orderLines = [];

    $("#loadcartbutton").click( () => {
        localStorage.removeItem("shoppingCart");
        orderLines.push(new orderLine(1, "imgs/thumb/Surface.jpg", "Surface", 1, 799.99));
        let order = new Order(orderLines);
        const jsonString = JSON.stringify(order);
        localStorage.shoppingCart = jsonString;
    })
})