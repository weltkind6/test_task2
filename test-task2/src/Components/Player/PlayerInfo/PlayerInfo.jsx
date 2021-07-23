import React from 'react';
import './PlayerInfo.css'
import PlayerImg from "./PlayerImg/PlayerImg";

const PlayerInfo = () => {
    return (
        <div className="info">
           <PlayerImg />
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