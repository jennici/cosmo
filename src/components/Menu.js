import React, { Component } from 'react'

export default class Menu extends Component {
    render() {
        return (
            <div>
                <div class="ui secondary pointing menu">
                    <a class="active item" onClick={this.props.co2}>
                        Global CO2 emissions
                    </a>
                    <a class="item">
                        Global Temperature
                    </a>
                    <a class="item">
                        Glacier Size
                    </a>
                </div>
            </div>
        )
    }
}
