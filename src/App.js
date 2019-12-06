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
    isGlacier: false,
    active: true
  }

  async componentDidMount() {
    const url = "https://my.api.mockaroo.com/co2.json?key=8eb9e6f0";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ 
        emission: data, 
        loading: false 
    });
    console.log(this.state.emission["Gas Fuel"]);
  } 

  triggerCO2EmissionState = () => {
    this.setState({
      ...this.state,
      isCO2: true,
      active: true
  });
}

triggerGlobalTemperatureState = () => {
  this.setState({
    ...this.state,
    isCO2: false,
    isTemp: true,
    active: true
});
}

triggerGlacierSizeState = () => {
  this.setState({
    ...this.state,
    isCO2: false,
    isGlacier: true,
    active: true
});
}

  render(){

    //check if app and data are loading
  if (this.state.loading) {
      return <div>loading...</div>;
  }

  if (!this.state.emission) {
      return <div>didn't get Climate Change Graph</div>;
  }

    //current Chart is shown
    let currentChart=<CO2Emission emission={this.state.emission} co2={this.state.isCO2} active={this.state.active} />
    if(this.state.isCO2)
    {
      currentChart=<CO2Emission emission={this.state.emission} co2={this.state.isCO2} active={this.state.active} />
    } 
    if(this.state.isTemp)
    {
      currentChart=<GlobalTemperature emission={this.state.emission} temp={this.state.isTemp} active={this.state.active} />
    }
    if(this.state.isGlacier)
    {
      currentChart=<GlacierSize emission={this.state.emission} glacier={this.state.isGlacier} active={this.state.active} />
    }
  
  return (
    <div className="App">
        <Menu co2={this.triggerCO2EmissionState} temp={this.triggerGlobalTemperatureState} glacier={this.triggerGlacierSizeState} />
        {currentChart}
    </div>
    );
  }
}