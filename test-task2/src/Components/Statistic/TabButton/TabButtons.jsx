import React from 'react';
import './TabButtons.css'

const TabButtons = props => {
    return (
        <div className={props.className}>
            <div className='tabItems'>
                <img src={props.chartImg} alt="stat1"/>
            </div>
            <span className={props.className2}>Статистика</span>
            <div>
                <img src={props.tabImg} alt="tab"/>
            </div>
        </div>
    );
};

export default TabButtons;