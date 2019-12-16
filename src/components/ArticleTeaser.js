import React, { Component } from 'react'

export default class ArticleTeaser extends Component {
    render() {
        
        const types = ["beauty", "fashion", "interview"];

        return (
            <div>
                <div style={{ "display": "flex" }}>
                    {types.map(type => {
                    return (
                        <div style={{ "display": "flex", "flexDirection": "column", "margin": "50px" }}>
                            <h1>{type}</h1>
                                {this.state.data.filter(item => item.type === type).map(item => {
                                return (
                                    <a style={{ "display": "flex" }} href={item.url} className="App">
                                        <img style={{ "max-height": "200px", "max-width": "200px" }} src={item.image}></img>
                                        <div>
                                            <p>{item.title}</p>
                                            <p>-->{item.author}</p>
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
