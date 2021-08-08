import React from 'react';
import './FooterSocialItem.css'

const FooterSocialItem = props => {
    return (
        <>
            <a className='FooterSocialItem' href="#"><img src={props.icon} alt={props.alt}/></a>
        </>
    );
};

export default FooterSocialItem;