import React from 'react';
import PropTypes from 'prop-types';
import '../CSS/DrumPadButton.css';

export default class DrumPadButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // audio OBJECT, NOT the source of the clip itself
            audio: null
        };
    }

    componentDidMount() {
        this.setState({
            audio: document.getElementById(this.props.id)
        });
    }

    render() {
        return (
            <button 
                className="drum-pad" 
                onClick={() => {
                    this.state.audio.load();
                    this.state.audio.play();
                    this.props.handleEvent(this.props.description)
                }}
            >
                <audio src={this.props.audioClip} className="clip" id={this.props.id} />
                <p className="drum-pad-text">{this.props.id}</p>
            </button>
        );
    }
}

DrumPadButton.propTypes = {
    id: PropTypes.string,
    description: PropTypes.string,
    audioClip: PropTypes.string,
    handleEvent: PropTypes.func
};
