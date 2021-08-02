import React from 'react';
import './FullStat.scss'
import Seasons from "./Seasons/Seasons";
import Numbers from "./Numbers/Numbers";
import Rewards from "./Rewards/Rewards";
import ShareLinks from "../Player/PlayerInfo/SharedLinks/ShareLinks";
import CrossLines from "./CrossLines/CrossLines";

const FullStat = () => {
    return (
        <div className='FullStat'>
            <div className="FullStat__wrapper">
                <Seasons/>
                <Numbers/>
                <Rewards/>
                <ShareLinks/>
            </div>
            <div className="FullStat__descTop">
                <div className="FullStat__descTop-wrapper">
                    <div className="DescTop-left">
                        <div className='Rewards-descTop'>
                            <Rewards/>
                        </div>
                        <div className='SeasonsScore-descTop'>
                            <Seasons/>
                            <Numbers/>
                        </div>
                    </div>
                    <div className='Shared-descTop'>
                        <div className='crossLine-Block'>
                            <ShareLinks/>
                            <CrossLines/>
                        </div>
                        <div className='crossLine-Block'>
                            <CrossLines className={`${'crossLine item03'}`}/>
                            <CrossLines/>
                        </div>
                        <div>
                            <CrossLines className={`${'crossLine item1'}`}/>
                            <CrossLines className={`${'crossLine item2'}`}/>
                            <CrossLines/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FullStat;