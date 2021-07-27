import React from 'react';
import './FullStat.scss'
import Seasons from "./Seasons/Seasons";
import Numbers from "./Numbers/Numbers";
import Rewards from "./Rewards/Rewards";
import ShareLinks from "../Player/PlayerInfo/SharedLinks/ShareLinks";

const FullStat = () => {
    return (
        <div className='FullStat'>
            <Seasons />
            <Numbers />
            <Rewards />
            <ShareLinks />
        </div>
    );
};

export default FullStat;