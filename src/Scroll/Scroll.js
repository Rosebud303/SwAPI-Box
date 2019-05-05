import React, { Component } from 'react';
import { fetchData } from '../api';


export default class Scroll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            films: [],
            randomFilm: {}
        }
    }

    componentDidMount() {
        this.getFilms();
    }

    getFilms = () => {
        fetchData('https://swapi.co/api/films/')
            .then(result => this.setState({films: result.results}, () => {
                this.getRandom();
            }))
    }
    
    getRandom = () => {
        const { films } = this.state
        let randomIndex = Math.floor(Math.random() * (films.length - 1) + 0)
        let newCurrent = films.find((cur, idx) => {
            return idx === randomIndex;
        })
        this.setState({randomFilm: newCurrent});
    }

    render() {
        const { randomFilm } = this.state;
        return (
        <div>
            <div className='crawl'>
                <p>{randomFilm.opening_crawl}</p>
            </div>
            <div className='crawlInfo'>
                <p className='crawlTitle'>{randomFilm.title}</p>
                <p className='crawlDate'>{randomFilm.release_date}</p>
            </div>

        </div>
        )
    }
}
