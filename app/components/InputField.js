import React, { Component } from 'react';

export default class InputField extends Component {

    render() {
        return (
            <input
                className="input"
                type="text"
                autoComplete="off"
                placeholder="Toronto, Ontario"
            />
        )
    }
}