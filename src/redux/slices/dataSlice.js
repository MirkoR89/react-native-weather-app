import { createSlice } from "@reduxjs/toolkit";
import { fetchData, fetchDetails } from "../thunks/fetchData";

const initialState = {
    data: [],
    details: {},
    loading: false,
    error: '',
}

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.loading = false;
                state.data.push(action.payload);
            })
            .addCase(fetchData.rejected, (state, action) => {
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
    },
});

export default dataSlice.reducer;
