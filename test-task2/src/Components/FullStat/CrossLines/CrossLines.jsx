import React from 'react';
import './CrossLines.css'

const CrossLines = props => {
    return (
        <div className='cross'>
            <div className={props.className}>&times;</div>
        </div>
    );
};

export default CrossLines;