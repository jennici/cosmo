import React, { Component } from 'react'
import { 
    VictoryChart, 
    VictoryZoomContainer, 
    VictoryLine, 
    VictoryBrushContainer,
    VictoryAxis 
} from 'victory';

export default class GlacierSize extends Component {

    constructor() {
        super();
        this.state = {
          zoomDomain: { x: [new Date(1990, 1, 1), new Date(2009, 1, 1)] }
        };
      }

      handleZoom(domain) {
        this.setState({ zoomDomain: domain });
      }

    render() {

        const glaciersize = this.props.glaciersize;
        if (glaciersize === undefined) return <p>No data avaiable.</p>

        // map every row from emission (array) to x and y values
        const dataLineChart = glaciersize.map(item => {
            return { x: item["Year"], y: item["Mean"]}
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
                            data={dataLineChart}
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
                            data={dataLineChart}
                        />
                        </VictoryChart>
                    </div>
                </div>
            </div>
        )
    }
}
