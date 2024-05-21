
import CartService from "../services/CartService";
import { useState } from "react";

function ShoppingCart() {

    const [cartInfo, setCartInfo] = useState(CartService.getCart());
    const [accessoriesCartInfo, setAccessoriesCartInfo] = useState(CartService.getAccessoriesCart());

    function handleDelete(model) {
        const updatedCart = cartInfo.filter(item => item.model !== model);
        setCartInfo(updatedCart);


        CartService.updateCart(updatedCart);
    }


    console.log(cartInfo);

    

    function cartData() {

        if (cartInfo[0]?.model != undefined) {
            return(
                <>
                    <div className="shopping-cart-display">
                    <h3>E-bikes:</h3>
                        <table>
                            <thead>
                                <th>Product</th>
                                <th>Color</th>
                                <th>Motor</th>
                                <th>Range</th>
                                <th>Price</th>
                            </thead>
                            <tbody>
                            {
                                cartInfo.map(function (info) {
                                    return(
                                        <>
                                        <tr>
                                            <td>{info.model} </td>
                                            <td>{info.color}</td>
                                            <td>{info.motor} Watts</td>
                                            <td>{info.range} Km</td>
                                            <td>{info.price} €</td>
                                            <button
                                                    value={info.model}
                                                    className="del-button"
                                                    onClick={() => handleDelete(info.model)}
                                                >
                                                    <i className="fa-solid fa-trash-can"></i>
                                                </button>
                                        </tr>
                                        </>)
                                })
                            }
                            </tbody>
                        </table>
                        </div>
                        </>)}
        else{

            return(
                <>
                    <h2 className="alternative" >You don't have any e-bike on your cart right now 😪</h2>
                </>
            )
        }
    }


    function accessoriesCartData() {

        if (accessoriesCartInfo[0].product != undefined) {
            return(
                <>
        <div className="shopping-cart-display">
            <h3>Accessories:</h3>
            <table>
                <thead>
                    <th>Product</th>
                    <th>Price</th>
                </thead>
                <tbody>
                {
                    accessoriesCartInfo.map(function (info) {
                        return(
                            <>
                            <tr>
                                <td>{info.product} </td>
                                <td>{info.price} €</td>
                                <button
                                        value={info.model}
                                        className="del-button"
                                        onClick={() => handleDelete(info.model)}
                                    >
                                        <i className="fa-solid fa-trash-can"></i>
                                    </button>
                            </tr>
                            </>)
                    })
                }
                </tbody>
            </table>
            </div>
                        </>)}
        else{

            return(
                <>
                    <h2 className="alternative">You don't have any accessories on your cart right now 😪</h2>
                </>
            )
        }
        
    }

    function showTotal() {

    }


    return(
        <>
        <h1>Your Cart!</h1>
        
        {cartData()}
        {accessoriesCartData()}
        
        </>
    )
}

export default ShoppingCart;