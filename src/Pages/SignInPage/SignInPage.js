import React, { useEffect, useState } from 'react';
import Axios from "axios";
import './SignInPage.css';
import { useHistory } from "react-router-dom";



function SignIn() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [loginStatus, setLoginStatus] = useState("");

    Axios.defaults.withCredentials = true;

    let history = useHistory();

    const login = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:5000/signin",
            {
                username: username,
                password: password,
            }).then((response) => {
                console.log(response);
                if (response.data.message) {
                    setLoginStatus(response.data.message);
                } else {
                    setLoginStatus(response.data[0].username);
                    window.location.reload(true);
                    history.push("/");
                }
            });
    };

    useEffect(() => {
        Axios.get("http://3.93.4.5:5000/signin").then((response) => {
            if (response.data.user) {
                history.push("/");
            }
        })
    }, [])

    return (
		<div className="signin-wrapper">
			<div className="signin-form-wrapper">
				<h2>Login</h2>
				<form>
					<div className="username">
						<label><b>Username:</b></label>
						<input 
                        type="text"
                        placeholder='Username...'
							onChange={(event) => {
								setUsername(event.target.value);
							}}
						/>
					</div>
					<div className="password">
						<label><b>Password:</b></label>
						<input 
                        type="password"
                        placeholder='Password...'
							onChange={(event) => {
								setPassword(event.target.value);
							}}
						/>
					</div>
					<div className="submit">
						<button onClick={login}>Login</button>
						<h1>{loginStatus}</h1>
					</div>
				</form>
			</div>
		</div>
	);
}
export default SignIn;
