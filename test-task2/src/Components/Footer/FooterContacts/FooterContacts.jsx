import React from 'react';
import './FooterContacts.css'
import phonePic from '../../../img/phomePic.svg'
import mailPic from '../../../img/mail.svg'

const FooterContacts = () => {
    return (
        <div className='Footer__contacts'>
            <div className='ContactsMobile'>
                <a href="mailto:go@crossball.ru">go@crossball.ru</a>
                <a href="tel:+74951090309">+7 (495) 109-03-09</a>
            </div>
            <div className='ContactsDescTop'>
                <div className='ContactsDescTop__title'>Наши контакты</div>
                <div className='ContactsDescTop__block'>
                    <img src={phonePic} alt="phonePic" className='contactImg phonePic'/>
                    <a href="tel:+74951090309">+7 (495) 109-03-09</a>
                </div>
                <div className='ContactsDescTop__block lastBlock'>
                    <img src={mailPic} alt="mailPic" className='contactImg mailPic'/>
                    <a href="mailto:go@crossball.ru">go@crossball.ru</a>
                </div>
            </div>
        </div>
    );
};

export default FooterContacts;