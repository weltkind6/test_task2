import React from 'react';

const FooterSocialItem = props => {
    return (
        <>
            <a href="#"><img src={props.icon} alt={props.alt}/></a>
        </>
    );
};

export default FooterSocialItem;