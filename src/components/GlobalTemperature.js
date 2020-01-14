import React, { Component } from 'react'
import { 
    VictoryChart, 
    VictoryTheme,
    VictoryBar,
    VictoryTooltip
} from 'victory';
import ModalPopUp from "./Modal";

export default class GlobalTemperature extends Component {

    constructor() {
        super();
        this.state = {
          zoomDomain: { x: [new Date(1950, 1, 1), new Date(2016, 1, 1)] },
          isTemp: [],
          modal: false
        };
      }

      handleZoom(domain) {
        this.setState({ zoomDomain: domain });
      }

      triggerModal = () => {
        this.setState({
            ...this.state,
            modal: true,
    })
};
   

    render() {

        const temperature = this.props.temperature;
        
        if (temperature === undefined) return <p>No data avaiable.</p>

        // map every row from emission (array) to x and y values
        const dataChart = temperature.map(item => {
            return { 
                Year: new Date(item["Year"], 1, 1), 
                Value: parseInt(item["Mean"])
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
            <div>
                <h1 className="graph">Global temperature
                    {showModal}
                    <button className="circular ui button" style={{padding: "1em", marginLeft: "2%", display: "none"}} onClick={() => this.triggerModal()}>
                        <i className="info icon" style={{color: "#575A89", paddingLeft: "50%"}}></i>
                    </button>
                </h1>                
                <div>
                    <div className="ui two wide grid graph">
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
