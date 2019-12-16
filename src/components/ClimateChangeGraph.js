import React, { Component } from 'react'
import { 
    VictoryChart, 
    VictoryZoomContainer, 
    VictoryLine, 
    VictoryBrushContainer,
    VictoryAxis,
    VictoryTooltip 
} from 'victory';
import '../../src/css/cosmo.css';

export default class CO2Emission extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          zoomDomain: { x: [new Date(1950, 1, 1), new Date(2014, 1, 1)] },
          isCO2: []
        };
      }

      handleZoom(domain) {
        this.setState({ zoomDomain: domain });
      }

    render() {

        const emission = this.props.emission;
        if (emission === undefined) return <p>No data avaiable.</p>

        // map every row from emission (array) to x and y values
        const dataLineChart = emission.map(item => {
            return { 
                Year: new Date(item["Year"], 1, 1), 
                Value: parseInt(item["Gas Fuel"])
            };
        });

        // info = () => {
        //     $('.ui.longer.modal').modal('show');
        //     return (
        //         <div class="ui modal">
        //             <div class="header">Header</div>
        //             <div class="scrolling content">
        //                 <p>Very long content goes here</p>
        //             </div>
        //         </div>
        //     )
        // }
  

        return (
            <div>
                <div className="row">
                    <h1 className="graph">Global CO2 emissions from fossil fuels</h1>
                    <button className="circular ui icon button" style={{padding: "0.5em"}} onClick={() => this.info() }> {/*use a modal pop up*/}
                        <i className="info icon" style={{color: "#575A89"}}></i>
                    </button>
                </div>
                <div className="ui segment">
                    <div className="ui two wide grid" style={{width:"50%"}}>
                    <VictoryChart 
                            padding={{ top: 5, left: 50, right: 50, bottom: 30 }}
                            width={400}
                            height={250} 
                            scale={{ x: "time" }}
                            containerComponent={
                                <VictoryZoomContainer
                                    zoomDimension="x"
                                    zoomDomain={this.state.zoomDomain}
                                    onZoomDomainChange={this.handleZoom.bind(this)}
                                />
                            }
                        >
                            <VictoryLine
                                style={{
                                    data: { stroke: "tomato" }
                                }}
                                data={dataLineChart}
                                //labels={({ dataLineChart }) => `Gas Fuel: ${dataLineChart.y}`}
                                //labelComponent={<VictoryTooltip  cornerRadius={({ dataLineChart }) => dataLineChart.x * 2} />}
                                x="Year"
                                y="Value"
                            /> 
                    </VictoryChart>

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
                </div>
            </div>
        )
    }
}