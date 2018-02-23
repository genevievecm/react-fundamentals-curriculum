import React, { Component } from 'react';
import Background from '../images/pattern.svg';
import Form from './Form';
import Forecast from './Forecast';
import { getWeather } from './utils/api';

export default class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            search: '',
            searchSuccess: false
        }
        this.handleSearchData = this.handleSearchData.bind(this);
    }

    handleSearchData(location) {
        this.setState(() => {
            return {
                search: getWeather(location),
                searchSuccess: true
            }
        })
    }

    render() {
        const { weatherData, searchSuccess } = this.state;

        return (
            <div>
                {!searchSuccess &&
                    <div className="home-container" style={{ backgroundImage: `url(${Background})` }}>
                        <h1 className="heading">Enter a City and Province</h1>
                        <Form flexDirection={'column'} search={this.handleSearchData} />
                    </div>}

                {searchSuccess &&
                    <Forecast data={weatherData} />}
            </div>
        )
    }
}