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

       // if (props.clicked) make it active and show colour difference, look up work from other girl or Kayvan or YT
            


        return (
            <div>
                <div className="ui vertical buttons" id="myMenu" style={{marginTop: "15%"}}>
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
