import React from 'react';

export default function PeopleCard({person}) {
  return (
    <div>
      <h3>{person.Name}</h3>
      <p>Homeworld: {person.Homeworld}</p>
      <p>Species: {person.Species}</p>
      <p>Language: {person.Language}</p>
      <p>Population: {person.Population}</p>
      <button>Add Favorite</button>
    </div>
  )
}
