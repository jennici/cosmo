import React, {Component} from 'react';
import climateheader from '../pictures/climateheader.jpg';
import cartoongirl from '../pictures/cartoongirl.png';
import bush from '../pictures/bush.png';
import arrow from '../pictures/arrow.png';
import green from '../pictures/gruen-neben-first-question.png';
import cartoongirl2 from '../pictures/cartoongirl2.png';
import Menu from './Menu';
import CO2Emission from './ClimateChangeGraph';
import GlobalTemperature from './GlobalTemperature';
import GlacierSize from './GlacierSize';
import ArticleT from './ArticleT';
import MyBarChart from "./BarChart";
import FeelScale from './FeelScale';

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
            <MyBarChart
                chartName="Bar1"
                CO2Emission1={this.props.CO2Emission1}
                onYearFilter={this.props.onYearFilter}
            />,
            <CO2Emission 
                emission={this.props.emission} 
                co2={this.state.isCO2} 
            />,
            <MyBarChart
                chartName="Bar2"
                CO2Emission2={this.state.CO2Emission2}
                onYearFilter={this.props.onYearFilter}
            />
        );
        if(this.state.isCO2) {
            currentChart = (
            <CO2Emission 
                emission={this.props.emission} 
                co2={this.state.isCO2} 
            />
            /*<MyBarChart
                chartName="Bar1"
                CO2Emission1={this.props.CO2Emission1}
                onYearFilter={this.props.onYearFilter}>
            </MyBarChart>,
            <MyBarChart
                chartName="Bar2"
                CO2Emission2={this.props.CO2Emission2}
                onYearFilter={this.props.onYearFilter}>
            </MyBarChart>*/
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
                <div className="ui grid">
                    <div className="three wide column">
                        <img src={cartoongirl} style={{width: "110%"}} alt="climategirl" />
                    </div>
                    <div className="twelve wide column">
                        <h1 className="intro-h1">CLIMATE CHANGE, DARLING...</h1>
                        <h2 className="intro-h2">...will affect us all and since it's not going anywhere, it's time to get you involved and empowered!</h2>
                        <h3 className="intro-h3">It is easy to feel overwhelmed with everything that's going on right now. With our new series about the topic, we fill you in with what you need to know and how you can elevate your lifestyle to a more sustainable one - all in a fun and easy way!</h3>
                    </div>
                    <div className="eight wide column"></div>
                    <div className="four wide column">
                        <img src={arrow} style={{width: "20%"}}alt="greenarrow" /> 
                    </div>
                    <div className="three wide column">
                        <img src={bush} alt="bushdetail" />
                    </div>
                    <div className="row">
                        <div className="six wide column" style={{background: "white"}}>
                            <img src={green} alt="green bush" style={{width: "600px", height: "500px"}} />
                        </div>
                        <div className="ten wide column" style={{justifyContent: "center"}}>
                            <h1 className="intro-h1">FIRST QUESTION: HOW FAST IS IT GOING?</h1>
                            <h3 className="intro-h3">Just play around and get yourself educated about how things changed within the past decades! As CO2 emissions from fossil fuels, global temperature and glacier size are good indicators for the ongoing change, we created some interactive tools to show you the immense speed with which they shift. To go more in-depth and learn about the consequences, just click the info buttons. </h3>
                        </div>
                    </div>
                </div>   
                <div className="ui grid" id="graph">
                    <div className="row" style={{marginLeft: "5em", marginRight: "5em", marginBottom: "5em"}}>
                        
                        <Menu 
                            co2={this.triggerCO2EmissionState} 
                            temp={this.triggerGlobalTemperatureState} 
                            glacier={this.triggerGlacierSizeState} 
                        />
                        {currentChart}
                    </div>
                    <div className="sixteen wide column" style={{marginTop: "2em"}}>
                        <FeelScale />
                    </div>

                    <div className="ten wide column">
                        <h4 className="intro-h4">KEEP CALM AND BE SUSTAINABLE</h4>
                        <p className="intro-p">With a more green lifestyle and a shift of preceptions, a whole new world opens up! We show you a range of brilliant beauty products and how sustainable brands level up the fashion game with irresistible new materials and creations. Also, our most beloved celebrities lead the way and encourage you to join them - stay tuned for our new interview series!</p>
                    </div>
                    <div className="three wide column">
                        <img src={cartoongirl2} style={{  }} alt="girl 2" />
                    </div>
                </div>
                <ArticleT />
            </div>
        )
    }
}

export default Climate