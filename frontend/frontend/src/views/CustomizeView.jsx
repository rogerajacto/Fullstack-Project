function Customize() {
    return(<>

        <h1>Create your own e-bike</h1>

        <form action="http://localhost:3000/configuredbikes" method="post" className="
        configurator-form">
            <h3>Choose a Frame: </h3>
            <input type="radio" value="v_series" name="frame" id="v_series"/>
            <label htmlFor="v_series">V_Series</label>

            <input type="radio" value="r_series" name="frame"/>
            <label htmlFor="r_series">R_Series</label>


            <h3>Choose a Color: </h3>
            <select name="color" id="color">
                <option value="Black Matte">Black Matte</option>
                <option value="Midnight Blue">Midnight Blue</option>
                <option value="Green Glowing">Green Glowing</option>
                <option value="Purple">Purple</option>
            </select>



            <h3>Choose a Motor: </h3>

            <input type="radio" value="250"name="motor" id="motor-250"/>
            <label htmlFor="motor-250">250 Watts</label>

            <input type="radio" value="500"name="motor" id="motor-500"/>
            <label htmlFor="motor-500"> 500 Watts </label>

            <input type="radio" value="750"name="motor" id="motor-750"/>
            <label htmlFor="motor-750">750 Watts</label>



            <h3>Choose a Seat: </h3>

            <input type="radio" value="false"name="seat" id="normal-seat"/>
            <label htmlFor="normal-seat">Normal</label>


            <input type="radio" value="true" name="seat" id="long-seat"/>
            <label htmlFor="normal-seat">Long</label>

            <h3>Would you like to add Lights? </h3>
            <input type="checkbox" name="lights" id="ligths" value="true" />
            <label htmlFor="lights"> Add Lights</label>

            <h3>Would you like to add a mudguard? </h3>
            <input type="checkbox" name="mudguard" id="mudguard" value="true" />
            <label htmlFor="lights"> Add mudguard</label>

            <br />
            <br />
            <br />
            <br />

            <input type="submit"  name="Add to Cart" value="Save Configured Bike"/>
            




        </form>
    </>)
}

export default Customize