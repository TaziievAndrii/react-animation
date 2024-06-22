import React from 'react';

import MainBanner from "./MainBanner";
import TourItems from "../Tour/TourItems";
import TourBanner from "./TourBanner";
import Tracks from "../Tracks/Tracks";

const Home = () => {
    return (
        <main className="main">
            <MainBanner/>
            <TourItems/>
            <TourBanner/>
            <Tracks/>
        </main>
    );
};

export default Home;