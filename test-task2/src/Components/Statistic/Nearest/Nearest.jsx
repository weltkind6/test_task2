import React from 'react';
import './Nearest.scss'
import calendar from '../../../img/Nearest.svg'

const Nearest = () => {
    return (
        <div className='Nearest'>
            <div className='Nearest__wrapper'>
                <img src={calendar} alt="calendar" className='calendar'/>
                <span className='Nearest__title'>Ближайшие</span>
            </div>
        </div>
    );
};

export default Nearest;