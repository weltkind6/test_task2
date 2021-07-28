import React from 'react';
import rewardImg from "../../../../img/reward5.svg";
import RewardItemsNumber from "../RewardItemsNumber/RewardItemsNumber";

const RewardItem = props => {
    return (
        <div className='reward-block'>
            <img src={rewardImg} alt='reward'/>
            <RewardItemsNumber className={props.className} number={props.number}/>
        </div>
    );
};

export default RewardItem;