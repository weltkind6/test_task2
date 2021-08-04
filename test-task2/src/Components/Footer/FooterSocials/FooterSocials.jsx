import React from 'react';
import './FooterSocials.css'
import FooterSocialItem from "./FooterSocialItem/FooterSocialItem";
import vk from "../../../img/VKfooter.svg";
import fb from "../../../img/FB.svg";
import inst from "../../../img/inst.svg";
import youtube from "../../../img/you.svg";
import tg from "../../../img/Telega.svg";

const FooterSocials = () => {
    return (
        <div className='FooterSocials'>
            <FooterSocialItem icon={vk} alt={'Vkontakte'}/>
            <FooterSocialItem icon={fb} alt={'FaceBook'}/>
            <FooterSocialItem icon={inst} alt={'Instagram'}/>
            <FooterSocialItem icon={youtube} alt={'Youtube'}/>
            <FooterSocialItem icon={tg} alt={'Telegram'}/>
        </div>
    );
};

export default FooterSocials;