import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {request} from "../utils/common";
import {trackItemCollectionQuery} from "../utils/queris";

const initialState = {
    items: [],
    isLoading: false
}

export const getTrackItems = createAsyncThunk('trackItems/getTrackItems',
    async (_, thunkAPI) => {
        try {
            const data = await request(trackItemCollectionQuery)

            const { items } = data.trackCollection

            return items
        } catch (e) {
            console.log(e)
            return thunkAPI.rejectWithValue(e)
        }
    })

const trackItemsSlice = createSlice({
    name: "trackItems",
    initialState,
    extraReducers: builder => {
        builder
            .addCase(getTrackItems.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(getTrackItems.fulfilled, (state, {payload}) => {
                state.isLoading = false;
                state.items = payload;
            })
            .addCase(getTrackItems.rejected, (state) => {
                state.isLoading = false;
            })
    }
})

export default trackItemsSlice.reducer;