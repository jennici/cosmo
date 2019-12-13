import React, { Component } from 'react'
import logo from '../../src/pictures/logo.png'

class Footer extends Component {
    render() {
        return (
            <div className="card text-center">
                <div className="card-body">
                    <h5 className="card-title">Copyright group C4</h5>
                    <p className="card-text">cosmopolitan magazine climate page</p>
                    <a href="https://www.cosmopolitan.com/"><img src={logo} className="footer-logo" style={{height: "30px", width: "auto"}} alt="logo-footer"/></a>
                </div>
            </div>

        )
    }
}

export default Footer