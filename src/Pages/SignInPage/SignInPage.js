import React, { useState } from 'react';
import Axios from "axios";
import './SignInPage.css';

function SignIn()
{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [loginStatus, setLoginStatus] = useState("");

    const login = () =>
    {
        Axios.post("http://localhost:5000/signin", 
        {
            username: username,
            password: password,
        }).then((response) =>
        {
            if(response.data.message)
            {
                setLoginStatus(response.data.message);
            } else
            {
                setLoginStatus(response.data[0].username);
            }
            
        });
    };

    return (
        <div className="signin-wrapper">
            <h1>Sign In</h1>
                    <input 
                        type="text"
                        placeholder="Username..."
                        onChange={(e) => 
                        {
                            setUsername(e.target.value);
                        }} 
                    />
                
                    <input 
                        type="password"
                        placeholder="Password..."
                        onChange={(e) => 
                        {
                            setPassword(e.target.value);
                        }}
                    />
                <div>
                    <button onClick={login}> Login </button>
                </div>
            <h1>{loginStatus}</h1>
        </div>
    );
}
export default SignIn;