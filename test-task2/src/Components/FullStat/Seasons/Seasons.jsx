import React from 'react';
import './Seasons.scss'

const Seasons = () => {
    return (
        <div className='Seasons'>
            <div className="Seasons__wrapper">
                <div className="buttons">
                    <div className='buttons__wrapper'>
                        <div className='firstButton'>
                            <button>Все сезоны</button>
                        </div>
                        <div className='lastButton'>
                            <button>Сезон 2020/21</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Seasons;