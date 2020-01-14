import React, { Component } from 'react';
import '../../src/css/cosmo.css';

export default class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {clicked_index: 0};
        this.clickHandler = this.clickHandler.bind(this);
      }
      
      clickHandler(index){
        console.log(index)
          this.setState({clicked_index: index});
      };

      render() {
            


        return (
            <div>
                <div className="ui vertical buttons" id="myMenu">
                    <button 
                        className="ui button" 
                        onClick={() => this.props.co2() }
                    >
                        Global CO2 emissions
                    </button>
                    <button 
                        className="ui button" 
                        onClick={() => this.props.temp() }
                    >
                        Global Temperature
                    </button>
                    <button 
                        className="ui button" 
                        onClick={() => this.props.glacier() }
                    >
                        Glacier Size
                    </button>                    
                </div>
            </div>
        )
    }
}
