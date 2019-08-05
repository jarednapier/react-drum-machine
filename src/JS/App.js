import React from 'react';
import '../CSS/App.css';
import Display from './Display';
import { SoundClips } from './SoundClips';
import Toggle from './Toggle';
import DrumPadButton from './DrumPadButton';
import { ReactComponent as Icon } from '../Media/logo.svg';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayText: "",
      clipSet: SoundClips.clipSetOne,
      clipSetTwoToggle: true,
      powerToggle: false,
    };
  }

  powerToggle = () => {
    this.setState({
      powerToggle: !this.state.powerToggle,
      displayText: ""
    });
  };

  clipSetToggle = () => {
    this.setState({
      clipSetTwoToggle: !this.state.clipSetTwoToggle,
      clipSet: this.state.clipSetTwoToggle ? SoundClips.clipSetTwo : SoundClips.clipSetOne,
      displayText: ""
    });
  };

  handleDrumEvent = (str) => {
    this.setState({
      displayText: str
    });
  };
  
  render() {
    const clipState = this.state.clipSet;
    const drumPadList = this.state.clipSet.map((arr) => {
      return (
        <DrumPadButton
          key={arr[1]}
          id={arr[2]}
          description={arr[1]}
          audioClip={this.state.powerToggle ? "" : arr[0]}
          handleEvent={this.handleDrumEvent}
          numId={clipState.indexOf(arr)}
          power={this.state.powerToggle}
        />
      );
    })
    return (
      <div className="drum-machine-container" id="drum-machine">
        <div className="drum-pad-elements">
          <div className='drum-pad-row'>
            {drumPadList[0]}
            {drumPadList[1]}
            {drumPadList[2]}
          </div>
          <div className='drum-pad-row'>
            {drumPadList[3]}
            {drumPadList[4]}
            {drumPadList[5]}
          </div>
          <div className='drum-pad-row'>
            {drumPadList[6]}
            {drumPadList[7]}
            {drumPadList[8]}
          </div>
        </div>
        <div className="drum-controls">
          <div className="title-wrapper">
            <Icon className="react-logo" />
            <h3 className="h3-title">React Drum Machine</h3>
          </div>
          <Toggle title={"Power"} toggle={this.state.powerToggle} toggleFunction={this.powerToggle} />
          <Display display={this.state.powerToggle ? "" : this.state.displayText} />
          {/* <Toggle title={"Bank"} toggle={this.state.clipSetTwoToggle} toggleFunction={this.clipSetToggle} /> */}
        </div>
      </div>
    );
  }
}


