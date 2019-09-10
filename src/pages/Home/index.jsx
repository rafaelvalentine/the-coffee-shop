import React, { Component } from 'react'
import { Wrapper } from '../../theme/style/styles'
import Banner from '../../components/Banner'
import Missions from '../../components/Mission'
import Details from '../../components/Details'
import Products from '../../components/Products'
import Gallery from '../../components/Gallery'
import Footer from '../../components/Footer'


export default class index extends Component {
  state = {
    bannerText:{
      title:'Premium Coffee',
      body:'A cup of coffee is one of the most important simple pleasures in life',
      foot:''
    },
    missions:[
      {
      image:require('../../assets/images/leaf.svg'),
      text:'qualify coffeecultivated by good hands'
    },
    {
      image:require('../../assets/images/log.svg'),
      text:'flavour single origin froth in spoon iced'
    },
    {
      image:require('../../assets/images/rose.svg'),
      text:'milk ground chicory beans single origin'
    },
    {
      image:require('../../assets/images/flower.svg'),
      text:'coffee  irish robusta spoon robust'
    },
  ],
  details:{
    title:'premium coffee',
    body:'Quality coffee cultivated by good hands',
    foot:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui sapien eget mi proin. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor..'
  },
  products:[
    {
      image: require('../../assets/images/coffee-bags.png'),
      quality:'platinum',
      name:'coffeehouse platnum blend',
      amount:100
    },
    {
      image: require('../../assets/images/coffee-bags.png'),
      quality:'classic',
      name:'coffeehouse classic blend',
      amount:74
    },
    {
      image: require('../../assets/images/coffee-bags.png'),
      quality:'general',
      name:'coffeehouse general blend',
      amount:45
    }
  ],
  gallery:[
    {
      image:require('../../assets/images/close-up-coffee-coffee-drink-885021.jpg')
    },
    {
      image:require('../../assets/images/banner.jpg')
    },
    {
      image:require('../../assets/images/coffee.jpg')
    },
    {
      image:require('../../assets/images/art-black-coffee-coffee-1410229.jpg')
    },
    {
      image:require('../../assets/images/coffee_pic (2).jpg')
    },
    {
      image:require('../../assets/images/coffee_pic (3).jpg')
    },
    {
      image:require('../../assets/images/coffeeOne.jpg')
    },
    {
      image:require('../../assets/images/coffeeTwo.jpg')
    },
    {
      image:require('../../assets/images/aromatic-blur-caffeine-977876.jpg')
    },
    {
      image:require('../../assets/images/coffee_pic (1).jpg')
    },
    {
      image:require('../../assets/images/coffee.jpeg')
    },
    {
      image:require('../../assets/images/coffee-drink-flower-6067.jpg')
    }
  ]
}
  render () {
    return (
      <Wrapper>
        <Banner {...this.state.bannerText}/>
        <Missions Missions={this.state.missions}/>
        <Details altText='true' {...this.state.details} />
        <Products Products={this.state.products} />
        <Details 
        altPosition='true' 
        altText='true' 
        SubWrapperDirection='row-reverse'
        {...this.state.details} />
        <Gallery Gallery={this.state.gallery} />
        <Footer />
      </Wrapper>
    )
  }
}
