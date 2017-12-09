import React, { Component } from 'react';
import { assetPath } from './utilities/constants';
import TrainStopContainer from './components/TrainStopContainer';



class App extends Component {
  render() {
    return (
      <div className="App">
        <TrainStopContainer />
        <img className="umbrella" src={`${assetPath}/umbrella.svg`} />
      </div>
    );
  }
}

export default App;
