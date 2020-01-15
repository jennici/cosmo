import React, {Component} from 'react';
import picmakeup from '../pictures/picmakeup.png';
import benefits from '../pictures/the-benefits-of-natural-conditioners.png'
import fashion from '../pictures/fashion.png';
import jessiej from '../pictures/JessieJ.png';
import innovative from '../pictures/6-innovative-materials-to-save-earth.png';
import dicaprio from '../pictures/Stories-behind DiCaprios-new-documentary.png';
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
                <br />
                <div className="article-card">
                    <img className="article-pic" style={{float:"left"}}src={benefits} alt="natural conditioners"/>
                    <p className="article-text">
                    The Benefits Of Natural Conditioners
                    </p>
                </div>
                </div>
                <div className="five wide column">fashion
                <div className="article-card">
                    <img className="article-pic" style={{float:"left"}} src={fashion} alt="fashion article"/>
                    <p className="article-text">
                        <Link className="article-link" activeClassName="chosen" to="/okay-but-what-does-sustainable-fashion-actually-mean">Okay, but What Does “Sustainable Fashion” Actually Mean?</Link>
                    </p>
                </div>
                <br />
                <div className="article-card">
                    <img className="article-pic" style={{float:"left"}} src={innovative} alt="Innovative materials"/>
                    <p className="article-text">6 Innovative Materials To Save Earth</p>
                </div>
                </div>
                <div className="five wide column">interviews
                <div className="article-card">
                    <img className="article-pic" style={{float:"left"}} src={jessiej} alt="Jessie J talks about her vegan lifestyle"/>
                    <p className="article-text">
                        <Link className="article-link" activeClassName="chosen" to="/jessie-j-talks-about-the-why-and-how-of-her-vegan-lifestyle">Jessie J talks about the why and how of her vegan lifestyle</Link>
                    </p>
                </div>
                <br />
                <div className="article-card">
                    <img className="article-pic" style={{float:"left"}}src={dicaprio} alt="Stories Behind DiCaprio’s New Documentary"/>
                    <p className="article-text">Stories Behind DiCaprio’s New Documentary</p>
                </div>
                </div>
                </div>
            </div>
        )
    }
}

export default ArticleT