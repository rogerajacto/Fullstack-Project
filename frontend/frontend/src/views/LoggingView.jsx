
// import { useState, useEffect } from "react";

// function LoggingIn() {
    
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {

//     const token = localStorage.getItem('token');
//     if (token) {
//       setIsLoggedIn(true);
//     }
//   }, []);

//   const navigateToPage = () => {
//     window.location.href = '/';
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     setIsLoggedIn(false);
//   };

//   async function handleSubmit(event) {
//     event.preventDefault();

//     const body = {
//       email: email,
//       password: password,
//     };

//     const options = {
//       method: 'POST',
//       body: JSON.stringify(body),
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//     };

//     try {
//       const url = "http://localhost:3000/users/login";
//       const response = await fetch(url, options);
//       const result = await response.json();

//       if (response.ok) {
//         localStorage.setItem('token', result.token);
//         setIsLoggedIn(true);
//         alert('Login successful');
//         navigateToPage();
//       } else {
//         console.error('Login failed:', result.message);
//         alert(result.message);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   }

//   if (isLoggedIn) {
//     return (
//       <>
//         <h1>Sign out {email}</h1>
//         <button className="submit-button" onClick={handleLogout}>Log Out</button>
//       </>
//     );
//   }

//   return (
//     <>
//       <h1>Sign In to Your Account!</h1>

//         <form className="loggIn-form" onSubmit={handleSubmit}>
//             <label htmlFor="Email">Email: </label>
//             <input type="text" className="form-box" name="Email" onChange={(e) => setEmail(e.target.value)} />

//             <label htmlFor="password">Password: </label>
//             <input type="password" className ="form-box" name="password" onChange={(e) => setPassword(e.target.value)} />

//             <input type="submit" className="submit-button" value="Log In" />
//         </form>

//       <h3 className="to-register">
//         Don't Have An Account? <br /> Please Create one <a href="/register">Here!</a>
//       </h3>
//     </>
//   );
// }

// export default LoggingIn;


import { useState, useEffect } from "react";

function LoggingIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {

    const token = localStorage.getItem('token');
    const storedEmail = localStorage.getItem('email');
    if (token && storedEmail) {
      setIsLoggedIn(true);
      setUserEmail(storedEmail);
    }
  }, []);

  const navigateToPage = () => {
    window.location.href = '/';
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    setIsLoggedIn(false);
  };

  async function handleSubmit(event) {
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

      if (response.ok) {
        localStorage.setItem('token', result.token);
        localStorage.setItem('email', email);
        setIsLoggedIn(true);
        setUserEmail(email); 
        alert('Login successful');
        navigateToPage();
      } else {
        console.error('Login failed:', result.message);
        alert(result.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  if (isLoggedIn) {
    return (
      <>
        <h1>Welcome Back</h1>
        <h1>{userEmail}</h1>
        <button  className="submit-button" onClick={handleLogout}>Log Out</button>
      </>
    );
  }

  return (
    <>
      <h1>Sign In to Your Account!</h1>
      <form className="loggIn-form" onSubmit={handleSubmit}>
        <label htmlFor="Email">Email: </label>
        <input type="text" className="form-box" name="Email" onChange={(e) => setEmail(e.target.value)} />

        <label htmlFor="password">Password: </label>
        <input type="password" className="form-box" name="password" onChange={(e) => setPassword(e.target.value)} />

        <input type="submit" className="submit-button" value="Log In" />
      </form>

      <h3 className="to-register">
        Don't Have An Account? <br /> Please Create one <a href="/register">Here!</a>
      </h3>
    </>
  );
}

export default LoggingIn;

