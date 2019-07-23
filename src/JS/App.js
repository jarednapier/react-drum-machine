import React from 'react';
import '../CSS/App.css';
import Display from './Display';
import { SoundClips } from './SoundClips';
import Toggle from './Toggle';
import DrumPadButton from './DrumPadButton';

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
      powerToggle: !this.state.powerToggle
    });
  };

  clipSetToggle = () => {
    this.setState({
      clipSetTwoToggle: !this.state.clipSetTwoToggle,
      clipSet: this.state.clipSetTwoToggle ? SoundClips.clipSetTwo : SoundClips.clipSetOne
    });
  };

  handleDrumEvent = (str) => {
    this.setState({
      displayText: str
    });
  };
  
  render() {
    return (
      <div className="drum-machine-container" id="drum-machine">
        Thanks for makin me a fighter oh oh
        <Display display={this.state.displayText} />
        <Toggle title={"Power"} toggle={this.state.powerToggle} toggleFunction={this.powerToggle} />
        <Toggle title={"Bank"} toggle={this.state.clipSetTwoToggle} toggleFunction={this.clipSetToggle} />
        <DrumPadButton audioClip={this.state.powerToggle ? "" :this.state.clipSet[4][0]} id={this.state.clipSet[4][2]} description={this.state.clipSet[4][1]} handleEvent={this.handleDrumEvent} />
      </div>
    );
  }
}


