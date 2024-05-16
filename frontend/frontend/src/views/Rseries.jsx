import RseriesLarge from "../components/RseriesLarge";
import RseriesClassic from "../components/RseriesClassic";
import RseriesRaw from "../components/RseriesRaw";


function Rseries({allStock}) {

// console.log(allStock)

    return(<>
        <h1>R_SERIES_MODELS</h1>

        <div className="specifics-container"> 

            <RseriesLarge allStock={allStock}/>
            <RseriesClassic allStock={allStock}/>
            <RseriesRaw allStock={allStock}/>

        </div>
    </>)
}

export default Rseries;



