import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {request} from "../utils/common";
import {tourItemCollectionQuery} from "../utils/queris";

const initialState = {
    items: [],
    isLoading: false
}

export const getTourItems = createAsyncThunk('tourItems/getTourItems',
    async (_, thunkAPI) => {
        try {
            const data = await request(tourItemCollectionQuery)

            const { items } = data.tourItemCollection

            return items
        } catch (e) {
            console.log(e)
            return thunkAPI.rejectWithValue(e)
        }
    })

const tourItemsSlice = createSlice({
    name: "tourItems",
    initialState,
    extraReducers: builder => {
        builder
            .addCase(getTourItems.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(getTourItems.fulfilled, (state, {payload}) => {
                state.isLoading = false;
                state.items = payload;
            })
            .addCase(getTourItems.rejected, (state) => {
                state.isLoading = false;
            })
    }
})

export default tourItemsSlice.reducer;