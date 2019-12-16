import React, {Component} from 'react'
import Navbar from './Navbar'
import Style from './Style'
import Footer from './Footer'
import Beauty from './Beauty'
import { Route, Switch } from "react-router-dom"
import Sex from './Sex'
import Politics from './Politics'
import Climate from './Climate'

class AllComponents extends Component{
    render(){
        return(
            <div>
                <Navbar />
                <Switch>

                <Route path="/style">
                <Style />
                </Route>

                <Route path="/beauty">
                <Beauty />
                </Route>

                <Route path="/sex">
                <Sex />
                </Route>

                <Route path="/politics">
                <Politics />
                </Route>

                <Route path="/climate">
                <Climate />
                </Route>

                </Switch>
                <Footer />
            </div>
        )
    }
}

export default AllComponents