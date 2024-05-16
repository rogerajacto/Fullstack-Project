
function getCart() {
    return JSON.parse(localStorage.getItem("cart"))
}

function setCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

export default {
    getCart,
    setCart
}