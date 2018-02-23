import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Form extends Component {

    constructor(props){
        super(props);
        this.state = {
            location: 'Toronto, Ontario',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event){
        var value = event.target.value;
        this.setState(() => {
            return {
                location: value
            }
        })
    }

    handleClick(event) {
        this.props.search(this.state.location);
    }

    render() {
        const { location } = this.state;
        const { flexDirection, match } = this.props;

        return (
            <div className="form-container" style={{ flexDirection: flexDirection }}>
                <input
                    className="input"
                    type="text"
                    placeholder="Toronto, Ontario"
                    value={location}
                    onChange={this.handleChange}
                />
                <button
                    className="btn"
                    onClick={this.handleClick}>
                    Get Weather
                </button>
            </div>
        )
    }
}