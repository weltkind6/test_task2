import React from 'react';
import './Statistic.scss'
import tab from '../../img/tab.svg'

const Statistic = () => {
    return (
        <div className='Statistic'>
            <div className="Statistic__wrapper">
                <div className='tab-wrapper'>
                    <div className='tab-button'>
                        <div>123</div>
                        <div>Статитстика</div>
                        <img src={tab} alt='tab'/>
                    </div>
                    <div className='tab'>
                        <div className='tab-dropDown'>
                            <a href="#">Футбол</a>
                            <a href="#">Баскетбол</a>
                            <a href="#">Волейбол</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistic;