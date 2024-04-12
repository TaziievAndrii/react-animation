import React from 'react';

import Section from "../Section/Section";

import video from "../../images/video.mp4"

const MainBanner = () => (
    <Section>
        <div className="container">
            <h1 style={{fontSize: 0, lineHeight: 0}}>Evanescence</h1>
            <div className="banner">
                <video className={`banner-video`} width={1000} height='auto' autoPlay loop muted>
                    <source src={video} type="video/mp4"/>
                </video>
            </div>
        </div>
    </Section>
);


export default MainBanner;