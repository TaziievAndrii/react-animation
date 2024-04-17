import React from 'react';

import Section from "../Section/Section";

import gif from "../../images/text.gif"

const MainBanner = () => (
    <Section>
        <div className="container">
            <h1 style={{fontSize: 0, lineHeight: 0}}>Evanescence</h1>
            <div className="banner">
                <picture className={`banner-video`} style={{width: '100%', height: 'auto'}}>
                <source src={gif} type="image/gif"/>
                <img src={gif}/>
            </picture>
        </div>
    </div>
</Section>
)


export default MainBanner;