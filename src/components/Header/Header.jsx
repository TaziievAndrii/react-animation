import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import {Link} from "react-router-dom";

import Logo from "../Logo/Logo";
import Socials from "../Socials/Socials";

import {MENU} from "../../utils/constans";

const Header = () => (
    <section className={`header`}>
        <div className="container">
            <header>
                <Logo/>
                <nav className={`menu`}>
                    {MENU.map(({link, name}, i) =>
                        <ScrollAnimation key={link} className={`menu-item`} animateIn='fadeIn' animateOut='fadeOut'
                                         delay={i * 100} duration={100} offset={0}>
                            <Link to={`/${link}`}>
                                {name}
                            </Link>
                        </ScrollAnimation>)}
                </nav>
                <Socials/>
            </header>
        </div>
    </section>
);


export default Header;