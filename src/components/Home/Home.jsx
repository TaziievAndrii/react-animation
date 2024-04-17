import React from 'react';

import MainBanner from "./MainBanner";
import TourItems from "../Tour/TourItems";

const Home = () => {
    return (
        <main className="main">
            <MainBanner/>
            <TourItems/>
        </main>
    );
};

export default Home;