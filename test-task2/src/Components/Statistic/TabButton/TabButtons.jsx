import React from 'react';
import './TabButtons.css'
import TabArrow from "../../shared/TabArrow/TabArrow";
import useRotate from "../../hooks/useRotate";

const TabButtons = props => {

    const [rotateTab, getRotateTab] = useRotate(false)

    // const myClick = () => {
    //     setRotateTab(!rotateTab);
    // };

    const rotateStyle = {
        transform: "rotate(180deg)"
    };

    return (
        <div className={props.className} onClick={getRotateTab}>
            <div className='tabItems'>
                <img src={props.chartImg} alt="stat1"/>
            </div>
            <span className={props.className2}>Статистика</span>
            <div>
                <TabArrow rotateStyle={rotateStyle} rotateTab={rotateTab}/>
            </div>
        </div>
    ); 
};

export default TabButtons;