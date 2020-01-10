import React, { Component } from 'react'
import Column from './Column'

export default class ArticleTeaser extends Component {

  constructor (props) {
    super(props)
    this.state = {
      /*
        The data for the articles is being staticly saved here.
        New data can be added.
      */
      data: [
        {
          type: 'Beauty',
          title: 'Cruelty-Free & Vegan Hair Product Brands',
          author: 'SOPHIA'
        },
        {
          type: 'Beauty',
          title: 'Nail Polish for Vegans',
          author: 'CARLI CARDELLINO'
        },
        {
          type: 'Beauty',
          title: 'Nail Polish for Vegans',
          author: 'CARLI CARDELLINO'
        },
        {
          type: 'Fashion',
          title: '21 Sustainable Clothing Brands for People Who Give a Sh*t About the Environment',
          author: 'CARLI CARDELLINO'
        },
        {
          type: 'Interviews',
          title: 'Interview: Michael Bloomberg on climate change optimism',
          author: 'OZEANA'
        },
      ]
    }
  }
    render () {
        // The articles are split into these categories
        const types = ['Beauty', 'Fashion', 'Interviews']
        return (
          <div style={{ display: 'flex', background: 'antiquewhite' }}>
            {/* Each category has its column */}
            {types.map(type => <Column type={type} state={this.state}></Column>)}
          </div>
        )
      }
}