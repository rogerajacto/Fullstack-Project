
import NavegationBar from "./components/NavigationBar";
import MainView from "./views/MainView";
import SpecificModel from "./views/SpecificModel";
import Customize from "./views/CustomizeView";
import Register from "./views/RegisterView";
import LoggingIn from "./views/LoggingView";

import { Route, Switch } from "wouter";
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

  // console.log(data)

  useEffect(function () {
    getData()
},[])

function getImg() {
  if (data[0]?.image_url != undefined) {
    return (<SpecificModel stockData = {data}/>)
  }
}


  return (<>
   <NavegationBar/>
    <Switch>
      
        <Route path = "/">

          <MainView data = {data}/>

        </Route>

        <Route path = "/specificModel/:model">

          {getImg()}

        </Route>

        <Route path = "/customize">

          <Customize/>

        </Route>

        <Route path="/register">
          <Register/>
          
        </Route>

        <Route path="/login">

        <LoggingIn></LoggingIn>   

        </Route>
    </Switch>
        

  </>)
}

export default App
