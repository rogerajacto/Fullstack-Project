import { useState } from "react";
import { useEffect } from "react";
import CartService from "../services/CartService";


function RseriesClassic({allStock}) {

    const [data, setdata ] = useState([]);

    async function getData() {
        const url = "http://localhost:3000/stockBikes/r_series_classic";
    
    
        const response = await fetch (url);
        const result = await response.json();

        setdata(result);

    }

        
    useEffect(function () {
        getData()
    },[])


    
const [value,setValue] = useState(allStock[14]?.image_url);
const [motor, setMotor] = useState("250");
const [color, setColor] = useState("Black Matte");
let price = "";
let range = "";

const options = [
    {label: "Black Matte", value: data[0]?.image_url },
    {label: "Midnight Blue", value:data[2]?.image_url}
]

function priceByMotor() {

    if (motor == data[0]?.motor) {

        price = data[0]?.price;
        range = data[0]?.autonomy;

        return (
        <>
                <h3>Range: {data[0]?.autonomy} Km</h3>
                <h3 name="price">Price: {data[0]?.price} €</h3>    
        </>
       )}

       else{
        price = data[2]?.price;
        range = data[2]?.autonomy;

        return (
        <>
                <h3>Range: {data[2]?.autonomy} Km</h3>   
                <h3 name="price"> Price: {data[2]?.price} €</h3>     
        </>   
        )}    
}


function handleSelect(event) {
        
    setValue (event.target.value)
    
    if (event.target.value == data[2]?.image_url) {
        setColor("Midnight Blue");
    }

}

async function HandleSubmit(event) {

    event.preventDefault();

    let selectedBike = {
        model: data[0]?.model,
        motor: motor,
        price: price,
        color: color,
        range: range
    };

    CartService.setCart(selectedBike)


    alert("Item Added to Cart!");

}




return (
<>
    <div className="specific-model-specs">

        <form className="model-form" onSubmit={HandleSubmit}>

        <h2>{data[0]?.model}</h2>

        <img src={value} alt="image of e-bike" />
        <br />

        <label for ="color"> Color: </label>
        <select className="bike-color" onChange={handleSelect}>
                {options.map(option =>(
                <option value={option.value}>{option.label}</option>))}
        </select>

        <div className="motor-selector">
            <input type="radio" value={data[0]?.motor} name="motor" id="motor-250" onChange={(e) => setMotor(e.target.value)}/>
            <label htmlFor="motor-250">{data[0]?.motor} Watts</label>

            <input type="radio" value={data[2]?.motor} name="motor" id="motor-500" onChange={(e) => setMotor(e.target.value)}/>
            <label htmlFor="motor-500">{data[2]?.motor} Watts</label>
        </div>

        {priceByMotor()}


        <input type="submit" className = "submit-button" value="Add To cart" /> 
        </form>
    </div>
</>
)
}

export default RseriesClassic