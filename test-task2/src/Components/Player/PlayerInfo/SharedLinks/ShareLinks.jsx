import React from 'react';
import facebook from "../../../../img/facebook.svg";
import vk from "../../../../img/VK.svg";
import link from "../../../../img/Subtract.svg";
import './ShareLinks.css'

const ShareLinks = () => {
    return (
        <div className='shareItems-block'>
            <span>Поделиться</span>
            <div className='shareItems'>
                <a href="#"><img src={facebook} alt="facebook" className='shareItems-link'/></a>
                <a href="#"><img src={vk} alt="vkontakte" className='shareItems-link'/></a>
                <a href="#"><img src={link} alt="linkcopy" className='shareItems-link lastItem'/></a>
            </div>
        </div>
    );
};

export default ShareLinks;