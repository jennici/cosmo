import React, { Component } from 'react'
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';
import ModalPopUp from "./Modal";


  
  export default class GlacierSize extends Component {

    constructor(props) {
      super(props);
      this.state = {
        modal: []
      };
    }
    
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/64v6ocdx/';
    
    triggerModal = () => {
      this.setState({
          ...this.state,
          modal: true,
  })
};
  
    render() {

        const glaciersize = this.props.glaciersize;
        if (glaciersize === undefined) return <p>No data avaiable.</p>

        const dataArea = [
            {
                name: "Mean cumulative mass balance", value: glaciersize["Mean cumulative mass balance"]
              },
            ];

            glaciersize.map( (GlacierSize) => { //map ≈ for each. Each object iterated in the data array is called a "Mean"
          let concStr = parseInt(GlacierSize.Year)
                          // also the genious who came up with the idea of including a "space" in their api is to be commended!
                  {glaciersize.push( { //pushes the selected data into the const data declared at line 10
                      Year: concStr,
                      MeanCumulativeMassBalance: Math.round(GlacierSize["Mean cumulative mass balance"])
                  } )}
          }
      );
          
          const gradientOffset = () => {
            const dataMax = Math.max(...dataArea.map(i => i.value));
            const dataMin = Math.min(...dataArea.map(i => i.value));
          
            if (dataMax <= 0) {
              return 0;
            }
            if (dataMin >= 0) {
              return 1;
            }
          
            return dataMax / (dataMax - dataMin);
          };
          
          const off = gradientOffset();

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
            <h1 className="graph">Glacier size
              {showModal}
                    <button className="circular ui button" style={{padding: "1em", marginLeft: "2%", display: "none"}} onClick={() => this.triggerModal()}>
                        <i className="info icon" style={{color: "#575A89", paddingLeft: "50%"}}></i>
                    </button>
            </h1>
            <div>
                <div className="ui two wide grid graph" style={{width:"50%", marginLeft: "5em"}}></div>
                <AreaChart
                  width={500}
                  height={400}
                  data={dataArea}
                  margin={{
                    top: 10, right: 30, left: 0, bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <defs>
                    <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                      <stop offset={off} stopColor="green" stopOpacity={1} />
                      <stop offset={off} stopColor="red" stopOpacity={1} />
                    </linearGradient>
                  </defs>
                  <Area type="monotone" dataKey="value" stroke="#000" fill="url(#splitColor)" />
                </AreaChart>
            </div>
        </div>
      );
    }
  }
  



      /* 

        // map every row from emission (array) to x and y values
        const dataChart = glaciersize.map(item => {
            return { 
                Year: new Date(item["Year"], 1, 1),
                Value: parseInt(item["Mean cumulative mass balance"])
            };
        });

        return (
            <div>
                <h1 className="graph">Glacier size
                    <button className="circular ui icon button" style={{padding: "1.6em", marginLeft: "2%"}} onClick={() => this.info() }> {/*use a modal pop up
                        <i className="info icon" style={{color: "#575A89"}}></i>
                    </button>
                </h1>
                <div>
                    <div className="ui two wide grid" style={{width:"50%", marginLeft: "5em"}}>
                    
                    <VictoryChart
                        theme={VictoryTheme.material}
                        labelComponent={<VictoryTooltip />}
                        >
                        <VictoryArea
                            style={{ data: { fill: "#c43a31" } }}
                            data={dataChart}
                            x="Year"
                            y="Value"
                        />
                        </VictoryChart>
                        <VictoryLabel x={50} y={50} className="label"
                            text={"m"}
                        />
                    </div>
                </div>
        */