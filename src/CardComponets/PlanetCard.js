import React from 'react'

export default function PlanetCard({planet}) {
  return (
    <div>
      <h3>{planet.Name}</h3>
      <p>Terrain: {planet.Terrain}</p>
      <p>Population: {planet.Population}</p>
      <p>Climate: {planet.Climate}</p>
      <p>Residents: {planet.Residents}</p>
    </div>
  )
}
