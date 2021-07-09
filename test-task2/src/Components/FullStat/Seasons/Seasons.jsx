import React from 'react';
import './Seasons.scss'

const Seasons = () => {
    return (
        <div className='Seasons'>
            <div className="Seasons__wrapper">
                <div className="buttons">
                    <div className='buttons__wrapper'>
                        <button>Все сезоны</button>
                        <button>Сезон 2020/21</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Seasons;