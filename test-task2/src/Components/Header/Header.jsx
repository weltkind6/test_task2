import React from 'react';
import './Header.scss'
import logo from '../../img/Logo.svg'
import crossBall from '../../img/CROSSBaLL.svg'
import backPackLogo from '../../img/Vector.svg'

const Header = () => {
    return (
        <div className='Header'>
            <div className="Header__left">
                <div>
                    <img src={logo} alt=""/>
                </div>
                <div className='crossBall'>
                    <img src={crossBall} alt=""/>
                </div>
            </div>
            <div className='Header__right'>
                <div className='backPackLogo'>
                    <img src={backPackLogo} alt=""/>
                </div>
                <div className='burgerMenu'>
                   <div className='item'/>
                   <div className='item'/>
                   <div className='item'/>
                </div>
            </div>
        </div>
    );
};

export default Header;
