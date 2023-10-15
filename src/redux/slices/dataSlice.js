import { createSlice } from "@reduxjs/toolkit";
import { fetchCitiesList, fetchDataWeather, fetchDetails } from "../thunks/fetchData";

const initialState = {
    data: [],
    citiesList: [],
    details: {},
    loading: false,
    error: '',
}

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        removeCard(state, action) {
            state.data = state.data.filter(item => item.name !== action.payload)
        },
        clearSearchBar(state) {
            state.citiesList = []
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDataWeather.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchDataWeather.fulfilled, (state, action) => {
                state.loading = false;
                state.data.push(action.payload);
            })
            .addCase(fetchDataWeather.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchDetails.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchDetails.fulfilled, (state, action) => {
                state.loading = false;
                state.details = { ...action.payload };
            })
            .addCase(fetchDetails.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchCitiesList.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCitiesList.fulfilled, (state, action) => {
                state.loading = false;
                state.citiesList = action.payload
            })
            .addCase(fetchCitiesList.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    },
});

// Extract the action creators object and the reducer
const { actions, reducer } = dataSlice
// Extract and export each action creator by name
export const { removeCard, clearSearchBar } = actions
// Export the reducer, either as a default or named export
export default reducer
