import React from 'react';
import './Footer.scss'
import vk from '../../img/VKfooter.svg'
import fb from '../../img/FB.svg'
import inst from '../../img/inst.svg'
import youtube from '../../img/you.svg'
import tg from '../../img/Telega.svg'
import Logo from "../shared/Logo/Logo";

const Footer = () => {
    return (
        <div className='Footer'>
            <div className="Footer__wrapper">
                <div className='Footer__contacts'>
                    <a href="mailto:go@crossball.ru">go@crossball.ru</a>
                    <a href="tel:+74951090309">+7 (495) 109-03-09</a>
                </div>
                <div className='Footer__socials'>
                    <img src={vk} alt="vk"/>
                    <img src={fb} alt="fb"/>
                    <img src={inst} alt="instagram"/>
                    <img src={youtube} alt="youtube"/>
                    <img src={tg} alt="Telegram"/>

                </div>
                <div>
                    <div>app</div>
                    <div>google</div>
                </div>
                <div>
                   <Logo />
                </div>
                <div>
                    <span>copyright</span>
                    <span>maked</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;