import React, {Component} from 'react'
import style from '../pictures/style.png'
import styletext from '../pictures/styletext.png'
import '../css/cosmo.css'


class Style extends Component{
    render(){
        return(
            <div>
                <img src={style} style={{width: "100%"}} alt="stylepicture" />
                <h1>45 Cute Gift Ideas for Any Women In Your Life</h1>
                <img src={styletext} style={{width: "100%"}} alt="styletextpic" />
            </div>
        )
    }
}

export default Style