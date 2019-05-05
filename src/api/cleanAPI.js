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
                                         species: peoplesSpecies.name}))
    })
    return Promise.all(peopleWithSpecies);
}

const cleanPeople = (peopleArray) => {
    return peopleArray.map( person => {
        return {
            'name': person.name,
            'homeworld': person.homeworld,
            'species': person.species,
            'population': person.population,
            'favorite': false
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
            'name': planet.name,
            'terrain': planet.terrain,
            'population': planet.population,
            'climate': planet.climate,
            'residents': planet.residents,
            'favorite': false
        }
    });
}

//cleanVechiles

const cleanVehicles = (vehicleArray) => {
    return vehicleArray.map( vehicle => {
        return {
            'name': vehicle.name,
            'model': vehicle.model,
            'class': vehicle.vehicle_class,
            'passangers': vehicle.passengers,
            'favorite': false
        }
    });
}   


export { fetchPeople, cleanVehicles, cleanPeople, fetchPlanets, cleanPlanets }