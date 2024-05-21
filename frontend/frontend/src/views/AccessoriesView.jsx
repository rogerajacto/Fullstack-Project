import { useState } from "react";
import { useEffect } from "react";
import CartService from "../services/CartService";

function AccessoriesView() {

    const [data, setdata ] = useState([]);

    async function getData() {
        const url = "http://localhost:3000/accessories";
    
    
        const response = await fetch (url);
        const result = await response.json();

        setdata(result);

    }

    useEffect(function () {
        getData()
    },[])

    // console.log(data)


    function HandleSubmit(product, price) {


        let selecteditem = {
            product: product,
            price: price,
        };
        CartService.setAccessoriesCart(selecteditem)
        console.log(selecteditem)
    }


    return(
        <>
            <h1>Accessories</h1>
            <div className="accessories-container">
               
                    {data.map(function (data) {
                        return(
                            <> <div className="accessorie">
                                    <h2>{data.name}</h2>
                                    <img src={data.image_url} alt="image of product"/>
                                    <h3>{data.price} €</h3>
                                    <button className="submit-button" onClick={() => HandleSubmit(data.name, data.price)}>Add To Cart</button>
                                    <p>{data.description}</p>
                                    
                                </div>
                            </>
                        )
                        
                    })}
                
            </div>
        </>
    )
}

export default AccessoriesView
