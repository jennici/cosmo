import React, {Component} from 'react';
import climate from '../pictures/climate.png';
import meltingice from '../pictures/meltingice.png';
import ArticleTeaser from "../components/ArticleTeaser";

class Climate extends Component{
    render(){
        return(
            <div>
                <img src={meltingice} style={{ float: "right" }} alt="melting ice" />
                <img src={climate} style={{width: "100%"}} alt="climatepic" />
                <ArticleTeaser />
            </div>
        )
    }
}

export default Climate