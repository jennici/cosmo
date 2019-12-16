import React, {Component} from 'react'
import climate from '../pictures/climate.png'

class Climate extends Component{
    render(){
        return(
            <div>
                <img src={climate} alt="climatepic" />
            </div>
        )
    }
}

export default Climate