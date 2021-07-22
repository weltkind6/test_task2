import React from 'react';
import player from "../../../img/Miho.png";
import './PlayerInfo.css'

const PlayerInfo = () => {
    return (
        <div className="info">
            <div>
                <img src={player} alt="player" className='playerImg'/>
            </div>
            <div className='ratio'>
                <div className='indicators'>
                    <span>89.40</span>
                    <span className='ratioStatus'>999</span>
                </div>
                <div className='playerName'>
                    Елишакашвили
                    Михо
                </div>
            </div>
        </div>
    );
};

export default PlayerInfo;