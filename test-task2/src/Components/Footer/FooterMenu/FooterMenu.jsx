import React from 'react';
import './FooterMenu.css'

const FooterMenu = props => {
    return (
        <div>
            <ul>
                <li><a href="#">{props.item}</a></li>
                <li><a href="#">{props.item2}</a></li>
                <li><a href="#">{props.item3}</a></li>
                <li><a href="#">{props.item4}</a></li>
                <li><a href="#">{props.item5}</a></li>
            </ul>
        </div>
    );
};

export default FooterMenu;