import React, { Component } from 'react';
import '../css/cosmo.css'

export default class ArticleTeaser extends Component {
    state={
        data: [
            {
              type: "Beauty",
              title: "Cruelty-Free & Vegan Hair Product Brands",
              author: "SOPHIA",
              url: "https://ethicalelephant.com/cruelty-free-vegan-hair-products/",
              image: "",
              alt: "free vegan hair brands"
            },
            {
              type: "Beauty",
              title: "Nail Polish for Vegans",
              author: "CARLI CARDELLINO",
              url: "https://www.cosmopolitan.com/style-beauty/beauty/how-to/a10886/obsessive-compulsivecosmetics-vpl-nail-polish/",
              image: "",
              alt: "nail polish for vegan"
            },
            {
                type: "Fashion",
                title: "Okay, but What Does 'Sustainable Fashion' Actually Mean?",
                author: "LAUREN ADHAV",
                url: "https://www.cosmopolitan.com/style-beauty/beauty/how-to/a10886/obsessive-compulsivecosmetics-vpl-nail-polish/",
                image: "",
                alt: "sustainable fashion explained"
              },
            {
              type: "Fashion",
              title: "21 Sustainable Clothing Brands for People Who Give a Sh*t About the Environment",
              author: "CARLI CARDELLINO",
              url: "https://www.cosmopolitan.com/stylebeauty/fashion/g9255699/sustainable-eco-green-clothingbrands/",
              image: "",
              alt: "sustainable clothing"
            },
            {
              type: "Interview",
              title: "Interview: Michael Bloomberg on climate change optimism",
              author: "OZEANA",
              url: "https://www.theoryculturesociety.org/interview-with-mike-hulme-on-climate-change-and-consumption/",
              image: "",
              alt: "Michael Bloomberg on climate change optimism"
            },
          ],
    }
    render() {
        
        const types = ["Beauty", "Fashion", "Interview"];

        return (
            <div>
                <div style={{ display: "flex" /*justifyContent: "center"*/ }}>
                    {types.map(type => {
                    return (
                        <div style={{ display: "flex", /*flexDirection: "column"*/ margin: "50em" }}>
                            <h1 style={{ color: "#575A89" }}>{type}</h1>
                                {this.state.data.filter(item => item.type === type).map(item => {
                                return (
                                            <a style={{ display: "flex" }} href={item.url} className="App">
                                                <img className="teaser-img" src={item.image} alt={item.alt} />
                                                <div>
                                                    <p className="teaserlink">{item.title}</p>
                                                    <p className="teaserlink">-->{item.author}</p>
                                                </div>
                                            </a>
                                    )
                                })}
                            </div>)}
                        )}
                </div>
            </div>
        )
    }
}
