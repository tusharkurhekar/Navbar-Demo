import React from "react";
import { Route, NavLink, HashRouter, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import AboutUs from "./Components/About/AboutUs";
import ContactUs from "./Components/Contact/ContactUs";
import Jobs from "./Components/Jobs/Jobs";

function App() {
  return (
    <HashRouter>
      <div>
        <div>
          <h1>Tushar's Crypto Market</h1>
          <ul className="header">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/AboutUs">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/Jobs">Jobs</NavLink>
            </li>
            <li>
              <NavLink to="/ContactUs">Contact Us</NavLink>
            </li>
          </ul>
        </div>
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/AboutUs" component={AboutUs} />
            <Route path="/ContactUs" component={ContactUs} />
            <Route path="/Jobs" component={Jobs} />
          </Switch>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
