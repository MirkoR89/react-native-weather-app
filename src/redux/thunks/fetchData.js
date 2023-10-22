import { API_KEY } from '@env';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getDateTime, kelvinToCelsius } from '../../utils/functions';

const apiKey = API_KEY

export const fetchDataWeather = createAsyncThunk('api/fetchData', async (city) => {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);

        return {
            name: response.data.name,
            coord: response.data.coord,
            temp: kelvinToCelsius(response.data.main.temp).toString(),
            day: getDateTime(response.data.sys.sunrise, response.data.timezone).day,
            date: getDateTime(response.data.sys.sunrise, response.data.timezone).date,
            time: getDateTime(response.data.sys.sunrise, response.data.timezone).time,
            weather: response.data.weather[0]
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
});

export const fetchDetails = createAsyncThunk('api/fetchDetails', async (coord) => {
    try {
        const lat = coord.lat
        const lon = coord.lon
        const response = await axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`);

        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
});

export const fetchCitiesList = createAsyncThunk('api/fetchCitiesList', async (cityName) => {
    try {
        const response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=10&appid=${apiKey}`);

        return response.data.map(item => (
            {
                name: item.name,
                country: item.country,
                state: item.state,
                coord: { lat: item.lat, lon: item.lon }
            }))
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
});
