import React, { Component } from 'react';
// import { fetchData } from '../api';
import Controls from '../Controls/Controls.js';
import DisplayArea from '../DisplayArea/DisplayArea.js';
import Scroll from '../Scroll/Scroll.js'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // people: [],
      // planets: [],
      // vehicles: [],
      // chosenData: [],
      // films: [],
      dataArray: ['people', 'planets', 'vehicles']
    }
  }


  // componentDidMount() {
  //   const { dataArray } = this.state;
  //   dataArray.forEach( data => {
  //     fetchData(`https://swapi.co/api/${data}/`)
  //       .then(result => this.setState({ [data]: result.results }))
  //   });
  // };

  chooseCategory = (e) => {
    const { dataArray } = this.state;
    const newData = dataArray.find( data => {
      return e.target.innerText === data
    });
    this.setState({ chosenData: this.state[newData]})
  };
  
  render() {
    const { dataArray, chosenData } = this.state;
    const { chooseCategory } = this;

    return (
      <div>
        <h1>SwAPI-Box</h1>
        <p>people</p>
        <Scroll />
        <Controls dataArray={dataArray}
                  chooseCategory={chooseCategory}
        />
        <DisplayArea chosenData={chosenData}/>
      </div>
    )
  };
};

