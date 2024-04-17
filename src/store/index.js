import {configureStore} from "@reduxjs/toolkit";

import tourReducers from "../reducers/tourReducers";

export const store = configureStore({
    reducer: {
        tour: tourReducers
    },
    devTools:true,
})