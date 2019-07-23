import React from 'react';
import PropTypes from 'prop-types';
import '../CSS/Display.css';

const Display = (props) => {
    return (
        <div className="display-wrapper">
            <p id="display">{props.display}</p>
        </div>
    );
};

Display.propTypes = {
    display: PropTypes.string
};

export default Display;