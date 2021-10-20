import React from "react"
import './App.css';
import { Route, Switch } from "react-router-dom";
import Navbars from "./education CRM/Navbars";
import NavbarE  from "./Evaluation Form/NavbarE"
import Home from "./component/Home";
import Nav from "./Game Management System/Nav";
function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/navbars">
          <Navbars />
        </Route>
        <Route path="/navbare">
          <NavbarE />{" "}
        </Route>
        <Route path="/nav">
          <Nav />
        </Route>
      </Switch>
    </>
  );
}

export default App;
