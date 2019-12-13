import React, {Component} from 'react'
import Navbar from './Navbar'
import Style from './Style'
import Footer from './Footer'

class AllComponents extends Component{
    render(){
        return(
            <div>
                <Navbar />
                <Style />
                <Footer />
            </div>
        )
    }
}

export default AllComponents