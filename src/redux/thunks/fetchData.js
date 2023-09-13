import { API_KEY } from '@env';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getDateTime, kelvinToCelsius } from '../../utils/functions';

export const fetchData = createAsyncThunk('api/fetchData', async (city) => {
    const apiKey = API_KEY

    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);

        return {
            name: response.data.name,
            temp: kelvinToCelsius(response.data.main.temp).toString(),
            day:getDateTime(response.data.sys.sunrise, response.data.timezone).day,
            date: getDateTime(response.data.sys.sunrise, response.data.timezone).date,
            time: getDateTime(response.data.sys.sunrise, response.data.timezone).time,
            weather: response.data.weather[0]
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
});
