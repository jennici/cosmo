import React, { Component } from "react";
import 'semantic-ui-css/semantic.css';
import 'bootstrap/dist/css/bootstrap.css';

export default class ShareButton extends Component {
    state = {
    }
  
  render() {
  
      return (
        <div style={{padding:'2px'}}>
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
        </div>
      )
   }
}