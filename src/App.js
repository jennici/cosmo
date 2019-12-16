import React, {Component, Image} from 'react';
import './App.css';
import 'semantic-ui-css/semantic.css';
import 'bootstrap/dist/css/bootstrap.css';
import ArticleTeaser from "./components/ArticleTeaser";

export default class App extends Component {

  state = {
    emission: [],
    temperature: [],
    glaciersize: [],
    sealevel: [],
    loading: true,
    data: [
      {
        type: "beauty",
        title: "Cruelty-Free & Vegan Hair Product Brands",
        author: "SOPHIA",
        url: "https://ethicalelephant.com/cruelty-free-vegan-hair-products/",
        image: "https://ethicalelephant.com/wp-content/uploads/2016/08/cruelty-free-vegan-hair-brands.jpg"
      },
      {
        type: "beauty",
        title: "Nail Polish for Vegans",
        author: "CARLI CARDELLINO",
        url: "https://www.cosmopolitan.com/style-beauty/beauty/how-to/a10886/obsessive-compulsivecosmetics-vpl-nail-polish/",
        image: "https://hips.hearstapps.com/cos.h-cdn.co/assets/cm/14/25/53a0903aa8f0b_-_cos-obsessive-compulsive-cosmetics-vpl-mdn.jpg?resize=768:*"
      },
      {
        type: "fashion",
        title: "21 Sustainable Clothing Brands for People Who Give a Sh*t About the Environment",
        author: "CARLI CARDELLINO",
        url: "https://www.cosmopolitan.com/stylebeauty/fashion/g9255699/sustainable-eco-green-clothingbrands/",
        image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sustainable-fashion-1559169790.jpg?crop=1.00xw:1.00xh;0,0&resize=980:*"
      },
      {
        type: "interview",
        title: "Interview: Michael Bloomberg on climate change optimism",
        author: "OZEANA",
        url: "https://www.theoryculturesociety.org/interview-with-mike-hulme-on-climate-change-and-consumption/",
        image: "https://oceana.org/sites/default/files/styles/ntsc/public/subway_1.jpg?itok=Czoi4kvU"
      },
    ],
  }

  async componentDidMount() {
    const url1 = "https://my.api.mockaroo.com/co2.json?key=8eb9e6f0";
    const url2 = "https://my.api.mockaroo.com/temp.json?key=8eb9e6f0";
    const url3 = "https://my.api.mockaroo.com/glaciersize.json?key=8eb9e6f0";
    const url4 = "https://my.api.mockaroo.com/sealevel.json?key=8eb9e6f0";

    const response1 = await fetch(url1);
    const data1 = await response1.json();

    const response2 = await fetch(url2);
    const data2 = await response2.json();

    const response3 = await fetch(url3);
    const data3 = await response3.json();

    const response4 = await fetch(url4);
    const data4 = await response4.json();
    this.setState({
        emission: data1,
        temperature: data2,
        glaciersize: data3,
        sealevel: data4,
        loading: false
    });

    console.log(this.state.emission);
    console.log(this.state.temperature);
    console.log(this.state.glaciersize);
    console.log(this.state.sealevel);
  }



  render(){
    
    return (
      <div>
        <ArticleTeaser />
      </div>
    );
  }
}