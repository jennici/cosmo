import React, {Component} from 'react'
import politics from '../pictures/politics.png'

class Politics extends Component{
    render(){
        return(
            <div>
                <img src={politics} alt="politicspic" />
            </div>
        )
    }
}

export default Politics