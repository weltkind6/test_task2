import React from 'react';
import './Numbers.css'
import NumbersItem from "./NumbersItem/NumbersItem";

const Numbers = () => {
    return (
        <div className='Numbers'>
            <div className="Numbers__wrapper">
                <NumbersItem event='Игры' count='222'/>
                <NumbersItem event='Голы' count='67'/>
                <NumbersItem event='Пас' count='136'/>
                <NumbersItem event='Гол + пас' count='203'/>
            </div>
        </div>
    );
};

export default Numbers;