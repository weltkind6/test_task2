import React from 'react';
import './Logo.css'


const Logo = props => {
    return (
        <div className='Logo'>
            <div>
                <img src={props.logoImg} alt="logo"/>
            </div>
            <div className='crossBall'>
                <img src={props.crossImg} alt="crossBall"/>
            </div>
        </div>
    );
};

export default Logo;