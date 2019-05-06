import React from 'react';
import './VehicleCard.scss'

export default function VehicleCard({vehicle}) {
  return (
    <div className='vehicleCard'>
        <h3 className='vehicleName'>{vehicle.Name}</h3>
        <p>Model: {vehicle.Model}</p>
        <p>Class: {vehicle.Class}</p>
        <p>Passengers: {vehicle.Passengers}</p>
        <button>Add Favorite</button>
    </div>
  )
}
