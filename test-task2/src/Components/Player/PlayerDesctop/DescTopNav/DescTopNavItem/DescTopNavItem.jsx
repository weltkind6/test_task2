import React from 'react';
import './DescTopNavItem.css'

const DescTopNavItem = props => {
    return (
        <div>
            <img src={props.navImg} alt={props.navAlt} className={props.className}/>
            <span>{props.title}</span>
        </div>
    );
};

export default DescTopNavItem;


