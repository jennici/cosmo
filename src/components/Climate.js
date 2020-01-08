import React, {Component} from 'react';
import climateheader from '../pictures/climateheader.jpg';
import cartoongirl from '../pictures/cartoongirl.png';
import bush from '../pictures/bush.png';
import arrow from '../pictures/arrow.png';
import cartoongirl2 from '../pictures/cartoongirl2.png';
import ArticleTeaser from './ArticleTeaser';
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
                {/*<img src={meltingice} style={{ float: "right", width: "18%" }} alt="melting ice" />*/}
                <img src={climateheader} style={{width: "100%"}} alt="climateheader" />
                <div class="ui grid">
                <div class="three wide column">
                <img src={cartoongirl} style={{width: "110%"}} alt="climategirl" />
                </div>
                <div class="twelve wide column"><h1 className="intro-h1">CLIMATE CHANGE, DARLING...</h1>
                <h2 className="intro-h2">...will affect us all and since it's not going anywhere, it's time to get you involved and empowered!</h2>
                <h3 className="intro-h3">It is easy to feel overwhelmed with everything that's going on right now. With our new series about the topic, we fill you in with what you need to know and how you can elevate your lifestyle to a more sustainable one - all in a fun and easy way!</h3>
                </div>
                <div class="eight wide column"></div>
                <div class="four wide column">
                <img src={arrow} style={{width: "20%"}}alt="greenarrow" /> 
                </div>
                <div class="three wide column">
                <img src={bush} alt="bushdetail" />
                </div>
                </div>   

                <div style={{marginLeft: "5em", marginRight: "5em", height: "100%"}}>
                    <Menu 
                        co2={this.triggerCO2EmissionState} 
                        temp={this.triggerGlobalTemperatureState} 
                        glacier={this.triggerGlacierSizeState} 
                    />
                    {currentChart}
                </div>
                <div className="ui grid">
                <div className="ten wide column">
                    <h4 className="intro-h4">KEEP CALM AND BE SUSTAINABLE</h4>
                    <p className="intro-p">With a more green lifestyle and a shift of preceptions, a whole new world opens up! We show you a range of brilliant beauty products and how sustainable brands level up the fashion game with irresistible new materials and creations. Also, our most beloved celeberties lead the way and encourage you to join them - stay tuned for our new interview series!</p>
                </div>
                <div className="three wide column">
                <img src={cartoongirl2} style={{  }} alt="girl 2" />
                </div>
                </div>
                <ArticleTeaser />
            </div>
        )
    }
}

export default Climate