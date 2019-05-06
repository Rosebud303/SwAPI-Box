import React, { Component } from 'react';
import Controls from '../Controls/Controls.js';
import Scroll from '../Scroll/Scroll.js';
import './App.scss';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Scroll />
        <Controls />
      </div>
    )
  };
};

