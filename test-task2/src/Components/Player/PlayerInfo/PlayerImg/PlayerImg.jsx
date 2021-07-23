import React from 'react';
import player from "../../../../img/Miho.png";


const PlayerImg = props => {
    return (
        <div>
            <img
                src={player}
                alt="player"
                className={props.className}
                style={{borderRadius: `50%`, border: `2px solid rgba(255, 121, 91, 1`}}
            />
        </div>
    );
};

export default PlayerImg;