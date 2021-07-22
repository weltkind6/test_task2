import React from 'react';
import pencil from '../../img/pencil.svg'
import facebook from '../../img/facebook.svg'
import vk from '../../img/VK.svg'
import link from '../../img/Subtract.svg'
import './Player.scss'
import PlayerInfo from "./PlayerInfo/PlayerInfo";

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
                    <div>
                        <span>Поделиться</span>
                        <div className='shareItems'>
                            <a href="#"><img src={facebook} alt="facebook"/></a>
                            <a href="#"><img src={vk} alt="vkontakte"/></a>
                            <a href="#"><img src={link} alt="linkcopy"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;