import { useState } from "react";
import { Redirect } from "wouter";

function LoggingIn() {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

async function HandleSubmit(event) {

    event.preventDefault();

    const body = {
        email: email,
        password:password
    }

    const options = {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      };

        const url = "http://localhost:3000/users/login";
        const response = await fetch(url, options);
        const result = await response.json();
    
        console.log(result)

        alert(result.message);

        return result
    }

    return(
        <>
            <h1> Sign In on Your Acount!</h1>

            <form className= "loggIn-form" onSubmit={HandleSubmit} >
                <label for="Email">Email: </label>
                <input type="text" className ="form-box" name="Email" onChange={(e)=>setEmail(e.target.value)}/>
                

                <label for="password">Password: </label>
                <input type="password"  className ="form-box" name="password" onChange={(e)=>setPassword(e.target.value)} />
                

                <input type="submit" className="submit-button" value="Log In"/>


            </form>

            <h3 className="to-register">Dont Have An Account? <br/> Please Create one <a href="/register">Here!</a></h3>
        </>
    )
}
export default LoggingIn;




