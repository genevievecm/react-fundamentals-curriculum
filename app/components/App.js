import React, { Component } from 'react';
import Background from '../images/pattern.svg';
import NavBar from './NavBar';
import Home from './Home';

export default class App extends Component {
    render() {
        return (
            <div className="container" style={{ backgroundImage: `url(${Background})` }}>
                <NavBar />
                <Home />
            </div>
        )
    }
}