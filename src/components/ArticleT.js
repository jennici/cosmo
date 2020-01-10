import React, {Component} from 'react'
import picmakeup from '../pictures/picmakeup.png'

class ArticleT extends Component{
    render(){
        return(
            <div className="teaser">
                <div className="ui grid">
                <div className="five wide column">beauty
                <div className="article-card">
                    <img className="article-pic" style={{float:"left"}} src={picmakeup} alt="makeup article"/>
                    <p className="article-text">5 vegan makeup brands you need to know about</p>
                </div>
                <div className="article-card">
                    <img className="article-pic" style={{float:"left"}}src={picmakeup} alt="makeup article"/>
                    <p className="article-text">5 vegan makeup brands you need to know about</p>
                </div>
                </div>
                <div className="five wide column">fashion
                <div className="article-card">
                    <img className="article-pic" style={{float:"left"}} src={picmakeup} alt="makeup article"/>
                    <p className="article-text">5 vegan makeup brands you need to know about</p>
                </div>
                <div className="article-card">
                    <img className="article-pic" style={{float:"left"}}src={picmakeup} alt="makeup article"/>
                    <p className="article-text">5 vegan makeup brands you need to know about</p>
                </div>
                </div>
                <div className="five wide column">interviews
                <div className="article-card">
                    <img className="article-pic" style={{float:"left"}} src={picmakeup} alt="makeup article"/>
                    <p className="article-text">5 vegan makeup brands you need to know about</p>
                </div>
                <div className="article-card">
                    <img className="article-pic" style={{float:"left"}}src={picmakeup} alt="makeup article"/>
                    <p className="article-text">5 vegan makeup brands you need to know about</p>
                </div>
                </div>
                </div>
            </div>
        )
    }
}

export default ArticleT