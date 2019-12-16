import React, {Component} from 'react'
import style from '../pictures/style.png'


class Style extends Component{
    render(){
        return(
            <div>
                <img src={style} style={{width: "100%"}} alt="stylepicture" />
            </div>
        )
    }
}

export default Style