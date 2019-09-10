import React from 'react'
import * as Page from './styles'
import Navbar from '../Navbar'
import Text from './BannerText'

const Banner = ({ ...props }) => {
  return (
    <div>
      <Page.Jumbotron>
        <Navbar Admin={{}} />
        <Text {...props} />
      </Page.Jumbotron>
    </div>
  )
}

export default Banner
