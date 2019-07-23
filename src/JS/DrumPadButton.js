import React from 'react';
import PropTypes from 'prop-types';
import '../CSS/DrumPadButton.css';

const DrumPadButton = (props) => {
    return (
        <audio src={props.audioClip} />
    );
}

DrumPadButton.propTypes = {
    id: PropTypes.string,
    description: PropTypes.string,
    audioClip: PropTypes.string
};

export default DrumPadButton;