import React from 'react';
import './TabButtons.css'
import TabArrow from "../../shared/TabArrow/TabArrow";

const TabButtons = props => {
    return (
        <div className={props.className} onClick={() => console.log('Hello world?')}>
            <div className='tabItems'>
                <img src={props.chartImg} alt="stat1"/>
            </div>
            <span className={props.className2}>Статистика</span>
            <div>
                <TabArrow/>
            </div>
        </div>
    );
};

export default TabButtons;