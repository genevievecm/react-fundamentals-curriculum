import axios from 'axios';

const FORECAST = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=';
const API_KEY = '&type=accurate&appid=32c5ffb87028a14d9034601ba5f9da63';
const METRIC_UNIT = '&units=metric';
const DAYS = '&cnt=5';

export const getWeather = (location) => {
    return axios.get( FORECAST + location + API_KEY + METRIC_UNIT + DAYS )
        .then((location) => {
            console.log(location.data);
        })
}