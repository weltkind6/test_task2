import React from 'react';
import './FullStat.scss'
import Seasons from "./Seasons/Seasons";
import Numbers from "./Numbers/Numbers";

const FullStat = () => {
    return (
        <div className='FullStat'>
            <Seasons />
            <Numbers />
        </div>
    );
};

export default FullStat;