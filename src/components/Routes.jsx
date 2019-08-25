import React, {Component} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom'
import Todo from "./Todo";
import About from "./About";

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route path="/todos" component={Todo}/>
                <Route path="/about" component={About}/>
                <Redirect to="/todos" from="*"/>
            </Switch>
        );
    }
}

export default Routes;
