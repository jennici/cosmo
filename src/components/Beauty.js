import React, {Component} from 'react'
import beauty from '../pictures/beauty.png'

class Beauty extends Component{
    render(){
        return(
            <div>
                <img src={beauty} style={{width: "100%"}} alt="beautypic" />
            </div>
        )
    }
}

export default Beauty