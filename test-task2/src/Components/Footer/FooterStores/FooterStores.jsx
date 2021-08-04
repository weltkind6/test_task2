import React from 'react';
import playMarket from "../../../img/googleplay.png";
import appStore from "../../../img/appstore.svg";
import './FooterStores.css'

const FooterStores = () => {
    return (
        <div className='Footer__stores'>
            <div><img src={playMarket} alt='playMarket'/></div>
            <div><img src={appStore} alt='appStore'/></div>
        </div>
    );
};

export default FooterStores;