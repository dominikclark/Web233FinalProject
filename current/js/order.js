// This is used for a class of the order for the cart.
"use strict";

class Order {
    // Basic elements needed for the class.
    orderLines = []; // Array being used once again for the orderlines
    salesTaxRate = 0.0956 // Using highest sales tax rate.
    subTotal = 0; // Total befored added costs.
    salesTax = 0; // Sales tax in dollar amount.
    shippingCost = 0; // Static shipping cost.
    total = 0; // Total after all costs.
    constructor(orderLines) {
        if (orderLines !== null && orderLines !== undefined) {
            this.orderLines = orderLines;
            this.updateTotals();
        } else {
            console.error("Orderlines is undefined or null value!");
        };
    };
    addOrderItem(orderline) {
        this.orderLines.push(orderline);
        this.updateTotals();
    };
    updateOrderLine = function(id,qty) {
        let cartUpdated = false;

        if (id !== null && id !== undefined && id !== "") { // Both validate to make sure its a number
            if (qty !== null && qty !== undefined && qty >= 0) {
                let orderLineIndex = -1; // Define the index.
                for (let i = 0; i < this.orderLines.length; i++) { // For loop is for adding the order length to users order and stopping once it reaches the amount of products on order
                    if (this.orderLines[i].id == id) {
                        orderLineIndex = i;
                        break;
                    }
                }
                if (orderLineIndex > -1) {
                    let oldQty = this.orderLines[orderLineIndex].qty;
                    if (oldQty != qty) {
                        this.orderLines[orderLineIndex].qty = qty;
                        this.updateTotals();
                        cartUpdated = true;
                    }
                }
            } else {
                throw new Error(`Invalid number detected (${qty})`)
            };
        } else {
            throw new Error(`Invalid number detected (${id})`)
        };
        return cartUpdated;
    };
    updateTotals() {
        let subTotal = 0;
        for (const orderLine of this.orderLines) {
            subTotal += (orderLine.price * orderLine.qty) // For every price mutiply the quanity of item.
        }
        this.subTotal = subTotal;
        this.salesTax = this.salesTaxRate * this.subTotal; // Sales tax rate being applied to standard pricing.
        // REDUCED fast shipping cost for any over past 1000 dollars
        if (this.subTotal > 1000) {
            this.shippingCost = 45.00;
        } else if (this.subTotal == 0){
            this.shippingCost = 0.00;
        } else { // Standard shipping
            this.shippingCost = 65.00;
        }
        this.total = this.subTotal + this.salesTax + this.shippingCost; // The total of everything including standard price tax and shipping.
    };
    removeOrderLines() {
        for (let i = this.orderLines.length - 1; i > -1; i--) {
            if (this.orderLines[i].qty == 0) {
                this.orderLines.splice(i,1);
            };
        };
    };
};