import React, {Component} from 'react';
import climate from '../pictures/climate.png';
import meltingice from '../pictures/meltingice.png';
import ArticleTeaser from "../components/ArticleTeaser";
import Menu from './Menu';
import CO2Emission from './ClimateChangeGraph';
import GlobalTemperature from './GlobalTemperature';
import GlacierSize from './GlacierSize';

class Climate extends Component{

    state={
        isCO2: true,
        isTemp: false,
        isGlacier: false,
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

        //current Chart is shown
        let currentChart = (
            <CO2Emission 
                emission={this.props.emission} 
                co2={this.state.isCO2} 
            />
        );
        if(this.state.isCO2) {
            currentChart = (
            <CO2Emission 
                emission={this.props.emission} 
                co2={this.state.isCO2} 
            />
            );
        } 
        if(this.state.isTemp) {
            currentChart = (
            <GlobalTemperature 
                temperature={this.props.temperature} 
                temp={this.state.isTemp}  
                />
            );
        }
        if(this.state.isGlacier) {
            currentChart = (
            <GlacierSize 
                glaciersize={this.props.glaciersize}
                glacier={this.state.isGlacier} 
                />
            );
        }

        return(
            <div>
                <img src={meltingice} style={{ float: "right" }} alt="melting ice" />
                <img src={climate} style={{width: "100%"}} alt="climatepic" />
                <Menu 
                    co2={this.triggerCO2EmissionState} 
                    temp={this.triggerGlobalTemperatureState} 
                    glacier={this.triggerGlacierSizeState} 
                />
                {currentChart}
                <ArticleTeaser />
            </div>
        )
    }
}

export default Climate