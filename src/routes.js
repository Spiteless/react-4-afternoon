import React from 'react'
import {Switch, Route} from 'react-router-dom'  
import Home from "./components/Home/Home.js"
import About from "./components/About/About.js"

export default (
    <Switch>
        <Route component={Home} exact path="/"/>
        <Route component={About} exact path="about"/>
    </Switch>
);