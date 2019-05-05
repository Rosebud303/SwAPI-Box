import React from 'react'

export default function VehicleCard({vehicle}) {
  return (
    <div>
        <h3>{vehicle.Name}</h3>
        <p>Model: {vehicle.Model}</p>
        <p>Class: {vehicle.Class}</p>
        <p>Passengers: {vehicle.Passengers}</p>
        <button>Add Favorite</button>
    </div>
  )
}
