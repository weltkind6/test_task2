import React from 'react';
import tab from "../../../img/tab.svg";

const TabArrow = (props) => {


    return (
        <div style={props.rotateTab ? props.rotateStyle : null}>
            <img src={tab} alt="tab"/>
        </div>
    );
};

export default TabArrow;

// style={rotateTab ? rotateStyle : null} onClick={myClick}