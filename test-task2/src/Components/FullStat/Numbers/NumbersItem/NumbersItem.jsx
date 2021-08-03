import React from 'react';

const NumbersItem = props => {
    return (
        <div>
            <div className='Numbers-item'>
                <span>{props.event}</span>
                <span>{props.count}</span>
            </div>
        </div>
    );
};

export default NumbersItem;