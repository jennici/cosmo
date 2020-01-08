import React, {Component} from 'react'
import picmakeup from '../pictures/picmakeup.png'
import picskincare2 from '../pictures/picskincare2.png'

class ArticleT extends Component{
    render(){
        return(
            <div className="teaser">
                <div className="ui grid">
                <div className="five wide column">beauty</div>
                <div className="five wide column">fashion</div>
                <div className="five wide column">interviews</div>
                </div>

                
                <div className="ui grid">
                <div className="two wide column">
                    <img className="article-pic" src={picmakeup} alt="makeup article"/>
                </div>
                <div className="two wide column">
                    <p>5 vegan makeup brands you need to know about</p>
                </div>
                </div>

                <div className="ui grid">
                <div className="two wide column">
                    <img className="article-pic" src={picskincare2} alt="skincare artickle"/>
                </div>
                <div className="two wide column">
                    <p>Okay, but What Does “Sustainable Fashion” Actually Mean?</p>
                </div>
                </div>

                <div className="ui grid">
                <div className="two wide column">
                    <img className="article-pic" src={picskincare2} alt="skincare artickle"/>
                </div>
                <div className="two wide column">
                    <p>Okay, but What Does “Sustainable Fashion” Actually Mean?</p>
                </div>
                </div>
            </div>
        )
    }
}

export default ArticleT