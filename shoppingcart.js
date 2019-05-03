"use strict";


let shoppingCart = [];

let itemList = [
	{ name: "scissors", price: 4.99 },
	{ name: "tape", price: 3.99 },
	{ name: "paper", price: 6.99 },
	{ name: "glue", price: 2.99 }
];


function addItem(itemName, itemPrice) {
	
	shoppingCart = [...shoppingCart, {itemName, itemPrice}];

}

function removeItem(itemName) {
	
	let index = shoppingCart.findIndex(element => element.itemName === itemName);
	shoppingCart = [...shoppingCart.splice(0, index), ...shoppingCart.splice(index = 1)];

}

function editItem(oldItem, newItem, newItemPrice) {
	
	let index = shoppingCart.findIndex(element => element.itemName === oldItem);	
	shoppingCart = [...shoppingCart.splice(0, index), { itemName: newItem, itemPrice: newItemPrice }, ...shoppingCart.splice(index + 1)];


}

function printTotal() {
	let priceTotal = 0;
	for (let item of shoppingCart) {

		priceTotal += item.itemPrice;

		priceTotal; //= priceTotal + (priceTotal*.06);

	

	}
	priceTotal = priceTotal *1.06;

	console.log(priceTotal);

}

 addItem("beaver pelt", 199.99);
 addItem("funky monkey", 5.99);
 addItem("hatchet", 49.99);
 addItem("goggles", 59.99);

//console.log(shoppingCart);

removeItem("funky monkey");

 console.log(shoppingCart);

 editItem("goggles", "Oakley Goggles", 25.00);

 //console.log(shoppingCart);

 printTotal();


