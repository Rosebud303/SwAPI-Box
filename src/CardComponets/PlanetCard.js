import React from 'react';
import './PlanetCard.scss';

export default function PlanetCard({planet}) {
  return (
    <div className='planetCard'>
      <h3 className='planetName'>{planet.Name}</h3>
      <p>Terrain: {planet.Terrain}</p>
      <p>Population: {planet.Population}</p>
      <p>Climate: {planet.Climate}</p>
      <p>Residents: {planet.Residents}</p>
      <button>Add Favorite</button>
    </div>
  )
}
