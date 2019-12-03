import React, { Component } from 'react'

export default class Menu extends Component {
    handleClick = () => {
        const { itemId, onClick } = this.props;
        onClick(itemId);
    }

    render() {

        const { active } = this.props;

        return (
            <div>
                <div className="ui secondary pointing menu">
                    <button className="active item" onClick={this.props.co2}>
                        Global CO2 emissions
                    </button>
                    <button className="item" onClick={this.props.temp}>
                        Global Temperature
                    </button>
                    <button className="item" onClick={this.props.glacier}>
                        Glacier Size
                    </button>
                </div>
            </div>
        )
    }
}
