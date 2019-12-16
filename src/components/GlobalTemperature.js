import React, { Component } from 'react'
import { 
    VictoryChart, 
    VictoryZoomContainer, 
    VictoryLine, 
    VictoryBrushContainer,
    VictoryAxis 
} from 'victory';

export default class GlobalTemperature extends Component {

    constructor() {
        super();
        this.state = {
          zoomDomain: { x: [new Date(1950, 1, 1), new Date(2016, 1, 1)] },
          isTemp: []
        };
      }

      handleZoom(domain) {
        this.setState({ zoomDomain: domain });
      }

    render() {

        const temperature = this.props.temperature;
        if (temperature === undefined) return <p>No data avaiable.</p>

        // map every row from emission (array) to x and y values
        const dataLineChart = temperature.map(item => {
            return { 
                Year: new Date(item["Year"], 1, 1), 
                Value: parseInt(item["Mean"])
            };
        });
        
        return (
            <div>
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
                                labels={({ dataLineChart }) => `Mean: ${dataLineChart.y}`}
                                labelComponent={<VictoryTooltip  cornerRadius={({ dataLineChart }) => dataLineChart.x * 2} />}
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
