import React from 'react';
import './Footer.scss'
import vk from '../../img/VKfooter.svg'
import fb from '../../img/FB.svg'
import inst from '../../img/inst.svg'
import youtube from '../../img/you.svg'
import tg from '../../img/Telega.svg'
import wLogo from '../../img/LogoWhite.svg'
import wCrossBall from '../../img/CROSSBaLL-white.svg'
import appStore from '../../img/appstore.svg'
import playMarket from '../../img/googleplay.png'

const Footer = () => {
    return (
        <div className='Footer'>
            <div className="Footer__wrapper">
                <div className='Footer__contacts'>
                    <a href="mailto:go@crossball.ru">go@crossball.ru</a>
                    <a href="tel:+74951090309">+7 (495) 109-03-09</a>
                </div>
                <div className='Footer__socials'>
                    <a href="#"><img src={vk} alt="vk"/></a>
                    <a href="#"><img src={fb} alt="fb"/></a>
                    <a href="#"><img src={inst} alt="instagram"/></a>
                    <a href="#"><img src={youtube} alt="youtube"/></a>
                    <a href="#"><img src={tg} alt="Telegram"/></a>
                </div>

                <div className='Footer__stores'>
                    <div><img src={playMarket} alt='playMarket'/></div>
                    <div><img src={appStore} alt='appStore'/></div>
                </div>
                <div>

                </div>
                <div className='Footer__logo'>
                    <div className='wLogo'>
                        <img src={wLogo} alt="wLogo"/>
                    </div>
                    <div>
                        <img src={wCrossBall} alt="wCrossBall"/>
                    </div>
                </div>
                <div className='Footer__info'>
                    <div>© Все права защищены</div>
                    <div>Cделали в Spans</div>
                </div>
            </div>
        </div>
    );
};

export default Footer;