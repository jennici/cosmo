import React, { Component } from 'react'
import { 
    VictoryChart, 
    VictoryZoomContainer, 
    VictoryLine, 
    VictoryBrushContainer,
    VictoryAxis 
} from 'victory';

export default class CO2Emission extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          zoomDomain: { x: [new Date(1990, 1, 1), new Date(2009, 1, 1)] }
        };
      }

      handleZoom(domain) {
        this.setState({ zoomDomain: domain });
      }

    render() {

        const emission = this.props.emission;
        if (emission === undefined) return <p>No data avaiable.</p>
        console.log(emission["Gas Fuel"])
        

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
                                data={[
                                    { a: new Date(emission.Year, 1, 1), b: emission["Gas Fuel"]}
                                ]}
                                x="a"
                                y="b"
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
                                { key: new Date(emission.Year, 1, 1), b: emission["Gas Fuel"] }
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
                                data={[
                                    { a: new Date(emission.Year), b: emission["Gas Fuel"] }
                                ]}
                                x="a"
                                y="b"
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
                                { key: new Date(emission.Year), b: emission["Gas Fuel"] }
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