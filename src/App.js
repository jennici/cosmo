import React, {Component, Image} from 'react';
import './App.css';
import 'semantic-ui-css/semantic.css';
import 'bootstrap/dist/css/bootstrap.css';
import AllComponents from './components/AllComponents';
import earth from "./pictures/loading_earth2.gif"

export default class App extends Component {

  state = {
    emission: [],
    temperature: [],
    glaciersize: [],
    sealevel: [],
    loading: true
  }
    

    async componentDidMount() {
    const url1 = "https://my.api.mockaroo.com/co2.json?key=8eb9e6f0";
    const url2 = "https://my.api.mockaroo.com/temp.json?key=8eb9e6f0";
    const url3 = "https://my.api.mockaroo.com/glaciersize.json?key=8eb9e6f0";
    const url4 = "https://my.api.mockaroo.com/sealevel.json?key=8eb9e6f0";

    const response1 = await fetch(url1);
    const data1 = await response1.json();

    const response2 = await fetch(url2);
    const data2 = await response2.json();

    const response3 = await fetch(url3);
    const data3 = await response3.json();

    const response4 = await fetch(url4);
    const data4 = await response4.json();
    this.setState({
        emission: data1,
        temperature: data2,
        glaciersize: data3,
        sealevel: data4,
        loading: false
    });

    //console.log(this.state.emission);
    //console.log(this.state.temperature);
    //console.log(this.state.glaciersize);
    //console.log(this.state.sealevel);
  } 


  render(){

     //check if app and data are loading
     if (this.state.loading) {
      return <div>
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '60vh'}}>
                  <img src={earth} style={{width: "300px"}} alt="crying earth" />
                </div>
                <div>
                  <p className="loading">    loading...</p>
                  
                </div>
              </div>;
      }

      if (!this.state.emission || !this.state.temperature || !this.state.glaciersize || !this.state.sealevel) {
      return <div>didn't get Climate Change Graph</div>;
      }

  
  return (
    <div className="App">
        <AllComponents emission={this.state.emission} temperature={this.state.temperature} glaciersize={this.state.glaciersize} />
    </div>
    );
  }
}