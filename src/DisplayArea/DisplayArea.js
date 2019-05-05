import React, { Component } from 'react';
import DescriptionCard from '../DescriptionCard/DescriptionCard.js';

export default class DisplayArea extends Component {
  constructor(props) {
      super(props);
      this.state = {
        favorites: []
      }
  }

  toggleFavorite = (id) => {

  }
  
  render() {
    const { currentData, currentTitle } = this.props
    const { favorites } =this.state
    return (
      <div>
        <DescriptionCard currentData={currentData} 
                         currentTitle={currentTitle}
                         favorites={favorites}

        />
      </div>
    )
  }
}
