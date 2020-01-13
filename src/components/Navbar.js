import React, { Component } from 'react'
import logo from '../../src/pictures/logo.png'
import '../../src/css/cosmo.css'
import { Link } from 'react-router-dom'

class Navbar extends Component {
    render() {

        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="nav-link" to="/"><img src={logo} classNameName="nav-logo" style={{ height: "30px", width: "auto" }} alt="logo" /></Link>
                    {/*Make Toggler working*/}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" activeClassName="chosen" to="/style">style</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" activeClassName="chosen" to="/beauty">beauty</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" activeClassName="chosen" to="/sex">sex</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" activeClassName="chosen" to="/politics">politics</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" activeClassName="chosen" to="/climate">climate</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar