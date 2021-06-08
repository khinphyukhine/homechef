import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./home/Home";
import Fridge from "./fridge/Fridge"

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/fridge/Fridge' component={Fridge}/>
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);
