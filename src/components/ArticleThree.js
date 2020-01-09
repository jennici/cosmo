import React, { Component } from "react";
import 'semantic-ui-css/semantic.css';
import 'bootstrap/dist/css/bootstrap.css';
import picjessiej from '../pictures/picjessiej.jpg';
import pickesandu from '../pictures/pickesandu.png';
import picarrow from '../pictures/picarrow.svg';
import ShareButton from '../components/ShareButton';
import FeelScale from '../components/FeelScale';
import CommentSection from '../components/CommentSection';

export default class ArticleThree extends Component {
    state = {
    }
  
  render() {
  
      return (
          <React.Fragment>

        <div className="ui header" style={{backgroundColor:'#fff5f2', padding:'9%'}}>
          <h1 style={{fontSize:'42.5px', fontWeight:'800', fontFamily:'Futura, Helvetica, Arial', letterSpacing:'2.55px'}}>Jessie J talks about the why and how of her vegan lifestyle</h1> 
          <br />
          <img src={pickesandu} className="ui avatar image" alt="author avatar" />
            <span style={{fontSize:'18.75px', fontWeight:'800', letterSpacing:'2.55px', color:'#ff4c49', fontFamily:'Futura, Helvetica, Arial'}}> by KESANDU OKORO <img src={picarrow} alt="arrow" /> JULY 8, 2019 </span> {/* Kesandu means: One who spreads life to all*/}
        </div>

        <div>
            <img src={picjessiej} className="ui massive image" alt="huge" style={{margin:'auto', padding:'2%'}}/>
        </div>

        <div>
            <ShareButton />
        </div>

        <div className="ui text container" style={{fontFamily:'Source Sans Pro, Helvetica, Arial', fontSize:'20px', padding:'2%'}}> 
            <p>
            Plant Based News' Robbie Lockie recently sat down with Jessie J in a world-exclusive interview and got some inspiring stories and words out of her. 
            Jessie went into detail about why she is vegan, her motivations and her understanding of what the vegan lifestyle means for her.
            </p>

            <p>
            "I am at the beginning of this journey and I’m not speaking out on it because 
            I’m doing everything I can or doing everything right. It’s about me trying to inspire 
            the younger generation to love themselves, love their body and love the world.", the singer states.
            </p>

            <h3 style={{fontFamily:'Source Sans Pro, Helvetica', fontSize:'20px', fontWeight:'bold'}}>Having that in mind, just get yourself some tea, lay back and watch the 28 minutes long interview right here:</h3>

            <br/>

            <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/OKxlL4ZJHtg" allowfullscreen></iframe>
            </div>

            <br/>

            <p>
            How do you feel about the interview? Let us know in the comments below. We think that going vegan could really be the real deal – to pick up a line of Jessies new song.
            Apart from the moral aspects of a vegan lifestyle, emerging voices of scientists, activists, celebrities and everyone involved 
            are emphazising on the huge effects that intensive livestock farming has on climate change. By gaining more information
            and getting more conscious about the future we want to protect, everyone should hear inside oneself and be open for a change of perception. 
            </p>

            <br/>

            <div>
            <iframe src="https://giphy.com/embed/l2QDQXCNb2nN9iVXO" width="480" height="269" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/jessiej-jessie-j-real-deal-l2QDQXCNb2nN9iVXO">via GIPHY</a></p>
            </div>

            <br/>

            <h3 style={{fontFamily:'Source Sans Pro, Helvetica', fontSize:'20px', fontWeight:'bold'}}>How does this article make you feel?</h3>

            <br/>

            <div>
            <FeelScale />
            </div>

            <br/>

            <h3 style={{fontFamily:'Source Sans Pro, Helvetica', fontSize:'20px', fontWeight:'bold'}}>Let us know what you think!</h3>

        </div>
            
            <div>
            <CommentSection />
            </div>

          </React.Fragment>
      ); 
   }
}