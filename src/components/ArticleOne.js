import React, { Component } from "react";
import 'semantic-ui-css/semantic.css';
import 'bootstrap/dist/css/bootstrap.css';
import picmakeup from '../pictures/picmakeup.png';
import picjowett from '../pictures/picjowett.png';
import picarrow from '../pictures/picarrow.svg';
import piccoverfx from '../pictures/piccoverfx.png';
import ShareButton from '../components/ShareButton';

export default class ArticleOne extends Component {
  state = {

  }

render() {

    return (
      <React.Fragment>
        <div className="ui header" style={{backgroundColor:'#fff5f2', padding:'10%'}}>
          <h1 style={{fontSize:'42.5px', fontWeight:'800', fontFamily:'Futura, Helvetica, Arial', letterSpacing:'2.55px'}}>13 vegan makeup brands you need to know about</h1> 
          <br />
          <img src={picjowett} className="ui avatar image" alt="author avatar" />
            <span style={{fontSize:'18.75px', fontWeight:'800', letterSpacing:'2.55px', color:'#ff4c49', fontFamily:'Futura, Helvetica, Arial'}}> by VICTORIA JOWETT <img src={picarrow} alt="arrow" /> DEC 12, 2019 </span>
        </div>

        <div>
            <img src={picmakeup} className="ui huge image" alt="huge" style={{margin:'auto', padding:'2%'}}/>
        </div>

        <div>
            <ShareButton />
        </div>

        <div className="ui text container" style={{fontFamily:'Source Sans Pro, Helvetica, Arial', fontSize:'20px', padding:'2%'}}> 
            <p>
            Ready to embrace a vegan lifestyle? It's never been easier. 
            Yup, more and more beauty brands are jumping on the vegan hype and ditching animal-derived ingredients all together. 
            If you're thinking about making the switch, here's where to start...
            </p>

            <h2 style={{fontFamily:'Futura, Helvetica', fontSize:'30px', fontWeight:'800', letterSpacing:'2.55px', color:'#ff4c49', padding:'4%'}}> 1. Cover FX </h2>
            
            <p>
            Created and developed by former chief chemist and MD at MAC cosmetics, it's no surprise that Cover FX products have become some of our most-reached for makeup. 
            The entire range is cruelty-free and vegan (with the exception of MintTint FX & MintGlaze FX).
            </p>

            <h3 style={{fontFamily:'Source Sans Pro, Helvetica', fontSize:'20px', fontWeight:'bold'}}> Hero products: </h3>

            <div>
                <img src={piccoverfx} className="ui huge image" alt="huge" style={{margin:'auto', padding:'2%'}}/>
            </div>

        </div>
      </React.Fragment>
    );
  }
}


        /* for an image can take up the width of its container, use: className="ui fluid image" */
             // Text container with header 