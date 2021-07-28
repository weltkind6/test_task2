import React from 'react';
import rewardImg from '../../../img/reward5.svg'
import inActiveReward from '../../../img/inactiveReward.svg'
import './Rewards.css'
import RewardItem from "./RewardItem/RewardItem";

const Rewards = () => {
    return (
        <div className='Rewards'>
            <div className='Rewards__wrapper'>
                <h3 className='Rewards__header'>Награды и достижения</h3>
                <div className='Rewards-top'>
                    <div className='top-rewards'>
                        <RewardItem number='5' className={`${'span first'}`}/>
                        <RewardItem number='5' className={`${'span second'}`}/>
                        <RewardItem number='99' className={`${'span third'}`}/>
                    </div>
                    <div className='inActiveReward-block'>
                        <img src={inActiveReward} alt='inActiveReward'/>
                        <img src={inActiveReward} alt='inActiveReward'/>
                    </div>
                </div>

                <div className='Rewards-bottom'>
                    <img src={rewardImg} alt='reward'/>
                    <img src={rewardImg} alt='reward'/>
                    <img src={rewardImg} alt='reward'/>
                    <img src={rewardImg} alt='reward'/>
                    <img src={rewardImg} alt='reward'/>
                </div>
            </div>
        </div>
    );
};

export default Rewards;