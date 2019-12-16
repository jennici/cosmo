import React, {Component} from 'react'
import politics from '../pictures/politics.png'

class Politics extends Component{
    render(){
        return(
            <div>
                <img src={politics} style={{width: "100%"}} alt="politicspic" />
            </div>
        )
    }
}

export default Politics