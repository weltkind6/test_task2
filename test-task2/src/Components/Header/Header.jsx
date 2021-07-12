import React from 'react';
import './Header.scss'
import logo from '../../img/Logo.svg'
import crossBall from '../../img/CROSSBaLL.svg'
import backPackLogo from '../../img/Vector.svg'
import Logo from "../shared/Logo/Logo";

const Header = () => {
    return (
        <div className='Header'>
            <div className="Header__left">
                <Logo />
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
