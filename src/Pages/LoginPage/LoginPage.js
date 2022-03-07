import { useState } from "react";
import "./LoginPage.css"
import Axios from "axios";

function Registration() {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [address, setAddress] = useState("");
	const [password, setPassword] = useState("");
	const [firstname, setFirstname] = useState("");
	const [lastname, setLastname] = useState(0);
	const [phone, setPhone] = useState("");

	const addEmployee = () => {
		Axios.post("/create", {
			username: username,
			email: email,
			address: address,
			password: password,
			firstname: firstname,
      lastname: lastname,
      phone: phone,
		}).then((response) =>{
			if (response.data.message) {
				console.log(response.data.message)
			}
		});
	};

	return (
		<div className="information">
		  <label>Username:</label>
		  <input type="text"
		    onChange={(event) => {
			    setUsername(event.target.value);
		  }}
      />
		  <label>Password:</label>
		  <input type="text"
		    onChange={(event) => {
		  	  setPassword(event.target.value);
		  }}
      />
		  <label>email:</label>
		  <input type="text"
		    onChange={(event) => {
		  	  setEmail(event.target.value);
		  }}
		  />
		  <label>Address:</label>
		  <input type="text"
		    onChange={(event) => {
			    setAddress(event.target.value);
		  }}
		  />
		  <label>First Name:</label>
		  <input type="text"
		    onChange={(event) => {
			    setFirstname(event.target.value);
		  }}
		  />
      <label>Last Name:</label>
      <input type="text"
        onChange={(event) => {
          setLastname(event.target.value);
      }}
      />
      <label>Phone Number:</label>
      <input type="text"
        onChange={(event) => {
          setPhone(event.target.value);
      }}
      />
      
		  <button onClick={addEmployee}>Register</button>
		</div>
	);
}

export default Registration;