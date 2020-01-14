import React, { Component } from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip
  } from 'recharts';
  
  class MyBarChart extends Component {
 
    state = { }
    handleYear = e => {
       if(e.key ==="Enter"){
           this.props.onYearFilter(this.props.chartName, e.target.value);
           }
     
    }  
     
    render () {
       let co2 = this.props.emission;
       if(co2 === undefined) return <p>There is no data.</p>
     
       const dataBarChart = [
           {name: 'Gas', value: co2["Gas Fuel"]},
           {name: 'Liquid', value: co2["Liquid Fuel"]},
           {name: 'Cement', value: co2["Cement"]},
           {name: 'Solid', value: co2["Solid Fuel"]}
        
     ];

     /* const dataGas = emission.map(item => {
            return { 
                Year: new Date(item["Year"], 1, 1), 
                Value1: parseInt(item["Gas Fuel"]),
                Value2: parseInt(item["Liquid Fuel"]),
                Value3: parseInt(item["Solid Fuel"]),
                Value4: parseInt(item["Cement"]),
                Value5: parseInt(item["Gas Flaring"])
            };
        });*/
     
       return(
           <div>
           <input type="text" placeholder="Year..." onKeyDown={e=>this.handleYear(e)}></input>
           <BarChart
           width={350}
           height={400}
           data={dataBarChart}
           margin={{top: 5, right: 30, left: 20, bottom: 5}}>
      <CartesianGrid strokeDasharray="3 3"/>
      <XAxis dataKey="name"/>
      <YAxis/>
      <Bar dataKey="value" fill="#82ca9d" />
     </BarChart>
     </div>
       );
    }
     
    }
     
    export default MyBarChart;              