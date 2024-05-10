import { useState } from "react";
import { useEffect } from "react";

function ShoppingCart() {

const [items, setItems ] = useState([]);

  async function getItems() {

    const url = "http://localhost:3000/cart";


    const response = await fetch (url);
    const result = await response.json();

    setItems(result);
  }

  console.log(items)

  useEffect(function () {
    getItems()
},[])

    return(
        <>
        <h1>Your Cart!</h1>
        <div className="shopping-cart-display">

            <table>
                <thead>
                    <th>Product</th>
                    <th>Price</th>
                        </thead>
                            <tbody>
                            {
                                items.map(function (info) {
                                    return(
                                        <>

                                                <tr>
                                                    <td>{info.product}</td>
                                                    <td>{info.price} €</td>
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