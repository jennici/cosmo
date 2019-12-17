import React, { Component } from "react";
import 'semantic-ui-css/semantic.css';
import 'bootstrap/dist/css/bootstrap.css';
import ShareButton from '../components/ShareButton';
import picarrow from '../pictures/picarrow.svg';
import picavatar2 from '../pictures/picavatar2.png';
import picskincare2 from '../pictures/picskincare2.png';
import picbio from '../pictures/picbio.png';
import picethical from '../pictures/picethical.png';
import picfair from '../pictures/picfair.png';
import picvegan from '../pictures/picvegan.png';
import picorga from '../pictures/picorga.png';

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
            
            <p style={{fontWeight:'bold'}}> We throw the term around all the time without going deep. 
            Here’s how to put your money where your mouth is.
            </p>
            
            <p>
            You love shopping but you also love the environment—and yes, you can have both. 
            Here, designer Mara Hoffman and Amour Vert CEO Aaron Hoey, who use nice-to-the-earth practices in their businesses, 
            define all the words you need in your vocab. Your friends will be *so* impressed next time you go post-brunch shopping.
            </p>

            {/* BIODEGRADABLE */}

            <h2 style={{fontFamily:'Futura, Helvetica', fontSize:'30px', fontWeight:'800', letterSpacing:'2.55px', color:'#ff4c49', backgroundColor:'#fff5f2', padding:'9%'}}> “Biode­gradable” </h2>

            <p style={{padding:'2%'}}>
            This stuff is made with minimal damage to the planet—aka without polluting all over the place.
            </p>

            <a href="https://www.vaude.com/en-GB/Products/Eco-Fair-Collection/Sustainable-Materials/Primaloft/" target="_blank" rel="noopener noreferrer" className="ui huge image">
                <img src={picbio} alt="huge" style={{margin:'auto', padding:'2%'}} />
            </a>

            {/* ECO-FRIENDLY */}
            
            <h2 style={{fontFamily:'Futura, Helvetica', fontSize:'30px', fontWeight:'800', letterSpacing:'2.55px', color:'#ff4c49', backgroundColor:'#fff5f2', padding:'9%'}}> “Eco-friendly” </h2>

            <p style={{padding:'2%'}}>
            Silk, linen, wool, and hemp ­fabrics easily decompose into natural ­elements 
            (as in, not landfill filler) after being trashed.
            </p>

            {/* ETHICAL */}

            <h2 style={{fontFamily:'Futura, Helvetica', fontSize:'30px', fontWeight:'800', letterSpacing:'2.55px', color:'#ff4c49', backgroundColor:'#fff5f2', padding:'9%'}}> “Ethical” </h2>

            <p style={{padding:'2%'}}>
            An umbrella term that essentially means the people who worked on an item were treated safely and paid fairly. 
            Buying ­ethical means you’ll empower others—and get all the compliments.
            </p>

            <a href="https://www.outdoorvoices.com/products/techsweat-7-8-zoom-legging?variant=21464490180686" target="_blank" rel="noopener noreferrer" className="ui huge image">
                <img src={picethical} alt="huge" style={{margin:'auto', padding:'2%'}} />
            </a>

            {/* FAIR TRADE */}

            <h2 style={{fontFamily:'Futura, Helvetica', fontSize:'30px', fontWeight:'800', letterSpacing:'2.55px', color:'#ff4c49', backgroundColor:'#fff5f2', padding:'9%'}}> “Fair trade” </h2>

            <p style={{padding:'2%'}}>
            If your v cute retro denim minidress is fair trade, 
            it was made by workers in an underdeveloped country who earn a fair living wage.
            </p>

            <a href="https://www.outdoorvoices.com/products/techsweat-7-8-zoom-legging?variant=21464490180686" target="_blank" rel="noopener noreferrer" className="ui huge image">
                <img src={picfair} alt="huge" style={{margin:'auto', padding:'3%'}} />
            </a>

            {/* VEGAN */}

            <h2 style={{fontFamily:'Futura, Helvetica', fontSize:'30px', fontWeight:'800', letterSpacing:'2.55px', color:'#ff4c49', backgroundColor:'#fff5f2', padding:'9%'}}> “Vegan” </h2>

            <p style={{padding:'2%'}}>
            When zero animal products (like leather, fur, or even silk) go into making something. 
            These gorge python slingbacks, for instance? Not actually from an actual python.
            </p>

            <a href="https://amourvert.com/products/angela-roihamilton-mini-chain-crossbody?variant=16678353469511&source=pepperjam&publisherId=21181&clickId=2939892115" target="_blank" rel="noopener noreferrer" className="ui huge image">
                <img src={picvegan} alt="huge" style={{margin:'auto', padding:'2%'}} />
            </a>

            {/* RECYCLED */}

            <h2 style={{fontFamily:'Futura, Helvetica', fontSize:'30px', fontWeight:'800', letterSpacing:'2.55px', color:'#ff4c49', backgroundColor:'#fff5f2', padding:'9%'}}> “Recycled” </h2>

            <p style={{padding:'2%'}}>
            One of the three Rs you learned way back in the day. 
            It means an item was created from materials (plastic, rubber, metal, fabrics, etc.) that have been reused.
            </p>

            {/* SUSTAINABILITY */}

            <h2 style={{fontFamily:'Futura, Helvetica', fontSize:'30px', fontWeight:'800', letterSpacing:'2.55px', color:'#ff4c49', backgroundColor:'#fff5f2', padding:'9%'}}> “Sustainability” </h2>

            <p style={{padding:'2%'}}>
            Sort of like a combination of “eco-friendly” and “ethical.” Translation: 
            The company that made your gorge floral-print skirt was nice to the environment and looked out for its workers.
            </p>

             {/* ORGANIC */}

             <h2 style={{fontFamily:'Futura, Helvetica', fontSize:'30px', fontWeight:'800', letterSpacing:'2.55px', color:'#ff4c49', backgroundColor:'#fff5f2', padding:'9%'}}> “Organic” </h2>

            <p style={{padding:'2%'}}>
            Sort of like a combination of “eco-friendly” and “ethical.” Translation: 
            The company that made your gorge floral-print skirt was nice to the environment and looked out for its workers.
            </p>

            <a href="https://www.veja-store.com/fr/femme/2957-v-10-white-emeraude-black.html" target="_blank" rel="noopener noreferrer" className="ui huge image">
                <img src={picorga} alt="huge" style={{margin:'auto', padding:'2%'}} />
            </a>

            {/* ARTICLE TEASER "INTERNAL" LINK */}

            <h3 style={{fontFamily:'Source Sans Pro, Helvetica', fontSize:'20px', fontWeight:'normal', padding:'2%'}}> Now that you're highly equipped for your next talk at the coffeemachine about "fashion sustainability", we are eager to show you the most fashion-forward brands out there! </h3>

            <h3 style={{fontFamily:'Source Sans Pro, Helvetica', fontSize:'20px', fontWeight:'bold', padding:'3%'}}> <a href="https://www.cosmopolitan.com/style-beauty/fashion/g9255699/sustainable-eco-green-clothing-brands/" target="_blank" rel="noopener noreferrer" style={{color:'#ff4c49'}}> Here Come 21 Sustainable Clothing Brands for People Who Give a Sh*t About the Environment! </a> </h3>

        </div>

          </React.Fragment>
      ); 
   }
}