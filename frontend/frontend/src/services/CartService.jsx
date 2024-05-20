
function getCart() {
    return JSON.parse(localStorage.getItem("cart"))
}


let items = [];

function setCart(cart) {

items.push(cart)

localStorage.setItem("cart", JSON.stringify(items));

    
}

export default {
    getCart,
    setCart
}