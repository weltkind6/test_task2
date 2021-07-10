import React from 'react';
import './Numbers.css'

const Numbers = () => {
    return (
        <div className='Numbers'>
            <div className="Numbers__wrapper">
                <div>
                    <div className='Numbers-item'>
                        <span>Игры</span>
                        <span>222</span>
                    </div>
                </div>
                <div>
                    <div className='Numbers-item'>
                        <span>Голы</span>
                        <span>67</span>
                    </div>
                </div>
                <div>
                    <div className='Numbers-item'>
                        <span>Пас</span>
                        <span>136</span>
                    </div>
                </div>
                <div>
                    <div className='Numbers-item'>
                        <span>Гол + пас</span>
                        <span>136</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Numbers;