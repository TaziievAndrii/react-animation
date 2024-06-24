import React from 'react';
import {Link} from "react-router-dom";
import ScrollAnimation from 'react-animate-on-scroll';

import Section from "../Section/Section";

const ShopBanner = () => {
    return (
        <Section className={`shop-banner__section`}>
            <div className="ontainer">
                <div className="shop-banner__banner">
                    <Link to={`/shop`}>
                        <ScrollAnimation className={`shop-banner__text`} animateIn='fadeInLeft' animateOut='fadeOutLeft'
                                         duration={3} offset={0}>
                            <p className="shop-banner__subtitle">
                                New merchandise
                            </p>
                            <p className="shop-banner__title">
                                Evanescence shop
                            </p>
                        </ScrollAnimation>
                    </Link>
                </div>
            </div>
        </Section>
    );
};

export default ShopBanner;