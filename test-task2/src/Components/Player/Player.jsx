import React from 'react';
import pencil from '../../img/pencil.svg'
import './Player.scss'
import PlayerInfo from "./PlayerInfo/PlayerInfo";
import ShareLinks from "./PlayerInfo/SharedLinks/ShareLinks";
import PlayerDescTop from "./PlayerDesctop/PlayerDesctop";

const Player = (props) => {

    return (
        <div className='Player'>
            <div className="Player__wrapper">
                <PlayerInfo/>
                <div className='Player__footer'>
                    <div className='redactingBlock'>
                        <img src={pencil} alt="pencil" className='redactingImg'/>
                        <a href='#' style={{color: '#fff'}}>Редактировать</a>
                    </div>
                    <div className='ShareLinks'>
                        <ShareLinks/>
                    </div>
                </div>
            </div>
             <div className='abraCadabra'>
                 <PlayerDescTop
                     showMenu={props.showMenu}
                     state={props.state}
                 />
             </div>
        </div>
    );
};

export default Player;