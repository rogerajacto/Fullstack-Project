import { useState } from "react";
import { navigate } from "wouter/use-hash-location";


function Register() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function HandleSubmit(event) {
        event.preventDefault();

        const toHome = () => {
          window.location.href = "/";
      };

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

          try {
            
            const url = "http://localhost:3000/users/register";
            const response = await fetch(url, options);
            const result = await response.json();

            if (result.message == "New Account Created!") {

              console.log(result);

              alert (result.message);
              toHome();
            }

            else{
              console.log(result)
              alert (result.message)
            }

          } catch (error) {
            console.log(error)
          }
        


            return result    

    }


    return(<>

    <h1> Create an Account with Us!</h1>

    <form className= "loggIn-form"  onSubmit={HandleSubmit}>
      
        <label for="Email">Email: </label>
        <input type="text" name="Email" className ="form-box" onChange={(e)=>setEmail(e.target.value)}/>
        

        <label for="password">Choose a password: </label>
        <input type="password" name="password" className ="form-box" onChange={(e)=>setPassword(e.target.value)} />
        

        <input type="submit" className="submit-button" value="Create an Account"/>


    </form>
    
    
    
    </>)
}

export default Register;