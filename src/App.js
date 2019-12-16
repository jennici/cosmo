import React, { Component }from 'react';
import './App.css';
import 'semantic-ui-css/semantic.css';
import 'bootstrap/dist/css/bootstrap.css';
import Menu from './components/Menu';
import CO2Emission from './components/ClimateChangeGraph';
import GlobalTemperature from './components/GlobalTemperature';
import GlacierSize from './components/GlacierSize';
import Navigation from "./components/Navigation"
import Card from "./components/Card"

export default class App extends Component {

  state = {
    emission: [],
    temperature: [],
    glaciersize: [],
    sealevel: [],
    loading: true,
    isCO2: true,
    isTemp: false,
    isGlacier: false
  }

    async componentDidMount() {
    const url1 = "https://my.api.mockaroo.com/co2.json?key=8eb9e6f0";
    const url2 = "https://my.api.mockaroo.com/temp.json?key=8eb9e6f0";
    const url3 = "https://my.api.mockaroo.com/glaciersize.json?key=8eb9e6f0";
    const url4 = "https://my.api.mockaroo.com/sealevel.json?key=8eb9e6f0";

    const response1 = await fetch(url1);
    const data1 = await response1.json();

    const response2 = await fetch(url2);
    const data2 = await response2.json();

    const response3 = await fetch(url3);
    const data3 = await response3.json();

    const response4 = await fetch(url4);
    const data4 = await response4.json();
    this.setState({
        emission: data1,
        temperature: data2,
        glaciersize: data3,
        sealevel: data4,
        loading: false
    });

    //console.log(this.state.emission);
    //console.log(this.state.temperature);
    //console.log(this.state.glaciersize);
    //console.log(this.state.sealevel);
  } 

  triggerCO2EmissionState = () => {
    this.setState({
      ...this.state,
      isCO2: true,
      isGlacier: false,
      isTemp: false
  });
}

triggerGlobalTemperatureState = () => {
  this.setState({
    ...this.state,
    isCO2: false,
    isTemp: true,
    isGlacier: false
});
}

triggerGlacierSizeState = () => {
  this.setState({
    ...this.state,
    isCO2: false,
    isGlacier: true,
    isTemp: false
});
}

  render(){

    //check if app and data are loading
  if (this.state.loading) {
      return <div>loading...</div>;
  }

  if (!this.state.emission || !this.state.temperature || !this.state.glaciersize || !this.state.sealevel) {
      return <div>didn't get Climate Change Graph</div>;
  }

    //current Chart is shown
    let currentChart = (
      <CO2Emission 
          emission={this.state.emission} 
          co2={this.state.isCO2} 
        />
    );
    if(this.state.isCO2) {
      currentChart = (
        <CO2Emission 
            emission={this.state.emission} 
            co2={this.state.isCO2} 
          />
      );
    } 
    if(this.state.isTemp) {
      currentChart = (
        <GlobalTemperature 
            temperature={this.state.temperature} 
            temp={this.state.isTemp}  
          />
      );
    }
    if(this.state.isGlacier) {
      currentChart = (
        <GlacierSize 
            glaciersize={this.state.glaciersize}
            glacier={this.state.isGlacier} 
          />
      );
    }
  
  return (
    <div className="App">
        <Navigation />
        <Card />
        <Menu 
            co2={this.triggerCO2EmissionState} 
            temp={this.triggerGlobalTemperatureState} 
            glacier={this.triggerGlacierSizeState} 
        />
        {currentChart}
    </div>
    );
  }
}