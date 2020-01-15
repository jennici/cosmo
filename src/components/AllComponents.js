import React, {Component} from 'react';
import Navbar from './Navbar';
import Style from './Style';
import Footer from './Footer';
import Beauty from './Beauty';
import { Route, Switch, Redirect } from "react-router-dom";
import Sex from './Sex';
import Politics from './Politics';
import Climate from './Climate';
import ArticleOne from './ArticleOne';
import ArticleTwo from './ArticleTwo';
import ArticleThree from './ArticleThree';
import NotFound from './NotFound';


class AllComponents extends Component{

    render(){

        return(
            <div>
                <Navbar />
                <Redirect exact from="/" to="/style" />
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
                <Climate emission={this.props.emission} temperature={this.props.temperature} glaciersize={this.props.glaciersize} onFilterYear={this.props.onFilterYear} emissions={this.props.emissions} />
                </Route>

                <Route path="/5-vegan-makeup-brands-you-need-to-know-about">
                <ArticleOne />
                </Route>

                <Route path="/okay-but-what-does-sustainable-fashion-actually-mean">
                <ArticleTwo />
                </Route>

                <Route path="/jessie-j-talks-about-the-why-and-how-of-her-vegan-lifestyle">
                <ArticleThree />
                </Route>

                <Route path="*">
                <NotFound />
                </Route>

                </Switch>
                <Footer path="/climate"/>
            </div>
        )
    }
}

export default AllComponents