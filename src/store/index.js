import {configureStore} from "@reduxjs/toolkit";

import tourReducers from "../reducers/tourReducers";
import trackReducers from "../reducers/trackReducers";

export const store = configureStore({
    reducer: {
        tour: tourReducers,
        tracks: trackReducers
    },
    devTools:true,
})