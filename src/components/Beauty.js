import React, {Component} from 'react'
import beauty from '../pictures/beauty.png'

class Beauty extends Component{
    render(){
        return(
            <div>
                <img src={beauty} alt="beautypic" />
            </div>
        )
    }
}

export default Beauty