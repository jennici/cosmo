import React, { Component } from 'react';
import 'semantic-ui-css/semantic.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/cosmo.css'

export default class CommentSection extends Component {
    state = {
    }

    render() {
    // Next lines are for the facebook comment section plugin. DON'T FORGET to put the code from index.html into the master branch later!
        return (
        <div class="fb-comments" data-href="https://developers.facebook.com/docs/plugins/comments#configurator" 
        data-width="700" data-numposts="5"></div>
        );
    }
}  