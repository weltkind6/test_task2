import React from 'react';
import './PlayerDesctop.css'
import userPic from '../../../img/user.svg'
import TabButtons from "../../Statistic/TabButton/TabButtons";
import tab from "../../../img/tab.svg";
import Tab from "../../shared/Tab/Tab";
import calendar from '../../../img/calendar.png'
import report from '../../../img/report.png'
import vector from '../../../img/Vector.png'
import logOut from '../../../img/log out.png'


const PlayerDescTop = props => {

    return (
        <div className='Player__descTop'>
            <div className='Player__descTop-wrapper'>
                <div onClick={props.showMenu}>
                    <TabButtons
                        tabImg={tab}
                        chartImg={userPic}
                        className={`${'TabButtons-wrapper-descTop'}`}
                        className2={`${'TabButtons-span'}`}
                    />
                </div>

                <Tab state={props.state} name={'Ilya'} tabStyle={`${'tabStyle'}`}/>

                <nav className='descTop-nav'>
                    <div style={{color: 'black'}} className='descTop-nav-wrapper'>
                        <div style={{padding: 0}}>
                            <img src={calendar} alt="calendar" className='descTop-nav-img'/>
                            <span>Ближайшие игры</span>
                        </div>
                        <div>
                            <img src={report} alt="report" className='descTop-nav-img'/>
                            <span>Игровые отчеты</span>
                        </div>
                        <div>
                            <img src={vector} alt="vector" className='descTop-nav-img vectorImg'/>
                            <span>История заказов</span>
                        </div>
                        <div style={{marginTop: '60px'}}>
                            <img src={logOut} alt="logOut" className='descTop-nav-img'/>
                            <div>Выйти</div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default PlayerDescTop;