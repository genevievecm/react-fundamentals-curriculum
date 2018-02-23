import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from './NavBar';
import Home from './Home';
import Forecast from './Forecast';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Navbar />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/forecast" component={Forecast} />
                </div>
            </Router>
        )
    }
}