"use strict"
// This file is used for products.html.

const addToCart = (itemId) => {
    // Get the Cart
    let pendingOrder = [];
    let cartStorage = localStorage.getItem("shoppingCart"); 
    if (cartStorage !== null && cartStorage !== undefined && cartStorage !== "") {
        pendingOrder = JSON.parse(cartStorage)
    }
    pendingOrder.orderLines.push(new orderLine(`${productsAndServices[itemId].id}`,`${productsAndServices[itemId].productImage}`,`${productsAndServices[itemId].title}`,1,`${productsAndServices[itemId].intPrice}`));
    $(`#dialog${itemId}`).dialog();
    localStorage.shoppingCart = JSON.stringify(pendingOrder);
}

// Standard format for every purchaseable element on the page. Notice that other formatting is used in items.js.
$(document).ready(() => {
    let order = new Order([]);
    localStorage.setItem("shoppingCart", JSON.stringify(order));
    for (const i in productsAndServices) {
        $("#items").append(`
            <div class="productbox">
                <h2 id="title"> ${productsAndServices[i].title} </h2>
                <div class="productimagesalign">
                    <a class="lightboxconfig" href="${productsAndServices[i].highResImage}" data-lightbox="${productsAndServices[i].id}" data-title="${productsAndServices[i].title}"> <img height="256" width="384" src="${productsAndServices[i].productImage}" class="productimagesproperties"> </a>
                </div>
                    <p class="productinfop"> ${productsAndServices[i].description} <p class="priceinfo"> ${productsAndServices[i].price} </p></p>
                <div class="cartbuttonalign">
                    <input type="button" class="ui-button ui-widget ui-corner-all" onclick="addToCart(${productsAndServices[i].id});" id="addItemCart${productsAndServices[i].id}" value="ADD TO CART">
                </div>
                <div class="dialogbox" id="dialog${productsAndServices[i].id}" title="Success!"> <p> Your ${productsAndServices[i].title} has now been added to your cart!</p> </div>
                </div>
            `);
    }
});