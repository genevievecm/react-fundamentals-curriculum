import React, { Component } from 'react';
import Form from './Form';

export default class NavBar extends Component {

    constructor(props){
        super(props);
        this.state = {
            search: ''
        }
        this.handleSearchData = this.handleSearchData.bind(this);
    }

    handleSearchData(data) {
        this.setState(() => {
            return {
                search: data
            }
        })
    }

    render() {
        console.log(this.state.search);
        return (
            <div className="navbar">
                <h1>Weather App</h1>
                <Form flexDirection={'row'} search={this.handleSearchData} />
            </div>
        );
    }
}