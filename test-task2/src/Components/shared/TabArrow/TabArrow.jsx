import React from 'react';
import tab from "../../../img/tab.svg";

const TabArrow = (props) => {

    const rotateStyle = {
        transform: "rotate(180deg)"
    };

    return (
        <div style={props.rotateTab ? rotateStyle : null}>
            <img src={tab} alt="tab"/>
        </div>
    );
};

export default TabArrow;

