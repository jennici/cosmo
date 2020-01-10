import React, { Component } from 'react'
import { 
    VictoryChart, 
    VictoryTheme,
    VictoryBar,
    VictoryTooltip
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
        const dataChart = temperature.map(item => {
            return { 
                Year: new Date(item["Year"], 1, 1), 
                Value: parseInt(item["Mean"]/1000)
            };
        });
        
        return (
            <div>
                <h1 className="graph">Global temperature
                    <button className="circular ui icon button" style={{padding: "1.6em", marginLeft: "2%"}} onClick={() => this.info() }> {/*use a modal pop up*/}
                        <i className="info icon" style={{color: "#575A89"}}></i>
                    </button>
                </h1>                
                <div>
                    <div className="ui two wide grid" style={{width:"50%"}}>
                    <VictoryChart
                        theme={VictoryTheme.material}
                        domainPadding={10}
                    >
                        <VictoryBar
                            style={{ data: { fill: "#c43a31" } }}
                            data={dataChart}
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
