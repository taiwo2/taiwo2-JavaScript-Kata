import {calculate}from './productPrice.js';

function ShoppingCart() {
	this.items = {};
}

ShoppingCart.prototype.totalItem = function() {
	let totalItem = 0;

	for(let itemSku in this.items) {
		let itemQuantity = this.items[itemSku];
    totalItem += calculate(itemSku, itemQuantity);
	}

	return totalItem;
};

ShoppingCart.prototype.scanItems = function(scanItemsnedSKU) {
	let currentQuantity = this.items[scanItemsnedSKU] || 0;
	this.items[scanItemsnedSKU] = ++currentQuantity;
};


 export default ShoppingCart;