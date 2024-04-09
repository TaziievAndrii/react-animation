import React from 'react';

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AppRoutes from "./AppRoutes";

const App = () => (
    <div className={`app`}>
        <Header/>
        <AppRoutes/>
        <Footer/>
    </div>
);


export default App;