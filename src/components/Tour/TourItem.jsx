import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';


const TourItem = ({
                      date,
                      city,
                      place,
                      ticketLink,
                      videoLink,
                      soldOut,
                      i
                  }) => {
    return (
        <li>
            <ScrollAnimation
                children={'tour-item'}
                animateIn={'fadeInLeft'}
                animateOut={'fadeOutRight'}
                delay={i * 100}
                offset={260}
            >
                <div className="tour-item__info">
                    <div className="tour-item__date">
                        {new Date(date).toLocaleDateString('en-En', {
                            month: 'numeric',
                            day: 'numeric',
                            year: 'numeric'
                        })}
                    </div>
                </div>
            </ScrollAnimation>
        </li>
    );
};

export default TourItem;