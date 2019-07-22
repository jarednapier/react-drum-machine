import React from 'react';
import '../CSS/App.css';
import ColoredSquare from './ColoredSquare';
import Display from './Display';
import { SoundClips } from './SoundClips';

function App() {
  return (
    <div className="drum-machine-container" id="drum-machine">
      Thanks for makin me a fighter oh oh
      <ColoredSquare/>
      <Display display="bleh" />

    </div>
  );
}

export default App;
