import React, { Component } from 'react'
import Column from './Column'
import beauty1 from '../pictures/beauty.pic1.jpg'
import beauty2 from '../pictures/beauty.pic2.jpg'
import beauty3 from '../pictures/beauty.pic3.jpg'
import beauty4 from '../pictures/beauty.pic4.jpg'
import beauty5 from '../pictures/beauty.pic5.jpg'
import beauty6 from '../pictures/beauty.pic6.jpg'
import beauty7 from '../pictures/beauty.pic7.jpg'
import fashion1 from '../pictures/fashion.pic1.jpg'
import fashion2 from '../pictures/fashion.pic2.png'
import fashion3 from '../pictures/fashion.pic3.jpg'
import fashion4 from '../pictures/fashion.pic4.jpg'
import fashion5 from '../pictures/fashion.pic5.jpg'
import fashion6 from '../pictures/fashion.pic6.jpg'
import interview1 from '../pictures/interview.pic1.jpg'
import interview2 from '../pictures/interview.pic2.jpg'
import interview3 from '../pictures/interview.pic3.jpg'
import interview4 from '../pictures/interview.pic4.jpg'
import interview5 from '../pictures/interview.pic5.jpg'
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
          title: '13 Vegan makeup brands you need to know about',
          author: 'VICTORIA JOWETT',
          url: 'https://www.cosmopolitan.com/uk/beauty-hair/makeup/a45915/vegan-makeup/',
          image: beauty3
        },
        {
          type: 'Beauty',
          title: 'Lush just launched a range of vegan make up brushes',
          author: 'GABRIELLE DYER',
          url: 'https://www.cosmopolitan.com/uk/beauty-hair/a27675647/lush-vegan-make-up-brushes/',
          image: beauty4
        },
        {
          type: 'Beauty',
          title: 'Sound the Alarm, Kat Von D Is Dropping Her First-Ever VEGAN Makeup Brushes ',
          author: 'LILIAN MIN',
          url: 'https://www.cosmopolitan.com/style-beauty/beauty/a11651284/kat-von-d-vegan-makeup-brushes/',
          image: beauty5
        },
        {
          type: 'Beauty',
          title: '9 vegan skincare brands that should be on your shopping list',
          author: 'GABRIELLE DYER',
          url: 'https://www.cosmopolitan.com/uk/beauty-hair/a27675647/lush-vegan-make-up-brushes/',
          image: beauty6
        },
        {
          type: 'Beauty',
          title: '11 easy ways to use less plastic in your beauty routine',
          author: 'MADISON FELLER',
          url: 'cosmopolitan.com/uk/beauty-hair/g19887876/easy-ways-use-less-plastic-beauty-routine/',
          image: beauty7
        },
        {
          type: 'Fashion',
          title: '21 Sustainable Clothing Brands for People Who Give a Sh*t About the Environment',
          author: 'CARLI CARDELLINO',
          url: 'https://www.cosmopolitan.com/stylebeauty/fashion/g9255699/sustainable-eco-green-clothingbrands/',
          image: fashion1
        },
        {
          type: 'Fashion',
          title: 'Okay, but What Does “Sustainable Fashion” Actually Mean?',
          author: ' LAUREN ADHAV',
          url: 'https://www.cosmopolitan.com/style-beauty/fashion/a28552865/sustainable-fashion-terms-ethical-recycled/',
          image: fashion2
        },
        {
          type: 'Fashion',
          title: '2The best vegan brands for faux fur, accessories and shoes',
          author: 'SAIREY STEMP',
          url: 'https://www.cosmopolitan.com/uk/fashion/style/news/a41357/best-vegan-stylish-brands-shoes-bags/',
          image: fashion3
        },
        {
          type: 'Fashion',
          title: 'The Eco IT bag is here!',
          author: 'COSMO TEAM',
          url: 'https://www.cosmopolitan.com/uk/fashion/news/a2777/the-eco-it-bag-is-here-80927/',
          image: fashion4
        },
        {
          type: 'Fashion',
          title: 'The winners of the first ever PETA UK Vegan Fashion Awards 2013',
          author: 'NATALIE WALL',
          url: 'https://www.cosmopolitan.com/uk/fashion/news/a18998/PETA-UK-Vegan-Fashion-Awards-2013-winners-2121/',
          image: fashion5
        },
        {
          type: 'Fashion',
          title: 'Fashion influencers are obsessed with new brand Nanushka',
          author: ' ABIGAIL MALBON',
          url: 'https://www.cosmopolitan.com/uk/fashion/style/a27181840/nanushka-fashion-brand/',
          image: fashion6
        },
        {
          type: 'Interviews',
          title: 'Interview: Michael Bloomberg on climate change optimism',
          author: 'OZEANA',
          url: 'https://www.theoryculturesociety.org/interview-with-mike-hulme-on-climate-change-and-consumption/',
          image: interview1
        },
        {
          type: 'Interviews',
          title: 'Climate change: from fantasy to reality',
          author: 'JULIETTE COHEN, LAETITIA BALDESCHI',
          url: 'https://www.next-finance.net/Climate-change-from-fantasy-to',
          image: interview2
        },
        {
          type: 'Interviews',
          title: 'Inspiring Talk With Greta T.',
          author: 'SHANNON BARBOUR',
          url: 'https://www.cosmopolitan.com/politics/a29192401/greta-thunberg-united-nations-activist-climate-change-action-summit-school-strike/',
          image: interview3
        },
        {
          type: 'Interviews',
          title: 'Jane Fonda Keeps Getting Arrested for Protesting and Raising Awareness for the Climate Crisis',
          author: ' SHANNON BARBOUR',
          url: 'https://www.cosmopolitan.com/politics/a29810900/jane-fonda-arrested-protesting-climate-change-crisis-fire-drill-friday/',
          image: interview4
        },
        {
          type: 'Interviews',
          title: 'Interview with Mike Hulme on Climate Change and Consumption',
          author: 'TCS',
          url: 'https://www.theoryculturesociety.org/interview-with-mike-hulme-on-climate-change-and-consumption/',
          image: interview5
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