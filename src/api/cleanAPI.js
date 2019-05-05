import { fetchData } from './index';


//fetchPeopleChain/cleanPeople

const fetchPeople = (url) => {
    return fetchData(url)
        .then(result => fetchHomeworld(result.results))
        .then(newResult => fetchSpecies(newResult))
}

const fetchHomeworld = (peopleArray) => {
    const peopleWithHomes = peopleArray.map( person => {
        return fetchData(person.homeworld)
            .then(peoplesHome => ({...person, 
                                      homeworld: peoplesHome.name, 
                                      population: peoplesHome.population}))
    })
    return Promise.all(peopleWithHomes);
}

const fetchSpecies = (newPeopleArray) => {
    const peopleWithSpecies = newPeopleArray.map( person => {
        return fetchData(person.species[0])
            .then(peoplesSpecies => ({...person, 
                                         language: peoplesSpecies.language,
                                         species: peoplesSpecies.name}))
    })
    return Promise.all(peopleWithSpecies);
}

const cleanPeople = (peopleArray) => {
    return peopleArray.map( person => {
        return {
            'Name': person.name,
            'Homeworld': person.homeworld,
            'Species': person.species,
            'Language': person.language,
            'Population': person.population,
            'Favorite': false
        }
    });
}

//fetchPlanetsChain/cleanPlanets

const fetchPlanets = (url) => {
    return fetchData(url)
        .then(result => getPlanetResidents(result.results))
}

const getPlanetResidents = (planets) => {
    const planetsWithResidents = planets.map( planet => {
        return fetchResidentNames(planet.residents)
            .then(result => ({...planet, residents: result}))
    })
    return Promise.all(planetsWithResidents);
}

const fetchResidentNames = (residents) => {
    const residentNames = residents.map( resident => {
        return fetchData(resident)
            .then(result => result.name)
    })
    return Promise.all(residentNames);
}

const cleanPlanets = (planets) => {
    return planets.map( planet => {
        return {
            'Name': planet.name,
            'Terrain': planet.terrain,
            'Population': planet.population,
            'Climate': planet.climate,
            'Residents': planet.residents,
            'Favorite': false
        }
    });
}

//cleanVechiles

const cleanVehicles = (vehicleArray) => {
    return vehicleArray.map( vehicle => {
        return {
            'Name': vehicle.name,
            'Model': vehicle.model,
            'Class': vehicle.vehicle_class,
            'Passengers': vehicle.passengers,
            'Favorite': false
        }
    });
}   


export { fetchPeople, cleanVehicles, cleanPeople, fetchPlanets, cleanPlanets }