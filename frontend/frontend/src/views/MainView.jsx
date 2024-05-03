import { Route, Switch } from "wouter";
import { Link } from "wouter";


function MainView ({data}) {

    return(
        <>
        <h1>Models</h1>

        <div className="stock-models">

        <Link href = {"/specificModel/" + data[0]?.model}>
            <div className="model-specs">
                <h2>{data[0]?.model}</h2>
                <img src={data[0]?.image_url} alt="image of e_bike" />
            </div>
        </Link>

        <Link href = {"/specificModel/" + data[4]?.model}>
            <div className="model-specs">
                <h2>{data[4]?.model}</h2>
                <img src={data[4]?.image_url} alt="image of e_bike" />
            </div>
        </Link>

        <Link href = {"/specificModel/" + data[8]?.model}>
            <div className="model-specs">
                <h2>{data[8]?.model}</h2>
                <img src={data[8]?.image_url} alt="image of e_bike" />
            </div>
        </Link>
        </div>
        <hr/>

        <Link href="/customize">
            <div className="customization">
                <h2>Customize Your Own E-bike!</h2>
                <p><i className="fa-solid fa-screwdriver-wrench"></i></p>
            </div>
        </Link>


        </>
    )
    
}



export default MainView;