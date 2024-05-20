import { useState } from "react";

function LoggingIn() {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const navigateToPage = () => {
    window.location.href = '/';
};
async function HandleSubmit(event) {
    event.preventDefault();

    const body = {
        email: email,
        password: password,
    };

    const options = {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    };

    try {
        const url = "http://localhost:3000/users/login";
        const response = await fetch(url, options);
        const result = await response.json();

        localStorage.setItem('token', result.token);

        if (response.ok) {
            alert('Login successful');       
            navigateToPage();

        } else {
            console.error('Login failed:', result.message);
            alert(result.message)
        }
    } catch (error) {
        console.error('Error:', error);
    }
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




