import { useState, useEffect } from "react";
import { Route } from "wouter";

function SpecificModel({stockData}) {


        const [value,setValue] = useState(stockData[0]?.image_url);
        

        const options = [
            {label: "Black Matte", value: stockData[0]?.image_url },
            {label: "Midnight Blue", value:stockData[3]?.image_url}
        ]

        function handleSelect(event) {
        
            setValue (event.target.value)
        }

        const [value2,setValue2] = useState(stockData[0]?.image_url);
        

        const options2 = [
            {label: "Black Matte", value: stockData[0]?.image_url },
            {label: "Midnight Blue", value:stockData[3]?.image_url}
        ]
    
    function handleSelect2(event) {
        
        setValue2 (event.target.value)
    }

    useEffect(
        function () {
            if(stockData[0]?.image_url != undefined){
                setValue
            }
        },
    [])

    return (<>
        <h1>{stockData[0]?.model}</h1>

        <div className="specifics-container">

            <div className="specific-model-specs">

                <h2>{stockData[0]?.model}</h2>

                <form action="" method="post">

                    <img src={value} alt="image of e-bike" />
                    <br />

                    <label for ="color"> Color: </label>
                    <select className="color" onChange={handleSelect}>
                            {options.map(option =>(
                            <option value={option.value}>{option.label}</option>))}
                    </select>


                    <h3>Motor: {stockData[0]?.motor} Watts</h3>

                    <h3>Range: {stockData[0]?.autonomy} Km</h3>

                    <h3>Price: {stockData[0]?.price} €</h3>

                
                    <button> Add to Cart</button>
                </form>


            </div>
            
            <div className="specific-model-specs">
                
                <h2>{stockData[2]?.model}</h2>

                <form action="" method="post">
                    
                    <img src={value2} alt="image of e-bike" />
                    <br />

                    <label for ="color"> Color: </label>
                    <select className="color" onChange={handleSelect2}>
                            {options2.map(option =>(
                            <option value={option.value}>{option.label}</option>))}
                    </select>


                    <h3>Motor: {stockData[2]?.motor} Watts</h3>

                    <h3>Range: {stockData[2]?.autonomy} Km</h3>

                    <h3>Price: {stockData[2]?.price} €</h3>

                
                    <button> Add to Cart</button>
                </form>

            </div>
        </div>
            
   </> )
}

export default SpecificModel;