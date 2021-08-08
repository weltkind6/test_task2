import React from 'react';
import './Logo.css'


const Logo = props => {
    return (
        <div className='Logo'>
            <div>
                <img className='Footer__logo' src={props.logoImg} alt="logo"/>
            </div>
            <div className='crossBall'>
                <img className='Footer__crossBall' src={props.crossImg} alt="crossBall"/>
            </div>
        </div>
    );
};

export default Logo;