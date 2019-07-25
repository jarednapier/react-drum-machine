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
        document.addEventListener("keydown", (e) => {this.listenerFunction(e);}); 
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.power !== this.props.power) {
            console.log("The power prop has changed.");
            document.removeEventListener("keydown", (e) => {this.listenerFunction(e);});
            this.props.handleEvent("");
        }
    }

    listenerFunction = (e) => {
        if(e.code === `Key${this.props.id}`) {
            this.audioMethod();
            let x = document.getElementsByClassName("drum-pad")[this.props.numId];
            let y  = document.getElementsByClassName("drum-pad-text")[this.props.numId];
            x.classList.add("drum-pad-active");
            y.classList.add("drum-pad-text-active");
            setTimeout( () => {
                x.classList.remove("drum-pad-active");
                y.classList.remove("drum-pad-text-active");
            }, 100);
        }
    };

    audioMethod = () => {

        this.state.audio.load();
        this.state.audio.play();
        this.props.handleEvent(this.props.description);
    };

    render() {
        return (
            <div className="pad-wrapper">
                <button 
                    className="drum-pad" 
                    onClick={() => {
                        this.audioMethod();
                    }}
                >
                    <audio src={this.props.audioClip} className="clip" id={this.props.id} />
                    <p className="drum-pad-text">{this.props.id}</p>
                </button>
            </div>
        );
    }
}

DrumPadButton.propTypes = {
    id: PropTypes.string,
    description: PropTypes.string,
    audioClip: PropTypes.string,
    handleEvent: PropTypes.func,
    numId: PropTypes.number,
    power: PropTypes.bool
};
