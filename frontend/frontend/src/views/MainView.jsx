import { Route, Switch } from "wouter";
import { Link } from "wouter";


function MainView ({data}) {

    return(
        <>
        <h1>Models</h1>

        <div className="stock-models">

        <Link href = {"/vseries"}>
            <div className="model-specs">
                <h2>V_Series</h2>
                <img src={data[0]?.image_url} alt="image of e_bike" />
            </div>
        </Link>

        <Link href = {"/rseries"}>
            <div className="model-specs">
                <h2>R_Series</h2>
                <img src={data[14]?.image_url} alt="image of e_bike" />
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