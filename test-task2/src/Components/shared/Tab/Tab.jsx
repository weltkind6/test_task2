import React from 'react';
import './Tab.css'

const Tab = ({state}) => {
    return (
        <div className='TabStyle'>
            <div className={`tab ${!state ? 'tabInvisible' : 'tab-dropDown'}`}>
                <div className='tab-dropDown'>
                    <a href="#">Футбол</a>
                    <a href="#">Баскетбол</a>
                    <a href="#">Волейбол</a>
                </div>
            </div>
        </div>
    );
};

export default Tab;