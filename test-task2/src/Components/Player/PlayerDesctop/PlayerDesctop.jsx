import React from 'react';
import './PlayerDesctop.css'
import TabArrow from "../../shared/Tab/TabArrow";
import userPic from '../../../img/user.svg'

const PlayerDescTop = () => {
    return (
        <div className='Player__descTop'>
            <h3>Player desctop</h3>
            <div>
                <div>
                    <div className='events-block'>
                        <img src={userPic} alt="userPic"/>
                        <span>Статистика</span>
                        <TabArrow/>
                    </div>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div>Nearest</div>
                <div>Game reports</div>
                <div>Orders history</div>
                <div>Exit =></div>
            </div>
        </div>
    );
};

export default PlayerDescTop;