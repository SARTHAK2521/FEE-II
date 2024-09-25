 var cart = [
    { id: 1, name: 'bullet', price: 150000, qty: 1 },
    { id: 2, name: 'hp victus', price: 78000, qty: 2 }
];
function calculateTotal(cart) {
    var total = 0;
    
 for (var i = 0; i < cart.length; i++) {      
        total += cart[i].price * cart[i].qty;
    }
    
    return total;
}
var totalPrice = calculateTotal(cart);
console.log("Total Price:", totalPrice);
