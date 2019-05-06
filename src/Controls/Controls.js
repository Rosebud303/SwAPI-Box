import React, { Component } from 'react'
import { fetchData } from '../api';
import './Controls.scss'
import DisplayArea from '../DisplayArea/DisplayArea.js';
import { fetchPeople, cleanVehicles, cleanPeople, fetchPlanets, cleanPlanets } from '../api/cleanAPI'

export default class Controls extends Component {
  constructor(props) {
   super(props)

   this.state = {
    people: [],
    vehicles: [],
    planets: [],
    currentData: [],
    currentTitle: ''
   }
  }

  changeCurrentData = (current) => {
    this.setState({currentData: current})
  }

  changeCurrentTitle = (title) => {
    this.setState({currentTitle: title})
  }

  getPlanets = (e) => {
    const url = 'https://swapi.co/api/planets/'
    fetchPlanets(url)
      .then(result => cleanPlanets(result))
      .then( planets => this.setState({planets}, () => {
        this.changeCurrentData(planets)
      }))
      this.changeCurrentTitle(e.target.innerText)
  }

  getPeople = (e) => {
    const url = 'https://swapi.co/api/people/';
    fetchPeople(url)
      .then(result => cleanPeople(result))
      .then(people => this.setState({people}, () => {
        this.changeCurrentData(people)
      }))
      this.changeCurrentTitle(e.target.innerText)
  }

  getVehicles = (e) => {
    const url = 'https://swapi.co/api/vehicles/';
    fetchData(url)
      .then(result => cleanVehicles(result.results))
      .then(vehicles => this.setState({vehicles}, () => {
        this.changeCurrentData(vehicles)
      }))
      this.changeCurrentTitle(e.target.innerText)
  }
  
  render() {
    const { currentData, currentTitle } = this.state
    return (
      <div className='displayControls'>
        <button className='categoryControls' onClick={this.getPeople}>people</button>
        <button className='categoryControls' onClick={this.getPlanets}>planets</button>
        <button className='categoryControls' onClick={this.getVehicles}>vehicles</button>
        <DisplayArea currentData={currentData}
                    currentTitle={currentTitle}
        />
      </div>
    )
  }
}

