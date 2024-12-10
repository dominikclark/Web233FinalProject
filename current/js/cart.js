"use strict"

const getOrder = () => {
    let order = new Order([]);
    // Uses users entries on products page to now add to the shopping cart portion.
    let shoppingCart = localStorage.getItem("shoppingCart");
    if (shoppingCart !== null && shoppingCart !== undefined && shoppingCart !== "") {
        let tempOrder = JSON.parse(shoppingCart);
        order = new Order(tempOrder.orderLines);
    }
    return order;
};

const updateCart = () => {
    // gets the user order from storage
    let order = getOrder();
    // loop interates through all the lines
    let totalOrderLines = order.orderLines.length;
    let cartUpdated = false;
    for (let i = 0; i < totalOrderLines; i++) {
        let qty = $(`#qty_${i}`).val();
        let id = $(`#id_${i}`).val();
        console.log("i = " + i + ", qty = " + qty + ", id = " + id)
        if (order.updateOrderLine(id, qty)) {
            cartUpdated = true;
        }
    }
    if (cartUpdated) {
        order.removeOrderLines();
        localStorage.setItem("shoppingCart", JSON.stringify(order));
        updateCartSummary(order);
        updateCartOrderLines(order);
    }
    
};
const updateCartSummary = (order) => {
    let orderSubTotal = order.subTotal.toFixed(2);
    let salesTax = order.salesTax.toFixed(2);
    let shippingCost = order.shippingCost.toFixed(2);
    let total = order.total.toFixed(2);
    let disabled = (order.total == 0) ? "DISABLED": "";
    // Clear div to add calc prices.
    $("#cartsummary").empty();
    // Summary with updated values as live HTML
    $("#cartsummary").append(`
        <div class="cartsummarybox1">
            <h2> SUMMARY </h2>
            <div class="cartsummarybox2"> <h3 class="priceinfotext"> SUBTOTAL: </h3><span class="pricetext">$${orderSubTotal}</span></div>
            <div class="cartsummarybox2"> <h3 class="priceinfotext"> SALES TAX: </h3><span class="pricetext">$${salesTax}</span></div>
            <div class="cartsummarybox2"> <h3 class="priceinfotext"> SHIPPING: </h3><span class="pricetext">$${shippingCost}</span></div>
            <div class="cartsummarybox2"> <h3 class="priceinfotext"> TOTAL: </h3><span class="pricetext">$${total}</span></div>
            <div class="cartbuttonalign"><button id="cartsubbutton" type="submit" ${disabled} class="ui-button ui-widget ui-corner-all">SUBMIT ORDER</button></div>
        </div>
        `);
    $("#confirmedorder2").append(`<div class="cartsummarybox1">
        <div class="cartsummarybox1">
            <h2> SUMMARY </h2>
            <div class="cartsummarybox2"> <h3 class="priceinfotext"> SUBTOTAL: </h3><span class="pricetext">$${orderSubTotal}</span></div>
            <div class="cartsummarybox2"> <h3 class="priceinfotext"> SALES TAX: </h3><span class="pricetext">$${salesTax}</span></div>
            <div class="cartsummarybox2"> <h3 class="priceinfotext"> SHIPPING: </h3><span class="pricetext">$${shippingCost}</span></div>
            <div class="cartsummarybox2"> <h3 class="priceinfotext"> TOTAL: </h3><span class="pricetext">$${total}</span></div>
        </div>
        `);
}

const updateCartOrderLines = (order) => {
    
    
    // Clear div to add products in cart.
    $("#cartitems").empty();
    if (order.orderLines.length > 0) {
        for (const i in order.orderLines) {
            $("#cartitems").append(`
                <div class="cartsummarybox1">
                    <div class="cartitembox">
                        <div class="cartimgbox">
                            <img class="cartitemimage" src="${order.orderLines[i].img}">
                            <div class="cartiteminput">
                                <input id="qty_${i}" min="0" max="10" value="${order.orderLines[i].qty}" type="number">
                            </div>
                            <h3 class="cartitemtitle"> ${order.orderLines[i].product} </h3> 
                            <span class="cartitemprice"> $${order.orderLines[i].price}</span>
                            <input id="id_${i}" type="hidden" value="${order.orderLines[i].id}">
                        </div>
                    </div>
                </div>`);
            $("#confirmedorder1").append(`<div class="cartsummarybox1">
                    <div class="cartitembox">
                        <div class="cartimgbox">
                            <img class="cartitemimage" src="${order.orderLines[i].img}">
                            <div class="cartiteminput">
                                <p> ${order.orderLines[i].qty} </p>
                            </div>
                            <h3 class="cartitemtitle"> ${order.orderLines[i].product} </h3> 
                            <span class="cartitemprice"> $${order.orderLines[i].price}</span>
                            <input id="id_${i}" type="hidden" value="${order.orderLines[i].id}">
                        </div>
                    </div>
                </div>
                `);
                
        }
            $("#cartitems").append(`
                <div class="cartbuttonalign">
                    <button onclick="updateCart();" type="button" class="ui-button ui-widget ui-corner-all"> UPDATE CART</button>
                </div>`);
    } else { // Shows nothing in cart
        $("#cartitems").append(`
            <div class="cartsummarybox1">
            <h2> YOUR ITEMS </h2>
            <div><h1>NOTHING TO SEE HERE...</h1> <p style="padding-bottom: 25%;"> There is nothing in your cart! Add something or update the cart to show items. <small> Refresh page if you clicked load cart button. </small> </p> </div>
            <div class="cartbuttonalign">
                <button id="loadcartbutton" type="button" class="ui-button ui-widget ui-corner-all"> LOAD CART</button>
            </div>
            </div>
        `);
    }
    
}

$(document).ready(()=>{
    let order = getOrder();
    updateCartSummary(order);
    updateCartOrderLines(order);
});