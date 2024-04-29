import { useState } from "react";
import { useEffect } from "react";


function App() {


  const [data, setdata ] = useState([]);

  async function getData() {
    const url = "http://localhost:3000/stockbikes";


    const response = await fetch (url);
    const result = await response.json();

    setdata(result);
  }

  console.log(data)

  useEffect(function () {
    getData()
},[])

  return (<>

      <div>
         <h1>{data[0]?.model}</h1>
         <img src={data[0]?.image_url} alt="image of e_bike" />
      </div>

    <h1>{data[4]?.model}</h1>

    <h1>{data[8]?.model}</h1>

  </>)
}

export default App
