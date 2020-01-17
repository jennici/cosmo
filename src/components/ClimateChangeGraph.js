import React, { Component } from 'react';
import { 
    VictoryChart, 
    VictoryZoomContainer, 
    VictoryLine, 
    VictoryBrushContainer,
    VictoryAxis,
    VictoryTooltip,
    VictoryTheme
} from 'victory';
import '../../src/css/cosmo.css';
import ModalPopUp from "./Modal";
import zoombar from '../pictures/zoombar.gif';

export default class CO2Emission extends Component {
    
      
      constructor(props) {
        super(props);
        this.state = {
            zoomDomain: { x: [new Date(1950, 1, 1), new Date(2014, 1, 1)],},
            isCO2: [],
            modal: false,
            clicked_index: 0
        };
        this.clickHandler = this.clickHandler.bind(this);
      }

      handleZoom(domain) {
        this.setState({ zoomDomain: domain });
      }

      clickHandler(index){
        console.log(index)
          this.setState({clicked_index: index});
      };

      triggerModal = () => {
        this.setState({
            ...this.state,
            modal: true,
    })
};
      
    filterYear = (year) => {
        this.props.onFilterYear(year);
    };

    render() {

        const emission = this.props.emission;
        if (emission === undefined) return <p>No data avaiable.</p>

        // map every row from emission (array) to x and y values
        const dataLineChart = emission.map(item => {
            return { 
                Year: new Date(item["Year"], 1, 1), 
                Value: parseInt(item["Total"])
            };
        });


        let showModal = (
            <ModalPopUp 
                modal={this.state.modal}
            />
            );
        if(this.state.modal) {
            showModal = (
            <ModalPopUp 
                modal={this.state.modal}
                />
            );

    }
        return (
            <div id="block">
                <div className="row">
                    <div className="ten wide column">
                        <h1 className="graph">Global CO2 emissions from fossil fuels
                            
                            <button className="circular ui button" style={{padding: "1em", marginLeft: "2%", display: "none"}} onClick={() => this.triggerModal()}>
                                <i className="info icon" style={{color: "#575A89", paddingLeft: "50%"}}></i>
                            </button>
                            
                        </h1>
                    </div>
                    <div className="six wide column">
                        {showModal}
                    </div>
                </div>

                {/*events={[{
                                        target: "data",
                                        eventHandlers: {
                                        onMouseOver: () => {
                                            return [
                                            {
                                                target: "data"
                                            }, {
                                                target: "labels"
                                                
                                            }
                                            ];
                                        },
                                        onMouseOut: () => {
                                        return [
                                            {
                                            target: "data"
                                            
                                            }, {
                                            target: "labels"
                                            }
                                        ];
                                        }
                                    }
                                }]} */}
                
                    <div className="container">
                    <div className="row">
                        <div className="col-6 graph">
                        <p>million tons of C</p>
                        <VictoryChart
                                theme={VictoryTheme.material}
                                padding={{ top: 5, left: 50, right: 50, bottom: 30 }}
                                width={400}
                                height={250} 
                                scale={{ x: "time" }}
                                style={{ parent: { overflow: 'visible' }}}
                                containerComponent={
                                <VictoryZoomContainer
                                    zoomDimension="x"
                                    zoomDomain={this.state.zoomDomain}
                                    onZoomDomainChange={this.handleZoom.bind(this)}
                                />}
                            >
                                <VictoryLine
                                    labelComponent={<VictoryTooltip/>}
                                    
                                    style={{
                                        data: { stroke: "tomato" }
                                    }}
                                    data={dataLineChart}
                                    x="Year"
                                    y="Value"
                                /> 
                        </VictoryChart>
                        <p style={{marginLeft: "85%"}}>year</p>

                        <VictoryChart
                                padding={{ top: 5, left: 50, right: 50, bottom: 30 }}
                                width={600} 
                                height={100} 
                                scale={{ x: "time" }}
                                containerComponent={
                                    <VictoryBrushContainer
                                        brushDimension="x"
                                        brushDomain={this.state.zoomDomain}
                                        onBrushDomainChange={this.handleZoom.bind(this)}
                                    />
                                }
                            >
                            <VictoryAxis
                                tickFormat={(x) => new Date(x).getFullYear()}
                            />
                            <VictoryLine
                                style={{
                                    data: { stroke: "tomato" }
                                }}
                                data={dataLineChart}
                                x="Year"
                                y="Value"
                            />
                        </VictoryChart> 
                        
                        </div>
                           <div className="col-6">
                                <h3 className="intro-h3" style={{margin: "auto", textAlign: "left", float: "right"}}>Use the grey bar to learn more about the history of CO2 emissions and how the emissions have exploded over the last decades.</h3>
                                <img src={zoombar} alt="how to drag the zoombar" style={{width: "50%", padding: "1em", border: "1px solid #575A89", textAlign: "center", marginLeft: "12em", float: "center"}} /> 
                            </div>
                        </div>
                        </div>
                    </div>
                              
        )
    
    }}
