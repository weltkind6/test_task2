import React from 'react';
import stat1 from "../../../img/stat1.svg";
import stat2 from "../../../img/stat2.svg";
import stat3 from "../../../img/stat3.svg";
import tab from "../../../img/tab.svg";
import './TabButtons.css'
import Tab from "../Tab/Tab";


const TabButton = () => {


    return (
        <>
            <div className='stat-items'>
                <img src={stat1} alt="stat1"/>
                <img src={stat2} alt="stat2"/>
                <img src={stat3} alt="stat3"/>
            </div>
            <span>Статитстика</span>
            <div>
                <img src={tab} alt='tab'/>
            </div>
        </>
    );
};

export default TabButton;