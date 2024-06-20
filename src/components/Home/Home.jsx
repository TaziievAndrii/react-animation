import React from 'react';

import MainBanner from "./MainBanner";
import TourItems from "../Tour/TourItems";
import TourBanner from "./TourBanner";

const Home = () => {
    return (
        <main className="main">
            <MainBanner/>
            <TourItems/>
            <TourBanner/>
        </main>
    );
};

export default Home;