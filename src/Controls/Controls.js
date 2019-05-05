import React, { Component } from 'react'
import { fetchData } from '../api';
import { fetchPeople, cleanVehicles, cleanPeople, fetchPlanets, cleanPlanets } from '../api/cleanAPI'

export default class Controls extends Component {
  constructor(props) {
   super(props)

   this.state = {
     people: [],
     vehicles: [],
     planets: [],
     currentData: []
   }
  }

  changeCurrentData = () => {
    this.setState()
  }

  getPlanets = () => {
    const url = 'https://swapi.co/api/planets/'
    fetchPlanets(url)
      .then(result => cleanPlanets(result))
      .then( planets => this.setState({planets}))
  }

  getPeople = () => {
    const url = 'https://swapi.co/api/people/';
    fetchPeople(url)
      .then(result => cleanPeople(result))
      .then(people => this.setState({people}))
  }

  getVehicles = () => {
    const url = 'https://swapi.co/api/vehicles/';
    fetchData(url)
      .then(result => cleanVehicles(result.results))
      .then(vehicles => this.setState({vehicles}))
  }
  
  render() {
    const { dataArray } = this.props
    const buttons = dataArray.map( data => <button key={data}
                                                       onClick={this.getPlanets}>
                                                       {data}
                                           </button>)
    return (
      <div>
        {buttons}
      </div>
    )
  }
}

