"use strict"
// This file is used for products.html.


// Standard format for every purchaseable element on the page. Notice that other formatting is used in items.js.
$(document).ready(() => {
    for (const i in productsAndServices) {
        $("#items").append(`
            <div class="productbox">
                <h2 id="title"> ${productsAndServices[i].title} </h2>
                <div class="productimagesalign">
                    <a class="lightboxconfig" href="${productsAndServices[i].highResImage}" data-lightbox="${productsAndServices[i].id}" data-title="${productsAndServices[i].title}"> <img height="256" width="384" src="${productsAndServices[i].productImage}" class="productimagesproperties"> </a>
                </div>
                    <p class="productinfop"> ${productsAndServices[i].description} <p class="priceinfo"> ${productsAndServices[i].price} </p></p>
                <div class="cartbuttonalign">
                    <input type="button" class="cartbuttonstyle" id="addItemCart${productsAndServices[i].id}" value="ADD TO CART">
                </div>
                <div class="dialogbox" id="dialog${productsAndServices[i].id}" title="Success!"> <p> Your ${productsAndServices[i].title} has now been added to your cart!</p> </div>
                </div>
            `);
    }
});