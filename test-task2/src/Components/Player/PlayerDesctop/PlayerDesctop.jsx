import React from 'react';
import './PlayerDesctop.css'
import userPic from '../../../img/user.svg'
import TabButtons from "../../Statistic/TabButton/TabButtons";
import tab from "../../../img/tab.svg";
import Tab from "../../shared/Tab/Tab";


const PlayerDescTop = (props) => {

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

                <nav>
                    <ul style={{color: 'black'}}>
                        <li style={{padding: 0}}>Ближайшие игры</li>
                        <li>Игровые отчеты</li>
                        <li>История заказов</li>
                        <li>Выйти</li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default PlayerDescTop;