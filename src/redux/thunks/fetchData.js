import { API_KEY } from '@env';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchData = createAsyncThunk('api/fetchData', async (params) => {
    const apiKey = API_KEY

    try {
        const response = await axios.get(`https://api.openweathermap.org/data/3.0/onecall?${params}&appid=${apiKey}`);

        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
});
