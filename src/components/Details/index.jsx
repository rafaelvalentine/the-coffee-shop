import React from 'react'
import { Wrapper, SubWrapper } from './styles'
import Text from '../Banner/BannerText'
import Detail from './DetailParts'

const index = ({ ...props }) => {
  return (
    <Wrapper
      height='70vh'
    >
      <SubWrapper
        padding='50px 0 100px'
        {...props}
      >
        <Detail {...props} />
        <Text {...props} />
      </SubWrapper>

    </Wrapper>
  )
}

export default index
