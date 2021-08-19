import React from 'react';
import './TabButtons.css'
import TabArrow from "../../shared/TabArrow/TabArrow";
import useRotate from "../../hooks/useRotate";

const TabButtons = props => {

    const [rotateTab, getRotateTab] = useRotate(false)

    return (
        <div className={props.className} onClick={getRotateTab}>
            <div className='tabItems'>
                <img src={props.chartImg} alt="stat1"/>
            </div>
            <span className={props.className2}>Статистика</span>
            <div>
                <TabArrow rotateTab={rotateTab}/>
            </div>
        </div>
    );
};

export default TabButtons;