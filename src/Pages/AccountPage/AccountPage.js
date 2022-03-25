import { useState } from "react";
import "./AccountPage.css"
import Axios from "axios";
import { useHistory } from "react-router-dom";

function getAccountInformation() {
	

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
