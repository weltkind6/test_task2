import React from 'react';
import './Footer.scss'
import FooterSocials from "./FooterSocials/FooterSocials";
import FooterStores from "./FooterStores/FooterStores";
import FooterInfo from "./FooterInfo/FooterInfo";
import FooterLogo from "./FooterLogo/FooterLogo";
import FooterContacts from "./FooterContacts/FooterContacts";

const Footer = () => {
    return (
        <div className='Footer'>
            <div className="Footer__wrapper">
                <FooterContacts/>
                <FooterSocials/>
                <FooterStores/>
                <FooterLogo/>
                <FooterInfo/>
            </div>
            <div className="FooterDescTop">
                <div className="FooterDescTop__wrapper">
                    <div>
                        <FooterLogo/>
                        <FooterStores/>
                    </div>
                    <div>
                        <ul>
                            <li><a href="#">Разделы</a></li>
                            <li><a href="#">Главная</a></li>
                            <li><a href="#">Расписание</a></li>
                            <li><a href="#">Игровые отчеты</a></li>
                            <li><a href="#">Статистика</a></li>
                        </ul>
                        <ul>
                            <li><a href="#">Разделы</a></li>
                            <li><a href="#">Главная</a></li>
                            <li><a href="#">Расписание</a></li>
                            <li><a href="#">Игровые отчеты</a></li>
                            <li><a href="#">Статистика</a></li>
                        </ul>
                        <ul>
                            <li><a href="#">Разделы</a></li>
                            <li><a href="#">Главная</a></li>
                            <li><a href="#">Расписание</a></li>
                            <li><a href="#">Игровые отчеты</a></li>
                            <li><a href="#">Статистика</a></li>
                        </ul>
                        <ul>
                            <li><a href="#">Разделы</a></li>
                            <li><a href="#">Главная</a></li>
                            <li><a href="#">Расписание</a></li>
                            <li><a href="#">Игровые отчеты</a></li>
                            <li><a href="#">Статистика</a></li>
                        </ul>
                    </div>
                    <div>
                        contacts
                    </div>
                    <div>
                        lower footer
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;