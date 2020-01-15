import React, { Component } from 'react';
import 'semantic-ui-css/semantic.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../../src/css/cosmo.css';
import picpobear from '../pictures/picpobear.png';


export default class NotFound extends Component {
    render() {
        return (
            <React.Fragment>

            <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <img src={picpobear} className="ui centered medium image" alt="polar bear" style={{marginTop:'15%', padding:'4%'}}/>
                </div>
                <div className="col-md-6">
                    <h2 style={{fontFamily:'Futura, Helvetica', fontSize:'25px', fontWeight:'800', letterSpacing:'2.55px', color:'#ff4c49', backgroundColor:'#fff5f2', padding:'9%'}}> 
                    Oops! We couldn’t find the page you are looking for. We're working on that. <br/> <br/>
                    In the meanwhile, you can check up our climate change topics <a className="article-link" activeClassName="chosen" href="/climate" >here</a>! ;) </h2>
                </div>
                <div className="col-md-3"></div>
            </div>
            </div>

</React.Fragment>

        );
    }
}