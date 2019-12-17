import React, {Component} from 'react'
import sex from '../pictures/sex.png'

class Sex extends Component{
    render(){
        return(
            <div>
                <img src={sex} style={{width: "100%"}} alt="sexpic" />
            </div>
        )
    }
}

export default Sex