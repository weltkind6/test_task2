import React from 'react';
import facebook from "../../../../img/facebook.svg";
import vk from "../../../../img/VK.svg";
import link from "../../../../img/Subtract.svg";
import './ShareLinks.css'

const ShareLinks = () => {
    return (
        <>
            <span>Поделиться</span>
            <div className='shareItems'>
                <a href="#"><img src={facebook} alt="facebook"/></a>
                <a href="#"><img src={vk} alt="vkontakte"/></a>
                <a href="#"><img src={link} alt="linkcopy"/></a>
            </div>
        </>
    );
};

export default ShareLinks;