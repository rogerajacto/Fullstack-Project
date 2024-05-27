
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

    function handleAccessoriesDelete(product) {
        const updatedAccessoriesCart = accessoriesCartInfo.filter(item => item.product !== product);
        setAccessoriesCartInfo(updatedAccessoriesCart);


        CartService.updateAccessoriesCart(updatedAccessoriesCart);
    }


    // console.log(cartInfo);

    

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

        if (accessoriesCartInfo[0]?.product != undefined) {
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
                                        value={info.product}
                                        className="del-button"
                                        onClick={() => handleAccessoriesDelete(info.product)}
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

    function Total() {

        let totalBike = 0;
        let totalAccessories = 0;

            for (let i = 0; i < cartInfo.length; i++) {
                
                totalBike = totalBike +  Number(cartInfo[i]?.price);          
            }

            for (let i = 0; i < accessoriesCartInfo.length; i++) {
                
                totalAccessories = totalAccessories +  Number(accessoriesCartInfo[i]?.price);
            }

        return totalBike + totalAccessories
            
    }

    return(
        <>
            <h1>Your Cart!</h1>
            
            {cartData()}
            {accessoriesCartData()}
            <h1>Your Total: {Total()} €</h1>
        
        </>
    )
}

export default ShoppingCart;