import { useState } from "react";
import "./AccountPage.css"
import Axios from "axios";
import { useHistory } from "react-router-dom";

function getAccountInformation() {
	
  Axios.get("http://localhost:5000/register", data).then((response) => {
			if (response.data.error) {
				alert(response.data.error);
				console.log("error!");
			} else {
				if (response.data.message) {
					setRegistrationStatus(response.data.message);
				}
			}
		});

  

	return (
		<div className="information">
		  <label>Username:</label>
		  <label>email:</label>
		  <label>Address:</label>
		  <label>First Name:</label>
      <label>Last Name:</label>
      <label>Phone Number:</label>
		</div>
	);
}

export default getAccountInformation;
