import React, { Component } from 'react';
import InputField from './InputField';
import Button from './Button';

export default class NavBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            location: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const value = event.target.value;
        this.setState(() => {
            return {
                location: value
            }
        })
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div className="navbar">
                <h1>Weather App</h1>
                <div className="inputs-container" style={{ flexDirection: "row" }}>
                    <InputField />
                    <Button />
                </div>
            </div>
        );
    }
}