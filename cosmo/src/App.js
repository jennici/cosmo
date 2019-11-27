import React, { Component } from 'react';
import './App.css';
import './semantic-ui-css.min';
import './bootstrap.min';

export default class App extends Component {

  state = {
    emission: [], //How do we want to name our main object in the state?
    loading: true
  }

  async componentDidMount() {
    const url = "https://my.api.mockaroo.com/co2.json?key=8eb9e6f0";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ 
        emission: data.results, 
        loading: false 
    });
  } 

  render(){

  
  return (
    <div className="App">
  
    </div>
    );
  }
}
