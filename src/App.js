import './App.css';
import 'antd/dist/antd.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import LogIn from "./Components/Login"
import Home from "./Components/Home"
import Header from './Components/Header';
import SideBar from './Components/SideBar';

function App() {
  return (
    <div className="app">

      <Router>


        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact>
            <LogIn />
          </Route>
          <Route path="/users">

          </Route>
          <Route path="/home">
            <Header />
            <Home />
            <SideBar />

          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
