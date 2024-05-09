import { useState } from "react"


async function AddConfiguredBike() {

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
  
      return result;
}


export default{
AddConfiguredBike
}