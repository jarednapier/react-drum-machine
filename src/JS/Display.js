import React from 'react';
import '../CSS/Display.css';

const Display = (props) => {
    return (
        <div className="display-wrapper">
            <p id="display">{props.display}</p>
        </div>
    );
};

export default Display;