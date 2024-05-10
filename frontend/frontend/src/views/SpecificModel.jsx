import { useState, useEffect } from "react";
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



    async function HandleSubmit(event) {

        event.preventDefault();
 
        alert("Item Added to Cart!");
 
        const body = {
         product: "V_Series_Moped",
         price: "2490"
       };
   
       const options = {
         method: "POST",
         body: JSON.stringify(body),
         headers: {
           "Content-type": "application/json; charset=UTF-8",
         },
       };
   
       const url = "http://localhost:3000/cart";
       const response = await fetch(url, options);
       const result = await response.json();
   
       console.log(result)
       return result;
 
      
 
     }

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



    async function HandleSubmit2(event) {

        event.preventDefault();
 
        alert("Item Added to Cart!");
 
        const body = {
         product: "V_Series_Moped_X",
         price: "2940"
       };
   
       const options = {
         method: "POST",
         body: JSON.stringify(body),
         headers: {
           "Content-type": "application/json; charset=UTF-8",
         },
       };
   
       const url = "http://localhost:3000/cart";
       const response = await fetch(url, options);
       const result = await response.json();
   
       console.log(result)
       return result;
 
      
 
     }




    return (<>
        <h1>{stockData[0]?.model}</h1>

        <div className="specifics-container">

            <div className="specific-model-specs">

                

                <form onSubmit={HandleSubmit}>

                    <h2>{stockData[0]?.model}</h2>

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

                
                    <input type="submit" className = "submit-button" value="Add To cart" /> 
                </form>


            </div>
            
            <div className="specific-model-specs">
                
                <h2>{stockData[2]?.model}</h2>

                <form onSubmit={HandleSubmit2}>
                    
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

                                
                    <input type="submit" className = "submit-button" value="Add To cart" /> 
                </form>

            </div>
        </div>
            
   </> )
}

export default SpecificModel;