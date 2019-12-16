import React, { Component } from "react";
import 'semantic-ui-css/semantic.css';
import 'bootstrap/dist/css/bootstrap.css';
import ShareButton from '../components/ShareButton';
import picmakeup from '../pictures/picmakeup.png'; // ändern in richtiges bild


export default class ArticleTwo extends Component {
    state = {
    }
  
  render() {
  
      return (
          <React.Fragment>

<div className="ui header" style={{backgroundColor:'#fff5f2', padding:'9%'}}>
          <h1 style={{fontSize:'42.5px', fontWeight:'800', fontFamily:'Futura, Helvetica, Arial', letterSpacing:'2.55px'}}>5 vegan makeup brands you need to know about</h1> 
          <br />
          <img src={picjowett} className="ui avatar image" alt="author avatar" />
            <span style={{fontSize:'18.75px', fontWeight:'800', letterSpacing:'2.55px', color:'#ff4c49', fontFamily:'Futura, Helvetica, Arial'}}> by VICTORIA JOWETT <img src={picarrow} alt="arrow" /> DEC 12, 2019 </span>
        </div>

        <div>
            <img src={picmakeup} className="ui massive image" alt="huge" style={{margin:'auto', padding:'2%'}}/>
        </div>

        <div>
            <ShareButton />
        </div>

          </React.Fragment>
      ); 
   }
}

// hier noch nicht begonnen weil wir ja noch die ganzen Style Geschichten in die CSS Datei rüberziehen müssen.