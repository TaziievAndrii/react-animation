import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import ScrollAnimation from 'react-animate-on-scroll';

import {getTrackItems} from "../../reducers/trackReducers";

import Section from "../Section/Section";
import SectionTitle from "../Title/SectionTitle";
import Icon from "../Icon/Icon";
import {getLocaleDateString} from "../../utils/common";

const Tracks = () => {
    const dispatch = useDispatch()
    const {items = [], isLoading} = useSelector(({tracks}) => tracks)

    useEffect(() => {
        dispatch(getTrackItems())
    }, [dispatch])
    console.log('items', items)
    return (
        <Section className={`tracks-section`}>
            <div className="container">
                <SectionTitle text={`Tracks`}/>

                {isLoading ? 'Loading...' : (
                    items
                        .filter((_, i) => i < 3)
                        .map(({cover, title, sys: {id}, date}) => (
                            <div className={`tracks`}>
                                <ScrollAnimation key={id} className={`track-item`} animateIn={`fadeInLeft`}
                                                 animateOut={`fadeOutRight`}>
                                    <div className="track">
                                        <div className="track-image">
                                            <img src={cover.url} alt={title}/>
                                            <Icon name={`pause`}/>
                                        </div>
                                        <p className="track-date">
                                            {getLocaleDateString(date, {mont: 'short'})}
                                        </p>
                                        <h3 className="track-title">
                                            {title}
                                        </h3>
                                    </div>
                                </ScrollAnimation>
                            </div>

                        ))
                )}
            </div>
        </Section>
    );
};

export default Tracks;