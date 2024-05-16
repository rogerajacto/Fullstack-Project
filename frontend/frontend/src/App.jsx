
import NavegationBar from "./components/NavigationBar";
import MainView from "./views/MainView";
import Rseries from "./views/Rseries";
import Customize from "./views/CustomizeView";
import Register from "./views/RegisterView";
import LoggingIn from "./views/LoggingView";
import ShoppingCart from "./views/ShoppingCartView";
import Vseries from "./views/VseriesView";

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


function getImgsRseries(params) {
  if (data[0]?.image_url != undefined) {
    return(
      <>
        <Rseries allStock = {data}/>
      </>
    )
  }
}

function getImgsVseries(params) {
  if (data[0]?.image_url != undefined) {
    return(
      <>
        <Vseries allStock = {data}/>
      </>
    )
  }
}


  return (<>
   <NavegationBar/>
    <Switch>
      
        <Route path = "/">

          <MainView data = {data}/>

        </Route>
        <Route path="/rseries">
          {getImgsRseries()}
        </Route>

        
        <Route path="/vseries">
          {getImgsVseries}
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

        <Route path="/cart">

          <ShoppingCart/>

        </Route>
    </Switch>
        

  </>)
}

export default App
