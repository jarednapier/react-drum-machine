import React from 'react';
import PropTypes from 'prop-types';
import '../CSS/Toggle.css';
import ColoredSquare from './ColoredSquare';

const Toggle = (props) => {
    return (
        <div className="wrapper"> 
            <p className="title">{props.title}</p>
            <div className={ props.toggle ? "left-aligned toggle-wrapper" : "right-aligned toggle-wrapper"} onClick={props.toggleFunction}>
                <ColoredSquare />
            </div>
        </div>
    );
};

Toggle.propTypes = {
    title: PropTypes.string,
    toggle: PropTypes.bool,
    toggleFunction: PropTypes.func
};

export default Toggle;