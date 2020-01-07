import React, { Component } from 'react'
import Column from './Column'

export default class ArticleTeaser extends Component {

  constructor (props) {
    super(props)
    this.state = {
      /*
        Hier werden die Daten für die Artikel statisch gespeichert.
        Diese können durch weitere Einträge erweitert werden
      */
      data: [
        {
          type: 'Beauty',
          title: 'Cruelty-Free & Vegan Hair Product Brands',
          author: 'SOPHIA',
          url: 'https://ethicalelephant.com/cruelty-free-vegan-hair-products/',
          image: 'https://ethicalelephant.com/wp-content/uploads/2016/08/cruelty-free-vegan-hair-brands.jpg'
        },
        {
          type: 'Beauty',
          title: 'Nail Polish for Vegans',
          author: 'CARLI CARDELLINO',
          url: 'https://www.cosmopolitan.com/style-beauty/beauty/how-to/a10886/obsessive-compulsivecosmetics-vpl-nail-polish/',
          image: 'https://hips.hearstapps.com/cos.h-cdn.co/assets/cm/14/25/53a0903aa8f0b_-_cos-obsessive-compulsive-cosmetics-vpl-mdn.jpg?resize=768:*'
        },
        {
          type: 'Fashion',
          title: '21 Sustainable Clothing Brands for People Who Give a Sh*t About the Environment',
          author: 'CARLI CARDELLINO',
          url: 'https://www.cosmopolitan.com/stylebeauty/fashion/g9255699/sustainable-eco-green-clothingbrands/',
          image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sustainable-fashion-1559169790.jpg?crop=1.00xw:1.00xh;0,0&resize=980:*'
        },
        {
          type: 'Interviews',
          title: 'Interview: Michael Bloomberg on climate change optimism',
          author: 'OZEANA',
          url: 'https://www.theoryculturesociety.org/interview-with-mike-hulme-on-climate-change-and-consumption/',
          image: 'https://oceana.org/sites/default/files/styles/ntsc/public/subway_1.jpg?itok=Czoi4kvU'
        }
      ]
    }
  }
    render () {
        // Aufteilung der Artikel in benannte Kategorien
        const types = ['Beauty', 'Fashion', 'Interviews']
        return (
          <div style={{ display: 'flex', background: 'antiquewhite' }}>
            {/* Jede Kategorie bekommt eine Spalte */}
            {types.map(type => <Column type={type} state={this.state}></Column>)}
          </div>
        )
      }
}
