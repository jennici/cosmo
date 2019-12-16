import React, { Component } from "react";
import 'semantic-ui-css/semantic.css';
import 'bootstrap/dist/css/bootstrap.css';
import picmakeup from '../pictures/picmakeup.png'
import picjowett from '../pictures/picjowett.png'
import picarrow from '../pictures/picarrow.svg'

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
            <img src={picmakeup} className="ui huge image" alt="huge" style={{margin: 'auto', padding: '3%'}}/>
        </div>

        <button className="ui circular facebook icon button">
            <i className="facebook icon"></i>
        </button>
        <button className="ui circular twitter icon button">
            <i className="twitter icon"></i>
        </button>
        <button className="ui circular linkedin icon button">
            <i className="linkedin icon"></i>
        </button>
        <button className="ui circular instagram icon button">
            <i className="instagram icon"></i>
        </button>

        <div className="ui text container"> 
            <p>
            Ready to embrace a vegan lifestyle? It's never been easier. 
            Yup, more and more beauty brands are jumping on the vegan hype and ditching animal-derived ingredients all together. 
            If you're thinking about making the switch, here's where to start...
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link
                mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
                eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam
                lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius
                laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
                ultricies nisi.
            </p>
        </div>
      </React.Fragment>
    );
  }
}


        /* for an image can take up the width of its container, use: className="ui fluid image" */
             // Text container with header 