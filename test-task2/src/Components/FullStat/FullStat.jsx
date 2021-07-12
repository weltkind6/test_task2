import React from 'react';
import './FullStat.scss'
import Seasons from "./Seasons/Seasons";
import Numbers from "./Numbers/Numbers";
import Rewards from "./Rewards/Rewards";

const FullStat = () => {
    return (
        <div className='FullStat'>
            <Seasons />
            <Numbers />
            <Rewards />
        </div>
    );
};

export default FullStat;