import React, {Component} from 'react';
import './App.css';
import 'semantic-ui-css/semantic.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navigation from "./components/Navigation"
import Card from "./components/Card"

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

    console.log(this.state.emission);
    console.log(this.state.temperature);
    console.log(this.state.glaciersize);
    console.log(this.state.sealevel);
  } 

  render(){

  
  return (
    <div className="App">
        <Navigation />
        <Card />
    </div>
    );
  }
}