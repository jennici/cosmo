import React, { Component } from 'react'
import logo from '../../src/pictures/logo.png'
import meltingice from '../../src/pictures/meltingice.png'
import '../../src/css/cosmo.css'
import { Link } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="https://www.cosmopolitan.com/"><img src={logo} className="nav-logo" style={{ height: "30px", width: "auto" }} alt="logo" /></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <Link class="nav-link" to="/style">style <span class="sr-only">(current)</span></Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/beauty">beauty</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/sex">sex</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/politics">politics</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/climate">climate</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <img src={meltingice} style={{ float: "right" }} alt="melting ice" />
            </div>
        )
    }
}

export default Navbar