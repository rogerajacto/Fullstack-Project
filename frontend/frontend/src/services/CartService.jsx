
function getCart() {
    return JSON.parse(localStorage.getItem("cart"))
}


let items = [];

function setCart(cart) {

items.push(cart)

localStorage.setItem("cart", JSON.stringify(items));

    
}

function updateCart(cart) {
localStorage.setItem("cart", JSON.stringify(cart));
items = cart
}


function getAccessoriesCart() {
    return JSON.parse(localStorage.getItem("accessoriesCart"))
}


let accessoriesitems = [];

function setAccessoriesCart(cart) {

    accessoriesitems.push(cart)

localStorage.setItem("accessoriesCart", JSON.stringify(accessoriesitems));

    
}

function updateAccessoriesCart(cart) {
localStorage.setItem("accessoriesCart", JSON.stringify(cart));
items = cart
}


export default {
    getCart,
    setCart,
    updateCart,
    getAccessoriesCart,
    setAccessoriesCart,
    updateAccessoriesCart
}