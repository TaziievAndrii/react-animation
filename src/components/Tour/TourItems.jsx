import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import Section from "../Section/Section";
import SectionTitle from "../Title/SectionTitle";
import TourItem from "./TourItem";

import {getTourItems} from "../../reducers/tourReducers";
import {Link} from "react-router-dom";

const TourItems = () => {
    const dispatch = useDispatch();

    const {items = [], isLoading} = useSelector(({tour}) => tour)

    useEffect(() => {
        dispatch(getTourItems())
    }, [dispatch])

    const filtered = items
        .filter(({soldOut, ticketLink}) => !soldOut && ticketLink)
        .filter((_, i) => i < 5)

    return (
        <Section className={`tour`}>
            <div className="container">
                <SectionTitle text={'Concerts'}/>
                {isLoading ? "Loading" : (
                    <ul className={`tour-list`}>
                        {filtered.map((item, i) => (
                            <TourItem {...item} i={i} key={item.sys.id}/>
                        ))}
                    </ul>
                )}
                <Link to={`/tour`} className={`button-more`}>
                    All concerts
                </Link>
            </div>
        </Section>
    )
}

export default TourItems;