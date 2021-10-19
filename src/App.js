import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";
import MenuAppBar from "./Components/Header";
import SideBar from "./Components/SideBar";
import Students from "./Components/Students";
import CLasses from "./Components/Classes";



function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" exact>                                                                                 
            <Login />
          </Route>
          <Route path="/home">
            <MenuAppBar />
            <Home />
            <SideBar />
          </Route>
          <Route path="/Student">
            <MenuAppBar />
            <Students />
            <SideBar />
          </Route>
          <Route path="/Teacher">
            <MenuAppBar />
            <Home />
            <SideBar />
          </Route>{" "}
          <Route path="/Class">
            <MenuAppBar />
            <CLasses />
            <SideBar />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;