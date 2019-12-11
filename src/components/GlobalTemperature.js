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
          zoomDomain: { x: [new Date(1990, 1, 1), new Date(2009, 1, 1)] },
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
            return { x: item["Year"], y: item["Mean cumulative mass balance"]}
        });
        
        return (
            <div>
                <div className="ui segment">
                    <div className="ui two wide grid" style={{width:"50%"}}>
                        <VictoryChart width={600} height={470} scale={{ x: "time" }}
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
                            />

                        </VictoryChart>
                        <VictoryChart
                            padding={{ top: 0, left: 50, right: 50, bottom: 30 }}
                            width={600} height={100} scale={{ x: "time" }}
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
                            // do we need this for all brushing?
                            data={[
                                { key: new Date(1982, 1, 1), b: 125 },
                                { key: new Date(1987, 1, 1), b: 257 },
                                { key: new Date(1993, 1, 1), b: 345 },
                                { key: new Date(1997, 1, 1), b: 515 },
                                { key: new Date(2001, 1, 1), b: 132 },
                                { key: new Date(2005, 1, 1), b: 305 },
                                { key: new Date(2011, 1, 1), b: 270 },
                                { key: new Date(2015, 1, 1), b: 470 }
                	        ]}
                            x="key"
                            y="b"
                        />
                        </VictoryChart>
                        <VictoryChart width={600} height={470} scale={{ x: "time" }}
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
                            />

                        </VictoryChart>
                        <VictoryChart
                            padding={{ top: 0, left: 50, right: 50, bottom: 30 }}
                            width={600} height={100} scale={{ x: "time" }}
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
                            data={[
                                { key: new Date(1982, 1, 1), b: 125 },
                                { key: new Date(1987, 1, 1), b: 257 },
                                { key: new Date(1993, 1, 1), b: 345 },
                                { key: new Date(1997, 1, 1), b: 515 },
                                { key: new Date(2001, 1, 1), b: 132 },
                                { key: new Date(2005, 1, 1), b: 305 },
                                { key: new Date(2011, 1, 1), b: 270 },
                                { key: new Date(2015, 1, 1), b: 470 }
                	        ]}
                            x="key"
                            y="b"
                        />
                        </VictoryChart>
                    </div>
                </div>
            </div>
        )
    }
}
