import React from 'react';
import './PeopleCard.scss'

export default function PeopleCard({person}) {
  return (
    <div className='peopleCard'>
      <h3 className='peopleName'>{person.Name}</h3>
      <p className='peopleDescription'>Homeworld: {person.Homeworld}</p>
      <p className='peopleDescription'>Species: {person.Species}</p>
      <p className='peopleDescription'>Language: {person.Language}</p>
      <p className='peopleDescription'>Population: {person.Population}</p>
      <button>Add Favorite</button>
    </div>
  )
}
