import { useState } from "react";
import { useEffect } from "react";
import CartService from "../services/CartService";

function ShoppingCart() {


    const cartInfo = CartService.getCart()
    console.log(cartInfo)



    return(
        <>
        <h1>Your Cart!</h1>
        <div className="shopping-cart-display">

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
                                                    <td className="del-td"><button className="del-button"><i class="fa-solid fa-trash-can"></i></button></td>
                                                </tr>
                                        </>
                                    )
                                })
                            }
                            </tbody>
            </table>


        </div>
        </>
    )
}

export default ShoppingCart;