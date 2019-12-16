import React, { Component } from "react";
import semantic from 'semantic-ui'; // whats wrong here?

export default class FeelScale extends Component {
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

/* HOW SOOMPI DOES IT:

<div class="feel-scale center-align section">
    <div class="feel-scale-title">How do you feel about this?</div>
    <div class="container flex flex-center-horizontal">
        <div class="actions">
            <span class="circle actions-item">
                <a href="javascript:;" title="Heart" class="">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/73/Emoji_u1f43c.svg">
                </a>
            </span>
            <span class="actions-stats">519</span>
        </div>
        <div class="actions">
            <span class="circle actions-item">
                <a href="javascript:;" title="LOL" class="">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/73/Emoji_u1f43c.svg">
                </a>
            </span>
            <span class="actions-stats">0</span>
        </div>
        <div class="actions">
            <span class="circle actions-item">
                <a href="javascript:;" title="Fire" class="">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/73/Emoji_u1f43c.svg">
                </a>
            </span>
            <span class="actions-stats">0</span>
            </div>
            <div class="actions">
                <span class="circle actions-item">
                    <a href="javascript:;" title="Crying" class="">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/73/Emoji_u1f43c.svg">
                    </a>
                </span>
                <span class="actions-stats">0</span>
            </div>
            <div class="actions">
                <span class="circle actions-item">
                    <a href="javascript:;" title="OMG" class="">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/73/Emoji_u1f43c.svg">
                    </a>
                </span>
                <span class="actions-stats">0</span>
            </div>
        </div>
    </div> */
