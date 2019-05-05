import React, { Component } from 'react';
import PeopleCard from '../CardComponets/PeopleCard';
import PlanetCard from '../CardComponets/PlanetCard';
import VehicleCard from '../CardComponets/VehicleCard';

export default class DescriptionCard extends Component {
  constructor(props) {
    super(props);
        
  }
    
  render() {
    const { currentTitle, currentData } = this.props

    const peopleCard = currentData.map( person => <PeopleCard person={person}
                                                              key={person.Name}
                                                  />)
    const planetCard = currentData.map ( planet => <PlanetCard planet={planet}
                                                               key={planet.Name}
                                                   />)
    const vehicleCard = currentData.map ( vehicle => <VehicleCard vehicle={vehicle}
                                                               key={vehicle.Name}
                                                   />)
    switch(currentTitle) {
        case 'planets':
          return <div>{planetCard}</div>;
        case 'people':
          return <div>{peopleCard}</div>
        case 'vehicles':
          return <div>{vehicleCard}</div>;
        default:
          return <h2>Select A Category</h2>;
      }
  }
}

