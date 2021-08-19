import React from 'react';
import './Statistic.scss'
import TabButton from "./TabButton/TabButtons";
import Tab from "../shared/Tab/Tab";
import Nearest from "./Nearest/Nearest";
import chart from '../../img/chart.svg'


const Statistic = ({state, showMenu}) => {

    return (
        <div className='Statistic'>
            <div className="Statistic__wrapper">
                <div className='tab-wrapper'>
                    <div className='tab-button' onClick={showMenu}>
                        <TabButton
                            chartImg={chart}
                            className={`${'TabButtons-wrapper'}`}
                        />
                    </div>
                    <Tab
                        state={state}
                    />
                </div>
                <Nearest/>
            </div>
        </div>
    );
};

export default Statistic;