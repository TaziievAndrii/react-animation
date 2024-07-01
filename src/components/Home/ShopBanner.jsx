import React from 'react';
import {Link} from "react-router-dom";
import ScrollAnimation from 'react-animate-on-scroll';

import Section from "../Section/Section";

import logo from '../../images/symbol.svg'
import bannerImg from '../../images/Evanescence__logo.svg'

const ShopBanner = () => {
    return (
        <Section className={`shop-banner__section`}>
            <div className="container">
                <div className="shop-banner__banner">
                    <Link to={`/shop`} className={`shop-banner`}>
                        <ScrollAnimation className={`shop-banner__text`} animateIn='fadeInLeft' animateOut='fadeOutLeft'
                                         duration={3} offset={0}>
                            <p className="shop-banner__subtitle">
                                New merchandise
                            </p>
                            <p className="shop-banner__title">
                                Shop
                            </p>
                        </ScrollAnimation>
                        <ScrollAnimation
                            className={`shop-banner__logo`}
                            animateIn='fadeInRight'
                            animateOut='fadeOutRight'
                            duration={3}
                            offset={0}
                        >
                            <img src={logo} alt="Evanescenceshop"/>
                        </ScrollAnimation>
                        <ScrollAnimation
                            className={`shop-banner__image`}
                            animateIn='fadeInRight'
                            animateOut='fadeOutRight'
                            duration={3}
                            offset={0}
                        >
                            <img src={bannerImg} alt="banner"/>
                        </ScrollAnimation>
                    </Link>
                </div>
            </div>
        </Section>
    );
};

export default ShopBanner;