import React, { Component } from 'react'

export default class Menu extends Component {
    render() {
        return (
            <div>
                <div class="ui secondary pointing menu">
                    <a class="active item" onClick={this.props.co2}>
                        Global CO2 emissions
                    </a>
                    <a class="item" onClick={this.props.temp}>
                        Global Temperature
                    </a>
                    <a class="item" onClick={this.props.glacier}>
                        Glacier Size
                    </a>
                </div>
            </div>
        )
    }
}
