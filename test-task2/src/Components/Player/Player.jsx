import React from 'react';
import pencil from '../../img/pencil.svg'
import facebook from '../../img/facebook.svg'
import vk from '../../img/VK.svg'
import link from '../../img/Subtract.svg'
import './Player.scss'
import PlayerInfo from "./PlayerInfo/PlayerInfo";
import ShareLinks from "./PlayerInfo/SharedLinks/ShareLinks";

const Player = () => {
    return (
        <div className='Player'>
            <div className="Player__wrapper">
                <PlayerInfo />
                <div className='Player__footer'>
                    <div className='redactingBlock'>
                        <img src={pencil} alt="pencil" className='redactingImg'/>
                        <a href='#' style={{color: '#fff'}}>Редактировать</a>
                    </div>
                    <div className='ShareLinks'>
                        <ShareLinks />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;