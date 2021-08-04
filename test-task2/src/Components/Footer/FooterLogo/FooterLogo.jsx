import React from 'react';
import wLogo from "../../../img/LogoWhite.svg";
import wCrossBall from "../../../img/CROSSBaLL-white.svg";
import './FooterLogo.css'

const FooterLogo = () => {
    return (
        <div className='Footer__logo'>
            <div className='wLogo'>
                <img src={wLogo} alt="wLogo"/>
            </div>
            <div>
                <img src={wCrossBall} alt="wCrossBall"/>
            </div>
        </div>
    );
};

export default FooterLogo;