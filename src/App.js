import React from "react"
import './App.css';
import { Route, Switch } from "react-router-dom";
import EducationCRM from "./education CRM/Education CRM";
import Feature from "./component/Feature";
import Home from "./component/Home";
import Performance from "./Performance Evaluation System/Performance";
import EvaluationForm from "./Evaluation Form/Evaluation Form";
import Contact from "./component/Contact";
import GameManagementSystem from "./Game Management System/Game Management System";
function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {/* <Route path="/navbars">
          <Navbars />
        </Route> */}
        <Route path="/Feature">
          <Feature />{" "}
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
        <Route path="/Education CRM">
          <EducationCRM />
        </Route>

        <Route path="/Evaluation Form">
          <EvaluationForm />
        </Route>
        <Route path="/Performance">
        <Performance/>
          </Route>
        <Route path="/Game Management System">
          <GameManagementSystem />
        </Route>
      </Switch>
    </>
  );
}

export default App;
