import React, { Component } from "react";
import 'semantic-ui-css/semantic.css';
import 'bootstrap/dist/css/bootstrap.css';
import ShareButton from '../components/ShareButton';
import picarrow from '../pictures/picarrow.svg';
import picavatar2 from '../pictures/picavatar2.png';
import picskincare2 from '../pictures/picskincare2.png';


export default class ArticleTwo extends Component {
    state = {
    }
  
  render() {
  
      return (
          <React.Fragment>

<div className="ui header" style={{backgroundColor:'#fff5f2', padding:'9%'}}>
          <h1 style={{fontSize:'42.5px', fontWeight:'800', fontFamily:'Futura, Helvetica, Arial', letterSpacing:'2.55px'}}>Okay, but What Does “Sustainable Fashion” Actually Mean?</h1> 
          <br />
          <img src={picavatar2} className="ui avatar image" alt="author avatar" />
            <span style={{fontSize:'18.75px', fontWeight:'800', letterSpacing:'2.55px', color:'#ff4c49', fontFamily:'Futura, Helvetica, Arial'}}> by LAUREN ADHAV <img src={picarrow} alt="arrow" /> JUL 30, 2019 </span>
        </div>

        <div>
            <img src={picskincare2} className="ui massive image" alt="huge" style={{margin:'auto', padding:'2%'}}/>
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

            

        </div>

          </React.Fragment>
      ); 
   }
}

// hier noch nicht begonnen weil wir ja noch die ganzen Style Geschichten in die CSS Datei rüberziehen müssen.