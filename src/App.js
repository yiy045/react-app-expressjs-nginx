import React from "react";
import Registration from "./Pages/LoginPage/LoginPage";
import Home from "./Pages/HomePage/HomePage"
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
      <div>
        <nav>
          <Link to="/">Home</Link>
          &nbsp;
          <Link to="/registration">Register</Link>
          </nav>
        <Switch>
          <Route path="/registration">
            <Registration />
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