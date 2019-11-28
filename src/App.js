import React, { Component }from 'react';
import './App.css';
import 'semantic-ui-css/semantic.css';
import 'bootstrap/dist/css/bootstrap.css';
import ClimateChangeGraph from './components/ClimateChangeGraph';
import CO2Emission from './components/ClimateChangeGraph';

export default class App extends Component {

  state = {
    emission: [], //How do we want to name our main object in the state?
    loading: true,
    isEmpty: true
  }

  async componentDidMount() {
    const url = "https://my.api.mockaroo.com/co2.json?key=8eb9e6f0";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ 
        emission: data.results, 
        loading: false 
    });
  } 

  triggerCO2EmissionState = () => {
    this.setState({
      ...this.state,
      isEmpty: false,
      isCO2: true
  });
}

  render(){

  
  return (
    <div className="App">
        <Menu co2={this.triggerCO2EmissionState} />
        <CO2Emission emission={this.state.emission} />
    </div>
    );
  }
}