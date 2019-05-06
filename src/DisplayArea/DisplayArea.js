import React, { Component } from 'react';
import DescriptionCard from '../DescriptionCard/DescriptionCard.js';
import './DisplayArea.scss'

export default class DisplayArea extends Component {
  constructor(props) {
      super(props);
      this.state = {
        favorites: [],
        showFavorite: false
      }
  }

  toggleFavorite = () => {
    this.setState({showFavorite: !this.state.showFavorite})
  }
  
  render() {
    const { currentData, currentTitle } = this.props
    const { favorites } = this.state
    const { showFavorite } = this
    return (
      <div>
        <button className='favoriteButton' onClick={showFavorite}>Show Favorites</button>
        <DescriptionCard currentData={currentData} 
                        currentTitle={currentTitle}
                        favorites={favorites}
        />
      </div>
    )
  }
}
