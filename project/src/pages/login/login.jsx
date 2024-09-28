import React from "react";
import { useState } from "react";

function Login() {
    const [login, setlogin] = useState('');
    const [password, setpassword] = useState('');

    const handleLoginData = (event) => {
        event.preventDefault();
        console.log("Logging in with   " + login + "   " + password)
    }

    return(
        <div>
            <h2></h2>
            <form onSubmit={handleLoginData}>
                <input 
                type="text" 
                value={login} 
                onChange={(event) => setlogin(event.target.value)}
                />
                <input 
                type="password"
                value={password}
                onChange={(event) => setpassword(event.target.value)}
                 />
                 <button type="submit">
                    login
                 </button>
            </form>
        </div>
    );
}

export default Login;