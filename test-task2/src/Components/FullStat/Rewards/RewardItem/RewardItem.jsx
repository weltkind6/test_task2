import React from 'react';
import rewardImg from "../../../../img/reward5.svg";

const RewardItem = props => {
    return (
        <div className='reward-block'>
            <img src={rewardImg} alt='reward'/>
            <span className={props.className}>{props.number}</span>
        </div>
    );
};

export default RewardItem;