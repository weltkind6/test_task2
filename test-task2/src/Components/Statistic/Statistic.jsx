import React from 'react';
import './Statistic.scss'
import tab from '../../img/tab.svg'
import stat1 from '../../img/stat1.svg'
import stat2 from '../../img/stat2.svg'
import stat3 from '../../img/stat3.svg'

const Statistic = () => {
    return (
        <div className='Statistic'>
            <div className="Statistic__wrapper">
                <div className='tab-wrapper'>
                    <div className='tab-button'>
                        <div className='stat-items'>
                            <img src={stat1} alt="stat1"/>
                            <img src={stat2} alt="stat2"/>
                            <img src={stat3} alt="stat3"/>
                        </div>
                        <span>Статитстика</span>
                        <div>
                            <img src={tab} alt='tab'/>
                        </div>
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