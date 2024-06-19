import {createRoot} from "react-dom/client";
import React from "react";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

import App from "./components/App/App";

import {store} from "./store";

import "animate.css/animate.compat.css"


const root = createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
)
