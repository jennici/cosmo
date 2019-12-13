import React, { Component } from 'react'

export default class Menu extends Component {

    render() {

        // Get the container element
        //var itemContainer = document.getElementById("myMenu");

        // Get all buttons with class="item" inside the container
        //var items = itemContainer.getElementsByClassName("item");

        // Loop through the buttons and add the active class to the current/clicked button
        //for (var i = 0; i < items.length; i++) {
            //items[i].addEventListener("click", function() {
            //var current = document.getElementsByClassName("active");
        
            // If there's no active class
            //if (current.length > 0) {
            //    current[0].className = current[0].className.replace("active");
            //}
        
            // Add the active class to the current/clicked button
            //this.className += " active";
            //});
        //} 

        return (
            <div>
                <div className="ui secondary pointing menu" id="myMenu">
                    <button className="active item" onClick={() => this.props.co2 && this.props.active}>
                        Global CO2 emissions
                    </button>
                    <button className="item" onClick={() => this.props.temp && this.props.active}>
                        Global Temperature
                    </button>
                    <button className="item" onClick={() => this.props.glacier && this.props.active}>
                        Glacier Size
                    </button>
                </div>
            </div>
        )
    }
}
