import { useState } from "react";


function Customize() {

    const [frame, setFrame] = useState("");
    const [color, setColor] = useState("");
    const [motor, setMotor] = useState("");
    const [seat, setSeat] = useState("");
    const [lights, setLights] = useState("");
    const [mudguard, setMudguard] = useState("");
 

    async function HandleSubmit(event) {

       event.preventDefault();

       alert("Your Custom Bike Was saved!");

       const body = {
        frame: frame,
        color: color,
        motor: motor,
        seat: seat,
        lights: lights, 
        mudguard: mudguard
      };
  
      const options = {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      };
  
      const url = "http://localhost:3000/configuredbikes";
      const response = await fetch(url, options);
      const result = await response.json();
  
      console.log(result)
      return result;

     

    }

    return(<>

    <h1>Create your own e-bike</h1>

      <div className="configurator-wrapper">
        <form  className = "configurator-form" onSubmit={HandleSubmit}>

            
            <h3>Choose a Frame: </h3>
            <input type="radio" value="v_series" name="frame" id="v_series" onChange={(e) => setFrame(e.target.value)}/>
            <label htmlFor="v_series">V_Series</label>

            <input type="radio" value="r_series" name="frame" onChange={(e) => setFrame(e.target.value)}/>
            <label htmlFor="r_series">R_Series</label>

            
            <h3>Choose a Color: </h3>
            <select name="color" id="color" onChange={(e) => setColor(e.target.value)}>
                <option value="Black Matte">Black Matte</option>
                <option value="Midnight Blue">Midnight Blue</option>
                <option value="Green Glowing">Green Glowing</option>
                <option value="Purple">Purple</option>
            </select>



            <h3>Choose a Motor: </h3>

            <input type="radio" value="250"name="motor" id="motor-250" onChange={(e) => setMotor(e.target.value)}/>
            <label htmlFor="motor-250">250 Watts</label>

            <input type="radio" value="500"name="motor" id="motor-500" onChange={(e) => setMotor(e.target.value)}/>
            <label htmlFor="motor-500"> 500 Watts </label>

            <input type="radio" value="750"name="motor" id="motor-750" onChange={(e) => setMotor(e.target.value)}/>
            <label htmlFor="motor-750">750 Watts</label>



            <h3>Choose a Seat: </h3>

            <input type="radio" value="normal"name="seat" id="normal-seat" onChange={(e) => setSeat(e.target.value)}/>
            <label htmlFor="normal-seat">Normal</label>


            <input type="radio" value="long" name="seat" id="long-seat" onChange={(e) => setSeat(e.target.value)}/>
            <label htmlFor="normal-seat">Long</label>

            <h3>Would you like to add Lights? </h3>
            <input type="checkbox" name="lights" id="ligths" value="1" onChange={(e) => setLights(e.target.value)}/>
            <label htmlFor="lights"> Add Lights</label>

            <h3>Would you like to add a mudguard? </h3>
            <input type="checkbox" name="mudguard" id="mudguard" value="1" onChange={(e) => setMudguard(e.target.value)}/>
            <label htmlFor="lights"> Add mudguard</label>

            <br />
            <br />
            <br />
            <br />

            <input type="submit" className = "submit-button" value="Save your Bike" />            




        </form>
      </div>

    </>)
}

export default Customize