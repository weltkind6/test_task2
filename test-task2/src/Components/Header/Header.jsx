import React from 'react';
import './Header.scss'
import backPackLogo from '../../img/Vector.svg'
import Logo from "../shared/Logo/Logo";
import BigLogo from '../../img/LogoBig.svg'
import CrossBallBig from '../../img/CROSSBaLL-big.svg'
import tab from '../../img/tab.svg'
import ball from '../../img/ball.svg'
import backPack from '../../img/BackPack.svg'
import backPackCounter from '../../img/Counter.svg'
import PlayerImg from "../Player/PlayerInfo/PlayerImg/PlayerImg";

const Header = () => {
    return (
        <div className='Header'>
            <div className="Header__wrapper">
                <div className="Header__left">
                    <Logo/>
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

            {/*DescTop 1440px */}

            <div className="Header__descTop">
                <div className="Header__descTop-wrapper">
                    <div className='descTop-logo'>
                        <img src={BigLogo} alt="BigLogo"/>
                        <img src={CrossBallBig} alt="CrossBallBig"/>
                    </div>
                    <nav className='descTop-menu'>
                        <div>Расписание</div>
                        <div>Игровые отчеты</div>
                        <div>Статистика</div>
                        <div>Еще</div>
                        <img src={tab} alt="tab"/>
                    </nav>
                    <div className='descTop-dropDawn'>
                        <div className='dropDawn__wrapper'>
                            <img src={ball} alt="ballLogo"/>
                            <img src={tab} alt="tab"/>
                        </div>
                    </div>
                    <div className='DescTop-avatar'>
                        <PlayerImg className={`${"titleName"}`}/>
                    </div>
                    <div className='Basket'>
                        <img src={backPack} alt="backPack logo"/>
                        <img src={backPackCounter} alt="backPackCounter"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
