import React, { Component } from 'react';
import PeopleCard from '../CardComponets/PeopleCard';
import PlanetCard from '../CardComponets/PlanetCard';
import VehicleCard from '../CardComponets/VehicleCard';
import './DescriptionCard.scss'

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
                return <div className='planetArea area'>{planetCard}</div>;
            case 'people':
                return <div className='peopleArea area'>{peopleCard}</div>
            case 'vehicles':
                return <div className='vehicleArea area'>{vehicleCard}</div>;
            default:
                return <h2 className='selection'>Select A Category</h2>;
        }
    }
}

