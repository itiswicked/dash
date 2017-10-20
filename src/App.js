import React, { Component } from 'react';

import TrainStopContainer from './components/TrainStopContainer';



class App extends Component {
  render() {
    return (
      <div className="App">
        <TrainStopContainer />
        <div className="other-content">
          yo
        </div>
      </div>
    );
  }
}

export default App;
