import React, { Component } from "react";
import semantic from 'semantic-ui'; // whats wrong here?

export default class CommentSection extends Component {
    state = {
        loading: true,
    }

    render() {

        if (this.state.loading) {
            return <div>loading...</div>;
        }
    
        return (
        <div>
            
        </div>
        ) //insert here: expression

    }
}