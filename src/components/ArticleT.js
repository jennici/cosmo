import React, {Component} from 'react';
import picmakeup from '../pictures/picmakeup.png';
import benefits from '../pictures/the-benefits-of-natural-conditioners.png'
import picskincare2 from '../pictures/picskincare2.png';
import { Link } from 'react-router-dom';

class ArticleT extends Component{
    render(){
        return(
            <div className="teaser">
                <div className="ui grid">
                <div className="five wide column">beauty
                <div className="article-card">
                    <img className="article-pic" style={{float:"left"}} src={picmakeup} alt="makeup article"/>
                    <p className="article-text">
                        <Link className="article-link" activeClassName="chosen" to="/5-vegan-makeup-brands-you-need-to-know-about">5 vegan makeup brands you need to know about</Link>
                    </p>
                </div>
                <div className="article-card">
                    <img className="article-pic" style={{float:"left"}}src={benefits} alt="natural conditioners"/>
                    <p className="article-text">
                    The Benefits Of Natural Conditioners
                    </p>
                </div>
                </div>
                <div className="five wide column">fashion
                <div className="article-card">
                    <img className="article-pic" style={{float:"left"}} src={picskincare2} alt="makeup article"/>
                    <p className="article-text">
                        <Link className="article-link" activeClassName="chosen" to="/okay-but-what-does-“sustainable-fashion”-actually-mean?">Okay, but What Does “Sustainable Fashion” Actually Mean?</Link>
                    </p>
                </div>
                <div className="article-card">
                    <img className="article-pic" style={{float:"left"}}src={picmakeup} alt="makeup article"/>
                    <p className="article-text">5 vegan makeup brands you need to know about</p>
                </div>
                </div>
                <div className="five wide column">interviews
                <div className="article-card">
                    <img className="article-pic" style={{float:"left"}} src={picmakeup} alt="makeup article"/>
                    <p className="article-text">
                        <Link className="article-link" activeClassName="chosen" to="/jessie-j-talks-about-the-why-and-how-of-her-vegan-lifestyle">Jessie J talks about the why and how of her vegan lifestyle</Link>
                    </p>
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