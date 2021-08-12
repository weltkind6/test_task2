import React from 'react';
import calendar from "../../../../img/calendar.png";
import report from "../../../../img/report.png";
import vector from "../../../../img/Vector.png";
import logOut from "../../../../img/log out.png";
import DescTopNavItem from "./DescTopNavItem/DescTopNavItem";

const DescTopNav = () => {
    return (
        <nav className='descTop-nav'>
            <div style={{color: 'black'}} className='descTop-nav-wrapper'>
                <DescTopNavItem
                    navImg={calendar} navAlt={calendar} title={'Ближайшие игры'} className={`${'nav-img'}`}/>
                <DescTopNavItem
                    navImg={report} navAlt={report} title={'Игровые отчеты'} className={`${'nav-img'}`}/>
                <DescTopNavItem
                    navImg={vector} navAlt={vector} title={'История заказов'} className={`${'nav-img imgLast'}`}/>
                <DescTopNavItem
                    navImg={logOut} navAlt={logOut} title={'Выйти'} className={`${'nav-img'}`}/>
            </div>
        </nav>
    );
};

export default DescTopNav;

