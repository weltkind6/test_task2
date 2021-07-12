import React from 'react';
import cross from '../../../img/CROSSBaLL.svg'
import logo from '../../../img/Logo.svg'
import './Logo.css'


const Logo = () => {
    return (
        <div className='Logo'>
            <div>
                <img src={logo} alt="logo"/>
            </div>
            <div className='crossBall'>
                <img src={cross} alt="crossBall"/>
            </div>
        </div>
    );
};

export default Logo;