import React from 'react';
import './Footer.scss'
import FooterSocials from "./FooterSocials/FooterSocials";
import FooterStores from "./FooterStores/FooterStores";
import FooterInfo from "./FooterInfo/FooterInfo";
import FooterContacts from "./FooterContacts/FooterContacts";
import FooterMenu from "./FooterMenu/FooterMenu";
import logoWhite from '../../img/BigLogo.svg'
import footerLogo from '../../img/BigCROSSBaLL.svg'
import Logo from "../shared/Logo/Logo";

const Footer = () => {
    return (
        <div className='Footer'>
            <div className="Footer__wrapper">
                <FooterContacts/>
                <FooterSocials/>
                <FooterStores/>
                <Logo crossImg={footerLogo} logoImg={logoWhite}/>
                <FooterInfo/>
            </div>
            <div className="FooterDescTop">
                <div className="FooterDescTop__wrapper">
                    <div className='FooterDescTop__upperBlock'>
                        <div>
                            <FooterStores/>
                            <Logo crossImg={footerLogo} logoImg={logoWhite}/>
                        </div>
                        <div className='FooterDescTop__menu'>
                            <FooterMenu
                                item={'Разделы'}
                                item2={'Главная'}
                                item3={'Расписание'}
                                item4={'Игровые отчеты'}
                                item5={'Статистика'}
                            />
                            <FooterMenu
                                item={'Виды спорта'}
                                item2={'Футбол'}
                                item3={'Баскетбол'}
                                item4={'Волейбол'}
                            />
                            <FooterMenu
                                item={'Полезное'}
                                item2={'Как записаться?'}
                                item3={'Ответы на повросы'}
                                item4={'Достижения'}
                            />
                            <FooterMenu
                                item={'Че почем'}
                                item2={'Абонименты'}
                                item3={'Корп. клиентам'}
                                item4={'Партнеры'}
                            />
                        </div>
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