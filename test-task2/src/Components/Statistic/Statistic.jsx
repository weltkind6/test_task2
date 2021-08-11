import React from 'react';
import './Statistic.scss'
import TabButton from "./TabButton/TabButtons";
import Tab from "./Tab/Tab";
import Nearest from "./Nearest/Nearest";
import tab from '../../img/tab.svg'
import chart from '../../img/chart.svg'

const Statistic = () => {

    const [state, setState] = React.useState(false)
    const showMenu = () => {
        setState(!state)
    }

    return (
        <div className='Statistic'>
            <div className="Statistic__wrapper">
                <div className='tab-wrapper'>
                    <div className='tab-button' onClick={showMenu}>
                        <TabButton
                            tabImg={tab}
                            chartImg={chart}
                        />
                    </div>
                    <Tab state={state}/>
                </div>
                <Nearest/>
            </div>
        </div>
    );
};

export default Statistic;