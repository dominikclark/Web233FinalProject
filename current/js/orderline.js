// Simliar to items.js this uses a class instead for the orderline used in loadcart function.

"use strict"

class orderLine {
    constructor(id, img, product, qty, price) {
        this.id = id;
        this.img = img;
        this.product = product;
        this.qty = qty;
        this.price = price;
    }
}