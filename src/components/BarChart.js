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
           {name: 'Gas', uv: co2["Gas Fuel"]},
           {name: 'Liquid', uv: co2["Liquid Fuel"]},
           {name: 'Cement', uv: co2["Cement"]},
           {name: 'Solid', uv: co2["Solid Fuel"]}
        
     ];
     
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
      <Bar dataKey="uv" fill="#82ca9d" />
     </BarChart>
     </div>
       );
    }
     
    }
     
    export default MyBarChart;              