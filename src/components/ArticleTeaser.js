import React, { Component } from 'react'
import Column from './Column'
import beauty1 from '../pictures/beauty.pic1.jpg'
import beauty2 from '../pictures/beauty.pic2.jpg'
import interview1 from '../pictures/interview.pic1.jpg'
import fashion1 from '../pictures/fashion.pic1.jpg'

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
          author: 'SOPHIA',
          url: 'https://ethicalelephant.com/cruelty-free-vegan-hair-products/',
          image: beauty1
        },
        {
          type: 'Beauty',
          title: 'Nail Polish for Vegans',
          author: 'CARLI CARDELLINO',
          url: 'https://www.cosmopolitan.com/style-beauty/beauty/how-to/a10886/obsessive-compulsivecosmetics-vpl-nail-polish/',
          image: beauty2
        },
        {
          type: 'Beauty',
          title: 'Nail Polish for Vegans',
          author: 'CARLI CARDELLINO',
          url: 'https://www.cosmopolitan.com/style-beauty/beauty/how-to/a10886/obsessive-compulsivecosmetics-vpl-nail-polish/',
          image: beauty2
        },
        {
          type: 'Fashion',
          title: '21 Sustainable Clothing Brands for People Who Give a Sh*t About the Environment',
          author: 'CARLI CARDELLINO',
          url: 'https://www.cosmopolitan.com/stylebeauty/fashion/g9255699/sustainable-eco-green-clothingbrands/',
          image: fashion1
        },
        {
          type: 'Interviews',
          title: 'Interview: Michael Bloomberg on climate change optimism',
          author: 'OZEANA',
          url: 'https://www.theoryculturesociety.org/interview-with-mike-hulme-on-climate-change-and-consumption/',
          image: interview1
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