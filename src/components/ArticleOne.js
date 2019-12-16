import React, { Component } from "react";
import 'semantic-ui-css/semantic.css';
import 'bootstrap/dist/css/bootstrap.css';
import picmakeup from '../pictures/picmakeup.png';
import picjowett from '../pictures/picjowett.png';
import picarrow from '../pictures/picarrow.svg';
import piccoverfx from '../pictures/piccoverfx.png';
import piccoverfx2 from '../pictures/piccoverfx2.png';
import picinika from '../pictures/picinika.png';
import picinika2 from '../pictures/picinika2.png';
import picaxi from '../pictures/picaxi.png';
import picaxi2 from '../pictures/picaxi2.png';
import pickat from '../pictures/pickat.png';
import pickat2 from '../pictures/pickat2.png';
import piceco from '../pictures/piceco.png';
import ShareButton from '../components/ShareButton';

export default class ArticleOne extends Component {
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

        <div className="ui text container" style={{fontFamily:'Source Sans Pro, Helvetica, Arial', fontSize:'20px', padding:'2%'}}> 
            <p>
            Ready to embrace a vegan lifestyle? It's never been easier. 
            Yup, more and more beauty brands are jumping on the vegan hype and ditching animal-derived ingredients all together. 
            If you're thinking about making the switch, here's where to start...
            </p>
            
            {/* COVER FX */}

            <h2 style={{fontFamily:'Futura, Helvetica', fontSize:'30px', fontWeight:'800', letterSpacing:'2.55px', color:'#ff4c49', padding:'4%'}}> 1. Cover FX </h2>
            
            <p>
            Created and developed by former chief chemist and MD at MAC cosmetics, it's no surprise that Cover FX products have become some of our most-reached for makeup. 
            The entire range is cruelty-free and vegan (with the exception of MintTint FX & MintGlaze FX).
            </p>

            <h3 style={{fontFamily:'Source Sans Pro, Helvetica', fontSize:'20px', fontWeight:'bold'}}> Hero products: </h3>

            <a href="https://www.coverfx.com/" target="_blank" rel="noopener noreferrer" className="ui huge image">
                <img src={piccoverfx} alt="huge" style={{margin:'auto', padding:'2%'}} />
            </a>

            <div>
                <img src={piccoverfx2} className="ui huge image" alt="huge" style={{margin:'auto', padding:'2%'}}/>
            </div>

            {/* INIKA */}

            <h2 style={{fontFamily:'Futura, Helvetica', fontSize:'30px', fontWeight:'800', letterSpacing:'2.55px', color:'#ff4c49', padding:'4%'}}> 2. Inika </h2>
            
            <p>
            Arguably one of the most popular vegan makeup brands, Inika has tonnes of choice from liquid foundations to highlighting creams and super-pigmented lipsticks.
            The brand are PETA certified and cruelty-free; they don't test any of their products on animals and all products are vegan.
            </p>

            <h3 style={{fontFamily:'Source Sans Pro, Helvetica', fontSize:'20px', fontWeight:'bold'}}> Hero products: </h3>

            <a href="https://www.inikaorganic.com/" target="_blank" rel="noopener noreferrer" className="ui huge image">
                <img src={picinika} alt="huge" style={{margin:'auto', padding:'2%'}} />
            </a>

            <div>
                <img src={picinika2} className="ui huge image" alt="huge" style={{margin:'auto', padding:'2%'}}/>
            </div>

            {/* AXIOLOGY */}

            <h2 style={{fontFamily:'Futura, Helvetica', fontSize:'30px', fontWeight:'800', letterSpacing:'2.55px', color:'#ff4c49', padding:'4%'}}> 3. Axiology </h2>
            
            <p>
            Axiology is a vegan lipstick brand that's dedicated to producing creamy, 
            pigment-packed lipsticks in a spectrum of shades from jet-black to poppy red.
            </p>

            <h3 style={{fontFamily:'Source Sans Pro, Helvetica', fontSize:'20px', fontWeight:'bold'}}> Hero products: </h3>

            <a href="https://axiologybeauty.com/" target="_blank" rel="noopener noreferrer" className="ui huge image">
                <img src={picaxi} alt="huge" style={{margin:'auto', padding:'2%'}} />
            </a>

            <div>
                <img src={picaxi2} className="ui huge image" alt="huge" style={{margin:'auto', padding:'2%'}}/>
            </div>

            {/* KAT VON D BEAUTY */}

            <h2 style={{fontFamily:'Futura, Helvetica', fontSize:'30px', fontWeight:'800', letterSpacing:'2.55px', color:'#ff4c49', padding:'4%'}}> 4. Kat Von D Beauty </h2>
            
            <p>
            Last year, Kat Von D announced plans to reformulate her entire cosmetics line to ensure every product was vegan. 
            While the process takes a while, she already has a section of her website titled #VeganAlert which is full of 
            products that do not contain any animal products or by-products, and have not been tested on animals.
            </p>

            <h3 style={{fontFamily:'Source Sans Pro, Helvetica', fontSize:'20px', fontWeight:'bold'}}> Hero products: </h3>

            <a href="https://www.katvondbeauty.com/" target="_blank" rel="noopener noreferrer" className="ui huge image">
                <img src={pickat} alt="huge" style={{margin:'auto', padding:'2%'}} />
            </a>

            <div>
                <img src={pickat2} className="ui huge image" alt="huge" style={{margin:'auto', padding:'2%'}}/>
            </div>

            {/* ECO TOOLS */}

            <h2 style={{fontFamily:'Futura, Helvetica', fontSize:'30px', fontWeight:'800', letterSpacing:'2.55px', color:'#ff4c49', padding:'4%'}}> 5. Eco Tools </h2>
            
            <p>
            Purse-friendly makeup brush brand, EcoTools, offer a huge selection of brushes, all of which are vegan.
            </p>

            <h3 style={{fontFamily:'Source Sans Pro, Helvetica', fontSize:'20px', fontWeight:'bold'}}> Hero products: </h3>

            <a href="https://ecotools.com/" target="_blank" rel="noopener noreferrer" className="ui huge image">
                <img src={piceco} alt="huge" style={{margin:'auto', padding:'2%'}} />
            </a>

            <h3 style={{fontFamily:'Source Sans Pro, Helvetica', fontSize:'20px', fontWeight:'bold', padding:'4%'}}> You just stepped into the eco-friendly makeup game. Next stop: vegan skincare!</h3>

            <h3 style={{fontFamily:'Source Sans Pro, Helvetica', fontSize:'20px', fontWeight:'bold'}}> <a href="https://www.cosmopolitan.com/uk/beauty-hair/a46238/vegan-skincare/" target="_blank" rel="noopener noreferrer" style={{color:'#ff4c49'}}> Here are 9 vegan skincare brands you need to try! </a> </h3>

        </div>
      </React.Fragment>
    );
  }
}