import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchData = createAsyncThunk('api/fetchData', async (params) => {
    const apiKey = 'f4f50cabdb55351cc662ce1ae9cbc7bc'

    try {
        const response = await axios.get(`https://api.openweathermap.org/data/3.0/onecall?${params}&appid=${apiKey}`);

        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
});
