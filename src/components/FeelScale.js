import React, { Component } from "react";
import 'semantic-ui-css/semantic.css';
import 'bootstrap/dist/css/bootstrap.css';
import sad from '../pictures/sad.png';
import astonished from '../pictures/picastonished.png';
import dizzy from '../pictures/picdizzy.png'
import smile from '../pictures/picsmile.png';
import love from '../pictures/piclove.png';

export default class FeelScale extends Component {
    constructor(props) {
    super(props);
    this.state = {
        countsad: 0,
        countastonished: 0,
        countdizzy: 0,
        countsmile: 0,
        countlove: 0
    };

    this.incrementsad = this.incrementsad.bind(this)
    this.incrementdizzy = this.incrementdizzy.bind(this)
    this.incrementsmile = this.incrementsmile.bind(this)
    this.incrementlove = this.incrementlove.bind(this)
    this.incrementastonished = this.incrementastonished.bind(this)
    }

        incrementsad() {
          this.setState({
            countsad: this.state.countsad + 1
          })
        }

        incrementastonished() {
            this.setState({
              countastonished: this.state.countastonished + 1
            })
          }

          incrementdizzy() {
            this.setState({
              countdizzy: this.state.countdizzy + 1
            })
          }

          incrementsmile() {
            this.setState({
              countsmile: this.state.countsmile + 1
            })
          }

          incrementlove() {
            this.setState({
              countlove: this.state.countlove + 1
            })
          }
      
    render() {
          
        return (
            
        <React.Fragment>

            <div className="ui five column centered grid">
                
                <div>
                <button className="circular ui icon button"><img src={dizzy} className="ui tiny image" alt="reaction button dizzy eyes" onClick={this.incrementdizzy} /></button>
                <h2 style={{fontFamily:'Futura, Helvetica, Arial', padding:'7%'}}>{this.state.countdizzy}</h2>
                </div>

                <div>
                <button className="circular ui icon button"><img src={love} className="ui tiny image" alt="reaction button heart eyes" onClick={this.incrementlove} /></button>
                <h2 style={{fontFamily:'Futura, Helvetica, Arial', padding:'7%'}}>{this.state.countlove}</h2>
                </div>

                <div>
                <button className="circular ui icon button"><img src={astonished} className="ui tiny image" alt="reaction button I am astonished" onClick={this.incrementastonished} /></button>
                <h2 style={{fontFamily:'Futura, Helvetica, Arial', padding:'7%'}}>{this.state.countastonished}</h2>
                </div>

                <div>
                <button className="circular ui icon button"><img src={sad} className="ui tiny image" alt="reaction button that makes me sad" onClick={this.incrementsad} /></button>
                <h2 style={{fontFamily:'Futura, Helvetica, Arial', padding:'7%'}}>{this.state.countsad}</h2>
                </div>

                <div>
                <button className="circular ui icon button"><img src={smile} className="ui tiny image" alt="reaction button smiling emoji" onClick={this.incrementsmile} /></button>
                <h2 style={{fontFamily:'Futura, Helvetica, Arial', padding:'7%'}}>{this.state.countsmile}</h2>
                </div>

            </div>

         </React.Fragment>

          );
       }
    }
