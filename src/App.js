import React from "react";
import Registration from "./Pages/RegistrationPage/RegistrationPage";
import Home from "./Pages/HomePage/HomePage"
import Product from "./Pages/ProductPage/ProductPage"
import "./GeneralStyles.css";
import home from "../src/images/homebutton.png"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  const basename = process.env.REACT_APP_BASENAME || null;
  return ( 
    <Router basename={basename}>
      <div style = {{background: "lightgrey"}}>
        <nav>
          &nbsp;
          <Link to="/">
            <img src = {home} alt = ""
            width="50"
            height="50" />
          </Link>
          &nbsp;
          &nbsp;
          <Link to="/registration">Registration</Link>
          &nbsp;
          &nbsp;
          <Link to="/product">Product</Link>
          </nav>

        <Switch>
          <Route path="/registration">
            <Registration />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
