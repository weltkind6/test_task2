import React from 'react';
import './PlayerDesctop.css'
import userPic from '../../../img/user.svg'
import TabButtons from "../../Statistic/TabButton/TabButtons";
import tab from "../../../img/tab.svg";
import Tab from "../../Statistic/Tab/Tab";


const PlayerDescTop = (props) => {

    return (
        <div className='Player__descTop'>
            <h3>props is here!</h3>
            <div>
                <div onClick={props.showMenu}>
                    <TabButtons tabImg={tab} chartImg={userPic}/>
                </div>
                <Tab state={props.state}/>
                <div>Nearest</div>
                <div>Game reports</div>
                <div>Orders history</div>
                <div>Exit =></div>
            </div>
        </div>
    );
};

export default PlayerDescTop;