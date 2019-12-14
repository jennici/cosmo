import React, { Component } from 'react'

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

        if (props.clicked) 
            


        return (
            <div>
                <div className="ui secondary pointing menu" id="myMenu">
                    <button 
                        className="active item"
                        onClick={() => this.props.co2() }
                    >
                        Global CO2 emissions
                    </button>
                    <button 
                        className="item" 
                        onClick={() => this.props.temp() }
                    >
                        Global Temperature
                    </button>
                    <button 
                        className="item" 
                        onClick={() => this.props.glacier() }
                    >
                        Glacier Size
                    </button>                    
                </div>
            </div>
        )
    }
}
