import React from 'react';
import './PlayerDesctop.css'
import userPic from '../../../img/user.svg'
import TabButtons from "../../Statistic/TabButton/TabButtons";
import tab from "../../../img/tab.svg";
import Tab from "../../shared/Tab/Tab";
import DescTopNav from "./DescTopNav/DescTopNav";


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
                <DescTopNav />
            </div>
        </div>
    );
};

export default PlayerDescTop;