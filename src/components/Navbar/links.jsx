import React from 'react'
import { Link, Route } from 'react-router-dom'
import * as Page from './styles'

const NavLinks = ({ img, img2, address, link, activeOnlyWhenExact }) => {
  let _link = `/${link}`
  return (
    <Route
      path={_link}
      exact={activeOnlyWhenExact}
      children={({ match }) => (
        <li className={match ? `active` : ''}>
          <Link to={_link}>
            <span>
              {address}
            </span>
          </Link>
        </li>
      )}
    />
  )
}
export const Links = props => {
  const navlink = props.links.map((link) => {
    return <NavLinks key={link.id} {...link} />
  })
  return (
    <Page.SideNav>
      <ul>
        {navlink}
      </ul>
    </Page.SideNav>
  )
}
/**
   * used defaultProps to pass an array of links for links components
   */
Links.defaultProps = {
  links: [
    {
      id: '1',
      address: 'shop',
      link: 'shop'
    },
    {
      id: '2',
      address: 'wholesale',
      link: 'wholesale'
    },
    {
      id: '3',
      address: 'locations',
      link: 'locations'
    },
    {
      id: '4',
      address: 'our story',
      link: 'ourstory'
    }
  ]
}
export default Links
