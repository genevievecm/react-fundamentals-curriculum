import React, { Component } from 'react';
import InputField from './InputField';
import Button from './Button';

export default class Home extends Component {

    render() {
        return (
            <div className="home-container">
                <h1 className="heading">Enter a City and Province</h1>
                <div className="inputs-container" style={{ flexDirection: "column" }}>
                    <InputField />
                    <Button />
                </div>
            </div>
        )
    }
}