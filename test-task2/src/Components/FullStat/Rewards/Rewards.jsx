import React from 'react';
import rewardImg from '../../../img/reward5.svg'
import inActiveReward from '../../../img/inactiveReward.svg'
import './Rewards.css'

const Rewards = () => {
    return (
        <div className='Rewards'>
            <div className='Rewards__wrapper'>
                <h3 className='Rewards__header'>Награды и достижения</h3>
                <div className='Rewards-top'>
                    <div className='top-rewards'>
                        <div className='reward-block'>
                            <img src={rewardImg} alt='reward'/>
                            <span className='span first'>5</span>
                        </div>
                        <div className='reward-block'>
                            <img src={rewardImg} alt='reward'/>
                            <span className='span second'>5</span>
                        </div>
                        <div className='reward-block'>
                            <img src={rewardImg} alt='reward'/>
                            <span className='span third'>99</span>
                        </div>
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