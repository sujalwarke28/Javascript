let itemName = "Laptop";
let qty = 2;
let price = 999.99;

const discount = 0.1

//total price = qty * price

let totalPrice = qty*price;
console.log(totalPrice);

totalPrice = totalPrice - (totalPrice * discount);
console.log(totalPrice);


