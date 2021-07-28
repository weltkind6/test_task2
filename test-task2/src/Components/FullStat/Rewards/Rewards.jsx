import React from 'react';
import './Rewards.css'
import RewardItem from "./RewardItem/RewardItem";
import RewardInactiveItem from "./RewardInactiveItem/RewardInactiveItem";

const Rewards = () => {
    return (
        <div className='Rewards'>
            <div className='Rewards__wrapper'>
                <h3 className='Rewards__header'>Награды и достижения</h3>
                <div className='Rewards-top'>
                    <div className='top-rewards'>
                        <div><RewardItem number='5' className={`${'span first'}`}/></div>
                        <div><RewardItem number='5' className={`${'span second'}`}/></div>
                        <div><RewardItem number='99' className={`${'span third'}`}/></div>
                    </div>
                    <div className='inActiveReward-block'>
                        <RewardInactiveItem />
                        <RewardInactiveItem />
                    </div>
                </div>

                <div className='Rewards-bottom'>
                    <div><RewardItem/></div>
                    <div><RewardItem/></div>
                    <div><RewardItem/></div>
                    <div><RewardItem/></div>
                    <div><RewardItem/></div>
                </div>
            </div>
        </div>
    );
};

export default Rewards;