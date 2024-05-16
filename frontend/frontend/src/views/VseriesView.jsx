import VseriesMoped from "../components/VseriesMoped";
import VseriesClassic from "../components/VseriesClassic";
import VseriesRaw from "../components/VseriesRaw";

function Vseries({allStock}) {

    return(
    <>
        <h1>V_SERIES_MODELS</h1>

        <div className="specifics-container"> 

            <VseriesMoped allStock={allStock}/>
            <VseriesClassic allStock={allStock}/>
            <VseriesRaw allStock={allStock}/>

        </div>
       
    </>
)}

export default Vseries;


