import React from 'react';
import tab from "../../../img/tab.svg";

const TabArrow = () => {

    const [rotateTab, setRotateTab] = React.useState(false)

    const myClick = () => {
        setRotateTab(!rotateTab);
    };

    const rotateStyle = {
        transform: "rotate(180deg)"
    };

    return (
        <div style={rotateTab ? rotateStyle : null} onClick={myClick}>
            <img src={tab} alt="tab"/>
        </div>
    );
};

export default TabArrow;