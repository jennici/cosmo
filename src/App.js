import React, { Component }from 'react';
import './App.css';
import 'semantic-ui-css/semantic.css';
import 'bootstrap/dist/css/bootstrap.css';
import Menu from './components/Menu';
import CO2Emission from './components/ClimateChangeGraph';
import GlobalTemperature from './components/GlobalTemperature';
import GlacierSize from './components/GlacierSize';

export default class App extends Component {

  state = {
    emission: [], //How do we want to name our main object in the state?
    loading: true,
    isCO2: true,
    isTemp: false,
    isGlacier: false
  }

  async componentDidMount() {
    const url = "https://my.api.mockaroo.com/co2.json?key=8eb9e6f0";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ 
        emission: data.results, 
        loading: false 
    });
    console.log(this.state.emission);
  } 

  triggerCO2EmissionState = () => {
    this.setState({
      ...this.state,
      isCO2: true
  });
}

triggerGlobalTemperatureState = () => {
  this.setState({
    ...this.state,
    isCO2: false,
    isTemp: true
});
}

triggerGlacierSizeState = () => {
  this.setState({
    ...this.state,
    isCO2: false,
    isGlacier: true
});
}

  render(){
    let currentChart=<CO2Emission emission={this.state.emission} />
    if(this.state.isCO2)
    {
      currentChart=<CO2Emission emission={this.state.emission} />
    } 
    if(this.state.isTemp)
    {
      currentChart=<GlobalTemperature emission={this.state.emission} />
    }
    if(this.state.isGlacier)
    {
      currentChart=<GlacierSize emission={this.state.emission} />
    }
  
  return (
    <div className="App">
        <Menu co2={this.triggerCO2EmissionState} temp={this.triggerGlobalTemperatureState} glacier={this.triggerGlacierSizeState} />
        {currentChart}
    </div>
    );
  }
}