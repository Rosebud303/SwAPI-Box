import React, { Component } from 'react';
import DescriptionCard from '../DescriptionCard/DescriptionCard.js'

export default class DisplayArea extends Component {
  constructor(props) {
      super(props);
      this.state = {
          people: [],
          planets: [],
          vehicles: []
      }
  }
  
  render() {
    return (
      <div>
        <h1>Im here</h1>
        <DescriptionCard />
      </div>
    )
  }
}
